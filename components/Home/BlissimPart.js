import React from "react";
import {
  withStyles,
  Typography,
  Grid,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import BlissimTextPart from "./BlissimTextPart";

const useStyles = (theme) => ({
  blissimContainer: {
    display: "flex",
    flexDirection: "column",
  },
  blissimTitle: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(3),
    fontWeight: "bold",
  },
  brand: {
    fontFamily: "Libre_Baskerville",
    fontSize: "1.6rem",
    letterSpacing: "0.12rem",
  },
  card: {
    border: "0.07rem solid #e0e0e08f",
    display: "flex",
    flexDirection: "row",
    padding: 0,
    backgroundColor: "white",
    borderRadius: "0.9rem",
    "&:last-child": {
      paddingBottom: 0,
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  image: {
    borderTopLeftRadius: "0.8rem",
    borderBottomLeftRadius: "0.8rem",
    width: "46%",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      height: "10rem",
      borderTopRightRadius: "0.8rem",
      borderBottomLeftRadius: "0",
    },
  },
  blissimTexts: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: theme.spacing(2),
    width: "54%",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      padding: 0,
    },
  },
  pre: { margin: 0, fontFamily: "arial", display: "flex", flexWrap: "wrap" },
});

const BlissimPart = (props) => {
  const { classes } = props;

  const boldedText = ({ text, shouldBeBold }) => {
    const textArray = text.split(shouldBeBold);
    return (
      <>
        {textArray.map((item, index) => (
          <span key={index}>
            {item}
            {index !== textArray.length - 1 && <b>{shouldBeBold}</b>}
          </span>
        ))}
      </>
    );
  };

  const blissimTexts = [
    {
      title: "La meilleure box beauté ",
      desc: boldedText({
        text: "Déjà 200 000 abonnés",
        shouldBeBold: "200 000 abonnés",
      }),
      moreDesc: boldedText({
        text: "sont conquis par la box beauté n°1 en France.",
        shouldBeBold: "box beauté n°1 en France.",
      }),
    },
    {
      title: "La flexibilité",
      desc: boldedText({
        text: "Profitez d'une formule d'abonnement sans engagement et modifiable en un clic.",
        shouldBeBold: "sans engagement",
      }),
    },
    {
      title: "Le bon plan beauté",
      desc: boldedText({
        text: "Recevez une sélection de produits pour 13,90€ par mois, livraison incluse et bénéficiez de -15% sur notre eshop.",
        shouldBeBold: "-15% sur notre eshop.",
      }),
    },
    {
      title: "La crème de la crème",
      desc: boldedText({
        text: "Les produits des plus grandes marques se glissent dans votre box beauté personnalisée selon votre profil.",
        shouldBeBold: "plus grandes marques",
      }),
    },
  ];

  return (
    <>
      <Grid container className={classes.blissimContainer}>
        <Typography
          component="h1"
          variant="h3"
          align="left"
          color="textPrimary"
          className={classes.blissimTitle}
        >
          Pourquoi <span className={classes.brand}>Blissim</span> ?
        </Typography>

        <CardContent className={classes.card}>
          <CardMedia
            component="img"
            alt="image of a blissim beauty box"
            image="/static/images/homepage-box-image.jpg"
            className={classes.image}
            title="image of a blissim beauty box"
          />

          <div className={classes.blissimTexts}>
            {blissimTexts.map((text, index) => (
              <BlissimTextPart text={text} key={index} />
            ))}
          </div>
        </CardContent>
      </Grid>
    </>
  );
};

export default withStyles(useStyles)(BlissimPart);
