import { GlobalStyles } from "@mui/material";
import MontBlancBold from "../assets/fonts/MontBlanc-Trial-Bold.ttf";
import Afacad from "../assets/fonts/Afacad-Regular.ttf";
import theme from "./theme";

const GlobalTheme = () => (
  <GlobalStyles
    styles={{
      "@font-face": {
        fontFamily: "MontBlancBold",
        fontStyle: "normal",
        fontWeight: "bold",
        src: `
          local('MontBlancBold'),
          url(${MontBlancBold}) format('truetype')
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
        background: `linear-gradient(to top, ${theme.palette.custom.DarkPurple}, ${theme.palette.custom.LightPurple})`,
      },
      ".Layout": {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      },
      // to further add custom styles for elements in Layout.js
      ".Header": {
        // styles for the header component
      },
      ".Footer": {
        //  styles for the footer component
      },
      // can add more styles as needed
    }}
  />
);

export default GlobalTheme;
