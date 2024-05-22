import { GlobalStyles } from "@mui/material";
import theme from "./theme";
import MavenProFont from "../assets/fonts/MavenPro-VariableFont_wght.ttf";

const GlobalTheme = () => (
  <GlobalStyles
    styles={{
      "@font-face": {
        fontFamily: "MavenPro",
        fontStyle: "normal",
        fontWeight: "bold",
        src: `
          local('MavenPro'),
          url(${MavenProFont}) format('truetype') // Use MavenPro font file
        `,
      },
      "*": {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
      },
      body: {
        fontFamily: "Roboto, sans-serif",
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
        background: `linear-gradient(to top, ${theme.palette.custom.LightPurple}, ${theme.palette.custom.DarkPurple})`,
      },
      ".Layout": {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      },
      // can add more styles as needed
    }}
  />
);

export default GlobalTheme;
