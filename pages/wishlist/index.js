import React, { useContext } from "react";
import DefaultLayout from "../../components/DefaultLayout";
import {
  withStyles,
  Container,
  Grid,
  Typography,
  IconButton,
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ProductsList from "../../components/Shop/ProductsList";
import GlobalContext from "../../contexts/global-context";
import CategoriesMenu from "../../components/Categories/CategoriesMenu";
import { useRouter } from "next/router";

const useStyles = (theme) => ({
  root: { marginBottom: theme.spacing(3) },
  h1: {
    margin: theme.spacing(5, 0),
  },
  item: {
    display: "flex",
    height: theme.spacing(6),
    width: theme.spacing(6),
    alignItems: "center",
  },
  filterTitle: {
    backgroundColor: theme.palette.primary,
    color: theme.palette.primary.main,
  },
  filterListItem: {
    paddingLeft: 0,
  },
});

const Wishlist = (props) => {
  const { classes } = props;
  const context = useContext(GlobalContext);
  const wishlistProducts = context.wishlist;
  const message = context.message;
  const categories = context.categories;

  const router = useRouter();

  return (
    <DefaultLayout>
      <Container maxWidth="lg" className={classes.root}>
        <Grid container justifyContent={"space-between"} alignItems={"center"}>
          <Grid item className={classes.item}>
            <IconButton onClick={() => router.back()}>
              <ArrowBackIcon color="secondary" />
            </IconButton>
          </Grid>
          <Grid item>
            <Typography variant="h1" component="h1" className={classes.h1}>
              Wishlist
            </Typography>
          </Grid>
          <Grid item className={classes.item}>
            {" "}
          </Grid>
        </Grid>

        <Grid container>
          <CategoriesMenu categories={categories} isWishlist={true} />

          <Grid item xs={12} md={9} className={classes.productsListContainer}>
            <ProductsList
              context={context}
              products={wishlistProducts}
              message={message}
              wishlistProducts={wishlistProducts}
            />
          </Grid>
        </Grid>
      </Container>
    </DefaultLayout>
  );
};
export default withStyles(useStyles)(Wishlist);
