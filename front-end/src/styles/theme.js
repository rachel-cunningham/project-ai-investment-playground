import { createTheme } from "@mui/material/styles";

const typography = {
  fontFamily: "Afacad, Roboto, sans-serif",
  h1: {
    fontFamily: "MavenPro, Roboto, sans-serif",
    fontWeight: 700, // bold
    color: "#FFFFFF", // white text color for h1
  },
  h2: {
    fontFamily: "MavenPro, Roboto, sans-serif",
    fontWeight: 500, // medium
    color: "#FFFFFF", // white text color for h2
  },
  h4: {
    fontFamily: "MavenPro, Roboto, sans-serif",
    fontWeight: 500, // medium
    color: "#000000", // black text color for h4
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
    fontWeight: 500, // semi-bold
    color: "#FFFFFF", // white text color for body text
  },
  body2: {
    fontFamily: "Afacad, Roboto, sans-serif",
    fontWeight: 100, // light
    color: "#FFFFFF", // white text color for secondary body text
  },
  header1: {
    fontFamily: "MavenPro, Roboto, sans-serif",
    fontWeight: 400, // light
    color: "#FFFFFF", // white text color for secondary body text
  },
  header2: {
    fontFamily: "MavenPro, Roboto, sans-serif",
    fontWeight: 600, // light
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
      LightPurple: "#6E3979",
      DarkPurple: "#3B0B47",
    },
    text: {
      primary: "#FFFFFF", // white text color
      secondary: "#000000", // black text color for use in cards
    },
  },
  typography,
});

export default theme;
