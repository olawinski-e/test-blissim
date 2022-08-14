import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Interstitial from "./Interstitial";
import { withStyles } from "@material-ui/core";

// ===== Basic Layout ===== //
const useStyles = () => ({
  root: {
    minHeight: "100vh",
  },
  main: { minHeight: "84vh" },
});

const DefaultLayout = (props) => {
  const { classes } = props;

  return (
    <>
      <div className={classes.root}>
        <Header />

        <main className={classes.main}>{props.children}</main>

        <Footer />
      </div>

      <Interstitial />
    </>
  );
};

export default withStyles(useStyles)(DefaultLayout);
