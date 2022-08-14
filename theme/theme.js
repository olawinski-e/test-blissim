import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#283149",
    },
    secondary: {
      main: "#404b69",
    },
    accent: "#00818a",
    light: "#dbedf3",
  },
  spacing: 8,
  typography: {
    fontFamily: "'Poppins', sans-serif",
    htmlFontSize: 10,
    h1: {
      fontSize: 46,
    },
    h2: {
      fontSize: 28,
    },
    h3: {
      fontSize: 22,
    },
    h4: {
      fontSize: 18,
    },
    h5: {
      fontSize: 16,
    },
    h6: {
      fontSize: 14,
    },
    body: {
      fontSize: 12,
    },
    body1: {
      fontSize: 14,
    },
    body2: {
      fontSize: 12,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

// Colors
// #283149
// #404b69
// #00818a
// #dbedf3

export default theme;
