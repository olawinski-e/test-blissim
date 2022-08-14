import React from "react";
import {
  Grid,
  Link,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core";
import CategoriesItem from "./CategoriesItem";
import { useRouter } from "next/router";

const useStyles = (theme) => ({
  navLinkCategories: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      alignItems: "flex-end",
    },
  },
  link: {
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      width: "38%",
    },
  },
  filterTitle: {
    fontWeight: "bold",
  },
  filterListItem: {
    cursor: "pointer",
  },
  active: {
    fontWeight: "bold",
  },
  linkText: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  fontSize: {
    fontSize: "1rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.7rem",
    },
  },
});

const CategoriesMenu = (props) => {
  const { classes, categories, products, isWishlist } = props;
  const router = useRouter();

  return (
    <Grid item xs={12} md={3}>
      {!isWishlist && (
        <>
          <Typography variant="h4" className={classes.filterTitle}>
            Categories
          </Typography>
          <List className={classes.navLinkCategories}>
            <Link href="/shop" className={classes.link}>
              <ListItem className={classes.filterListItem}>
                <ListItemText
                  primary={
                    "all".slice(0, 1).toUpperCase() +
                    "all".replace("-", " ").slice(1)
                  }
                  className={classes.linkText}
                  classes={{
                    primary: `${classes.fontSize} ${
                      router.pathname == "/shop" && classes.active
                    }`,
                  }}
                />
              </ListItem>
            </Link>
            {categories?.map((category, index) => {
              return (
                <CategoriesItem
                  products={products}
                  category={category}
                  router={router}
                  key={index}
                />
              );
            })}
          </List>
        </>
      )}
    </Grid>
  );
};

export default withStyles(useStyles)(CategoriesMenu);
