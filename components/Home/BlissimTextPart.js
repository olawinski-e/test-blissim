import React from "react";
import { withStyles, Typography, Container } from "@material-ui/core";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";

const useStyles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      padding: 0,
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      padding: theme.spacing(3),
      paddingBottom: 0,
      "&:last-child": {
        paddingBottom: theme.spacing(3),
      },
    },
  },
  textPart: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("xs")]: {
      alignItems: "center",
    },
  },
  icon: {
    color: "orange",
    fontSize: "4rem",
    paddingRight: "2rem",
    boxSizing: "initial",
    stroke: "white",
    strokeWidth: "0.04rem",
    strokeLinejoin: "bevel",
    [theme.breakpoints.down("sm")]: {
      paddingRight: "0.8rem",
      paddingBottom: "0.8rem",
      fontSize: "3rem",
    },
    [theme.breakpoints.down("xs")]: {
      paddingRight: "0",
      paddingBottom: "0.8rem",
      fontSize: "2.5rem",
    },
  },
  title: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
      paddingBottom: "0.2rem",
    },
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
    },
  },
  desc: {
    fontSize: "1rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8rem",
    },
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
    },
  },
});

const BlissimTextPart = (props) => {
  const { classes, text } = props;

  return (
    <Container className={classes.root}>
      <FavoriteBorderOutlinedIcon className={classes.icon} />

      <div className={classes.textPart}>
        <Typography
          variant="h3"
          color="primary"
          gutterBottom
          className={classes.title}
        >
          <b>{text.title}</b>
        </Typography>
        <Typography color="primary" className={classes.desc}>
          {text.desc} {text.moreDesc}
        </Typography>
      </div>
    </Container>
  );
};

export default withStyles(useStyles)(BlissimTextPart);
