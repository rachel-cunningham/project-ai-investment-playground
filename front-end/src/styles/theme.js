import { createTheme } from "@mui/material/styles";

const typography = {
  fontFamily: "Afacad, Roboto, sans-serif",
  h1: {
    fontFamily: "Mont-Blanc-Trial, Roboto, sans-serif",
    fontWeight: 700, // bold
    color: "#FFFFFF", // white text color for h1
  },
  h2: {
    fontFamily: "Mont-Blanc-Trial, Roboto, sans-serif",
    fontWeight: 500, // medium
    color: "#FFFFFF", // white text color for h2
  },
  h4: {
    fontFamily: "Afacad, Roboto, sans-serif",
    fontWeight: 500, // medium
    color: "#FFFFFF", // white text color for h4
  },
  h5: {
    fontFamily: "Afacad, Roboto, sans-serif",
    fontWeight: 500, // medium
    color: "#FFFFFF", // white text color for h5
  },
  h6: {
    fontFamily: "Afacad, Roboto, sans-serif",
    fontWeight: 500, // medium
    color: "#FFFFFF", // white text color for h6
  },
  body1: {
    fontFamily: "Afacad, Roboto, sans-serif",
    fontWeight: 400, // regular
    color: "#FFFFFF", // white text color for body text
  },
  body2: {
    fontFamily: "Afacad, Roboto, sans-serif",
    fontWeight: 500, // medium
    color: "#FFFFFF", // white text color for secondary body text
  },
};

const theme = createTheme({
  palette: {
    primary: {
      main: "#87DBA8", // LightGreen
    },
    secondary: {
      main: "#639577", // OliveGreen
    },
    custom: {
      LightPurple: "#3B0B47",
      DarkPurple: "#6E3979",
    },
    text: {
      primary: "#FFFFFF", // white text color
      secondary: "#000000", // black text color for use in cards
    },
  },
  typography,
});

export default theme;
