import { createTheme, GlobalStyles } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2196f3", // to be changed
    },
    secondary: {
      main: "#f50057", // to be changed
    },
  },
  // to add other theme customizations as needed
});

// global styles and theme provider
const GlobalTheme = () => (
  <>
    <GlobalStyles
      styles={{
        "*": {
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
        },
        body: {
          fontFamily: "Roboto, sans-serif",
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
          backgroundColor: "#f0f0f0",
        },
        ".Layout": {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        },
        // to futher add custom styles for elements in Layout.js
        ".Header": {
          // styles for the header component
        },
        ".Footer": {
          //  styles for the footer component
        },
        // can add more styles as needed
      }}
    />
    {/* ThemeProvider to apply the theme to App.js */}
    <ThemeProvider theme={theme}>
      {/* there's no need to include application components here since it's being applied in app.js */}
    </ThemeProvider>
  </>
);

export { theme, GlobalTheme };
