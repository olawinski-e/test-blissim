import React, { useContext } from "react";
import DefaultLayout from "../../components/DefaultLayout";
import { withStyles, Container, Grid, Typography } from "@material-ui/core";
import ProductsList from "../../components/Shop/ProductsList";
import GlobalContext from "../../contexts/global-context";
import CategoriesMenu from "../../components/Categories/CategoriesMenu";

const useStyles = (theme) => ({
  root: { marginBottom: theme.spacing(3) },
  pageTitle: {
    margin: theme.spacing(5, 0),
  },
  filterTitle: {
    backgroundColor: theme.palette.primary,
    color: theme.palette.primary.main,
  },
  filterListItem: {
    paddingLeft: 0,
  },
});

const Shop = (props) => {
  const { classes } = props;
  const context = useContext(GlobalContext);
  const products = context.products;
  const wishlistProducts = context.wishlist;
  const message = context.message;
  const categories = context.categories;

  return (
    <DefaultLayout>
      <Container maxWidth="lg" className={classes.root}>
        <Grid container justifyContent={"center"}>
          <Grid item>
            <Typography
              component="h1"
              variant="h1"
              className={classes.pageTitle}
            >
              SuperShop
            </Typography>
          </Grid>
        </Grid>

        <Grid container>
          <CategoriesMenu categories={categories} />

          <Grid item xs={12} md={9} className={classes.productsListContainer}>
            <ProductsList
              context={context}
              products={products}
              wishlistProducts={wishlistProducts}
              message={message}
            />
          </Grid>
        </Grid>
      </Container>
    </DefaultLayout>
  );
};
export default withStyles(useStyles)(Shop);
