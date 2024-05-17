import React from "react";
import Layout from "./layouts/Layout";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/theme";
import GlobalTheme from "./styles/GlobalTheme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalTheme />
      <Layout />
    </ThemeProvider>
  );
}

export default App;
