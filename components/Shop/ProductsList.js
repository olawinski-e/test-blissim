import React from "react";
import ProductCard from "./ProductCard";
import { Grid, Snackbar, withStyles } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = () => ({});

const ProductList = (props) => {
  const { context, products, wishlistProducts, message } = props;

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (_, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Grid container spacing={2}>
      {products.map((product, index) => (
        <Grid item xs={6} md={4} key={index}>
          <ProductCard
            context={context}
            product={product}
            wishlistProducts={wishlistProducts}
            handleClick={handleClick}
          />
        </Grid>
      ))}

      {message && (
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
          <Alert severity="success">{message}</Alert>
        </Snackbar>
      )}
    </Grid>
  );
};

export default withStyles(useStyles)(ProductList);
