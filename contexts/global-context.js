import React from "react";
import { createContext, Component } from "react";
import PropTypes from "prop-types";
import productsData from "./../productsData.json";

const GlobalContext = createContext();

export class GlobalProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open_interstitial: false,
      products: productsData,
      message: null,
      categories: [],
      cart: [],
      wishlist: [],
      pushObject: this.pushObject.bind(this),
      getCategories: this.getCategories.bind(this),
      getCart: this.getCart.bind(this),
      addProductToCart: this.addProductToCart.bind(this),
      removeProductFromCart: this.removeProductFromCart.bind(this),
      getWishlist: this.getWishlist.bind(this),
      addProductToWishlist: this.addProductToWishlist.bind(this),
      removeProductFromWishlist: this.removeProductFromWishlist.bind(this),
    };
  }

  pushObject(key, value, callback) {
    this.setState({ [key]: value }, callback);
  }

  getCart() {
    const sessionStorageCart = JSON.parse(sessionStorage.getItem("cart")); // null if not exist

    if (sessionStorageCart !== null) {
      this.setState({ cart: sessionStorageCart });
    } else {
      this.setState({ cart: [] });
    }
  }

  addProductToCart(product, callback) {
    const newCart = [...this.state.cart];
    newCart.push(product);
    this.setState({ cart: newCart }, () => {
      sessionStorage.setItem("cart", JSON.stringify(newCart));

      if (typeof callback !== "undefined") callback();
    });
  }

  removeProductFromCart(id, callback) {
    const newCart = [...this.state.cart];
    const ProductIndex = newCart.findIndex((p) => p.id === id);
    newCart.splice(ProductIndex, 1);
    this.setState({ cart: newCart }, () => {
      sessionStorage.setItem("cart", JSON.stringify(newCart));
      if (typeof callback !== "undefined") callback();
    });
  }

  getWishlist() {
    const sessionStorageWishlist = JSON.parse(
      sessionStorage.getItem("wishlist"),
    ); // null if not exist

    if (sessionStorageWishlist !== null) {
      this.setState({ wishlist: sessionStorageWishlist });
    } else {
      this.setState({ wishlist: [] });
    }
  }

  addProductToWishlist(product, callback) {
    const newWishlist = [...this.state.wishlist];
    if (!newWishlist.find((p) => p.id === product.id)) {
      newWishlist.push(product);
      this.setState({
        message: "Product added in wishlist",
      });
    }
    this.setState({ wishlist: newWishlist }, () => {
      sessionStorage.setItem("wishlist", JSON.stringify(newWishlist));

      if (typeof callback !== "undefined") callback();
    });
  }

  removeProductFromWishlist(id, callback) {
    const newWishlist = [...this.state.wishlist];
    const ProductIndex = newWishlist.findIndex((p) => p.id === id);
    newWishlist.splice(ProductIndex, 1);
    this.setState({
      message: "Product deleted from wishlist",
    });
    this.setState({ wishlist: newWishlist }, () => {
      sessionStorage.setItem("wishlist", JSON.stringify(newWishlist));
      if (typeof callback !== "undefined") callback();
    });
  }

  getCategories() {
    this.setState({
      categories: productsData?.reduce((catArr, product) => {
        if (!catArr.includes(product.category)) {
          catArr.push(product.category);
        }
        return catArr;
      }, []),
    });
  }

  componentDidMount() {
    this.getCart();
    this.getWishlist();
    this.getCategories();
  }

  render() {
    const { children } = this.props;

    return (
      <GlobalContext.Provider value={{ ...this.state }}>
        {children}
      </GlobalContext.Provider>
    );
  }
}

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const GlobalConsumer = GlobalContext.Consumer;
export default GlobalContext;
