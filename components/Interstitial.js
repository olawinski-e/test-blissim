import React from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import {
  withStyles,
  Typography,
  Button,
  Grid,
  Card,
  IconButton,
  CardMedia,
} from "@material-ui/core";
import { useContext } from "react";
import GlobalContext from "../contexts/global-context";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import DeleteIcon from "@material-ui/icons/Delete";
import { useEffect, useState } from "react";

const useStyles = (theme) => ({
  interstitial: {
    width: "22rem",
    padding: theme.spacing(2),
  },
  productListContainer: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  ToggleIconButton: {
    paddingLeft: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  productItem: {
    padding: theme.spacing(2),
    position: "relative",
    display: "flex",
    boxShadow: "none",
    borderRadius: 0,
    borderBottom: "solid 0.08rem lightgrey",
  },
  productItemContent: {
    width: "11rem",
    marginLeft: theme.spacing(1),
  },
  productItemImg: {
    width: "5rem",
    maxHeight: "6rem",
    maxWidth: "fit-content",
    margin: "auto",
  },
  deleteIconButton: {
    position: "absolute",
    right: 0,
    bottom: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  deleteIcon: {
    fontSize: "1.4rem",
    "&:hover": {
      color: "#283149",
    },
  },
  totalPrice: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    fontWeight: "700",
  },
  buyButton: {
    width: "100%",
    marginTop: theme.spacing(2),
    fontSize: "1rem",
  },
});

const Interstitial = (props) => {
  const { classes } = props;
  const context = useContext(GlobalContext);
  const cart = context.cart;
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    getTotalPrice();
  }, [cart]);

  const handleRemoveProduct = (id) => {
    context.removeProductFromCart(id);
  };

  const getTotalPrice = () => {
    setTotalPrice(
      cart?.reduce((acc, { price }) => {
        return acc + price;
      }, 0),
    );
  };

  return (
    <SwipeableDrawer
      anchor={"right"}
      open={context.open_interstitial}
      onClose={() => context.pushObject("open_interstitial", false)}
      onOpen={() => context.pushObject("open_interstitial", false)}
    >
      <div className={classes.interstitial}>
        <Grid
          container
          alignItems="center"
          className={classes.productListContainer}
        >
          <Grid item>
            <IconButton
              onClick={() => context.pushObject("open_interstitial", false)}
              className={classes.ToggleIconButton}
            >
              <ArrowBackIcon color="secondary" style={{ fontSize: "1.8rem" }} />
            </IconButton>
          </Grid>
          <Grid item>
            <Typography variant="h3">Mon panier</Typography>
          </Grid>
        </Grid>

        <Grid container spacing={2} className={classes.productListContainer}>
          <Grid item>
            <Typography>
              {context.cart.length > 1
                ? `${context.cart.length} produits`
                : `${context.cart.length} produit`}
            </Typography>
          </Grid>

          {cart.map((product, index) => (
            <Grid item xs={12} key={index}>
              <Card className={classes.productItem}>
                <CardMedia
                  component="img"
                  alt={product.title}
                  image={product.image}
                  title={product.title}
                  className={classes.productItemImg}
                />
                <div className={classes.productItemContent}>
                  <Typography color="primary">{product.title}</Typography>
                  <Typography color="secondary">{product.price} €</Typography>
                  <IconButton
                    onClick={() => handleRemoveProduct(product.id)}
                    className={classes.deleteIconButton}
                  >
                    <DeleteIcon
                      color="secondary"
                      className={classes.deleteIcon}
                    />
                  </IconButton>
                </div>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Typography gutterBottom className={classes.totalPrice}>
          Prix total :{" "}
          <span>
            {Math.round(totalPrice * 100) / 100}{" "}
            {totalPrice > 1 ? "euros" : "euro"}
          </span>
        </Typography>
        <Button
          color="primary"
          variant="contained"
          className={classes.buyButton}
        >
          Commander
        </Button>
      </div>
    </SwipeableDrawer>
  );
};

export default withStyles(useStyles)(Interstitial);
