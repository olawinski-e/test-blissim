import React from "react";
import { ListItem, ListItemText } from "@material-ui/core";
import Link from "next/link";
import { withStyles } from "@material-ui/core";

const useStyles = (theme) => ({
  filterListItem: {
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  sizeLittle: {
    [theme.breakpoints.down("sm")]: {
      width: "45%",
    },
  },
  sizeMedium: {
    [theme.breakpoints.down("sm")]: {
      width: "70%",
    },
  },
  sizeLarge: {
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
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

const CategoriesItem = (props) => {
  const { classes, category, router } = props;

  return (
    <Link href={`/shop/${category}`}>
      <ListItem
        className={`${classes.filterListItem} ${
          (category === "jewelry" || category === "electronics") &&
          classes.sizeLittle
        } ${category === "men clothing" && classes.sizeMedium} ${
          category === "women clothing" && classes.sizeLarge
        }`}
      >
        <ListItemText
          primary={
            category.replace("-", " ").slice(0, 1).toUpperCase() +
            category.replace("-", " ").slice(1)
          }
          className={classes.linkText}
          classes={{
            primary: `${classes.fontSize} ${
              router.query.category == category && classes.active
            }`,
          }}
        />
      </ListItem>
    </Link>
  );
};

export default withStyles(useStyles)(CategoriesItem);
