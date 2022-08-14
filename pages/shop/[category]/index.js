import React, { useContext, useEffect, useState } from "react";
import { withStyles, Container, Grid, Typography } from "@material-ui/core";
import DefaultLayout from "../../../components/DefaultLayout";
import GlobalContext from "../../../contexts/global-context";
import ProductsList from "../../../components/Shop/ProductsList";
import CategoriesMenu from "../../../components/Categories/CategoriesMenu";
import { useRouter } from "next/router";

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

const Categories = (props) => {
  const { classes } = props;
  const context = useContext(GlobalContext);
  const products = context.products;
  const wishlistProducts = context.wishlist;
  const message = context.message;
  const categories = context.categories;

  const [categoryProduct, setCategoryProduct] = useState([]);

  const { query } = useRouter();

  useEffect(() => {
    showProductsBasedOnCategory();
  }, [query]);

  const showProductsBasedOnCategory = () => {
    if (query?.category) {
      return setCategoryProduct(
        products.filter((product) => product.category === query.category),
      );
    }
  };

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
              products={categoryProduct ? categoryProduct : products}
              wishlistProducts={wishlistProducts}
              message={message}
            />
          </Grid>
        </Grid>
      </Container>
    </DefaultLayout>
  );
};
export default withStyles(useStyles)(Categories);
