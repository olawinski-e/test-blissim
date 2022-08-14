import React from "react";
import {
  withStyles,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Container,
} from "@material-ui/core";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Link from "next/link";
import { useContext } from "react";
import GlobalContext from "../../contexts/global-context";

const useStyles = (theme) => ({
  toolbar: {
    padding: 0,
    display: "flex",
    justifyContent: "space-between",
  },
  iconsPart: {
    display: "flex",
    alignItems: "center",
  },
  icon: {
    color: theme.palette.light,
    fontSize: "1.4rem",
  },
});

const Header = (props) => {
  const { classes } = props;
  const context = useContext(GlobalContext);

  const toggleDrawer = () => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    context.pushObject("open_interstitial", true);
  };

  return (
    <header className={classes.root}>
      <AppBar position="static" elevation={0}>
        <Container maxWidth="lg">
          <Toolbar className={classes.toolbar}>
            <Link href="/" passHref>
              <a>
                <Typography
                  component="h1"
                  variant="h3"
                  className={classes.title}
                >
                  SuperShop
                </Typography>
              </a>
            </Link>
            <div className={classes.iconsPart}>
              <Link href="/wishlist">
                <IconButton>
                  <FavoriteIcon className={classes.icon} />
                </IconButton>
              </Link>
              <IconButton onClick={toggleDrawer(!context.open_interstitial)}>
                <ShoppingBasketIcon className={classes.icon} />
              </IconButton>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
};

export default withStyles(useStyles)(Header);
