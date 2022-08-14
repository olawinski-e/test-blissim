import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  withStyles,
  IconButton,
} from "@material-ui/core";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import FavoriteIcon from "@material-ui/icons/Favorite";

const useStyles = (theme) => ({
  root: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  content: {
    width: "100%",
  },
  thumbnailContainer: {
    padding: theme.spacing(2),
    textAlign: "center",
    minHeight: "13rem",
    display: "flex",
  },
  thumbnail: {
    maxHeight: "11rem",
    width: "auto",
    margin: "auto",
    maxWidth: "100%",
  },
  name: {
    fontSize: "1rem",
  },
  description: {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
  actions: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  },
  icon: {
    fontSize: "1.4rem",
  },
});

const ProductCard = (props) => {
  const {
    classes,
    context,
    product,
    wishlistProducts,
    handleClick = { handleClick },
  } = props;
  const [isInWishlist, setIsInWishlist] = useState(false);

  useEffect(() => {
    knowIfProductInWishlist(product.id);
  }, [context]);

  const knowIfProductInWishlist = (id) => {
    if (
      wishlistProducts.find((product) => {
        return product.id === id;
      })
    ) {
      setIsInWishlist(true);
    } else setIsInWishlist(false);
  };

  const handleAddToCart = (e, product) => {
    context.addProductToCart(
      product,
      context.pushObject("open_interstitial", true),
    );
  };

  const handleAddToWishlist = (e, product) => {
    if (!isInWishlist) {
      context.addProductToWishlist(product, context.pushObject());
    } else {
      context.removeProductFromWishlist(product.id);
    }
    handleClick();
  };

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <div className={classes.thumbnailContainer}>
          <CardMedia
            component="img"
            alt={product.title}
            image={product.image}
            className={classes.thumbnail}
            title={product.title}
          />
        </div>
        <Typography gutterBottom component="h2" className={classes.name}>
          {product.title}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          className={classes.description}
        >
          {product.description}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {product.price} €
        </Typography>
      </CardContent>
      <CardActions className={classes.actions}>
        <IconButton onClick={(e) => handleAddToCart(e, product)}>
          <ShoppingBasketIcon color="primary" className={classes.icon} />
        </IconButton>
        <IconButton onClick={(e) => handleAddToWishlist(e, product)}>
          <FavoriteIcon
            color={isInWishlist ? "error" : "primary"}
            className={classes.icon}
          />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default withStyles(useStyles)(ProductCard);
