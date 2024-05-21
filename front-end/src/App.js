import React from "react";
import { BrowserRouter as Router } from "react-router-dom"; // Correct import for BrowserRouter
import Layout from "./layouts/Layout";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/theme";
import GlobalTheme from "./styles/GlobalTheme";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalTheme />
        <Layout />
      </ThemeProvider>
    </Router>
  );
}

export default App;
