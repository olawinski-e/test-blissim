import React from "react";
import DefaultLayout from "../components/DefaultLayout";
import {
  withStyles,
  Button,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import BlissimPart from "../components/Home/BlissimPart";
import Link from "next/link";

const useStyles = (theme) => ({
  container: { paddingTop: theme.spacing(5), maxWidth: "90vw" },
  shopButtonPlace: {
    display: "flex",
    justifyContent: "center",
    margin: 0,
    paddingBottom: theme.spacing(3),
    marginTop: theme.spacing(3),
    fontSize: "1rem",
  },
});

const Home = (props) => {
  const { classes } = props;
  return (
    <DefaultLayout>
      <Container maxWidth="sm" className={classes.container}>
        <Typography
          component="h1"
          variant="h1"
          align="center"
          color="textPrimary"
        >
          SuperShop
        </Typography>

        <BlissimPart />

        <div className={classes.shopButtonPlace}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Link href="/shop" passhref>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  component="a"
                  style={{ fontSize: "1rem" }}
                >
                  La Boutique
                </Button>
              </Link>
            </Grid>
          </Grid>
        </div>
      </Container>
    </DefaultLayout>
  );
};
export default withStyles(useStyles)(Home);
