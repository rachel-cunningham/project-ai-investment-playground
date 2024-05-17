import React from "react";
import { Link } from "react-router-dom";
import { Typography, Button, Container, Box, CardMedia, CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Logo from "../artwork/landing/wealthify-logo.png";

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: "linear-gradient(to bottom, #3B0B47, #6E3979)",
          minHeight: "100vh",
          margin: 0,
          padding: 0,
        },
      },
    },
  },
});

function HomePage() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container sx={{ textAlign: "center", marginTop: 25, px: 7 }}>
        <CardMedia
          component="img"
          alt="stacks of coins"
          height="100%"
          image={Logo}
        />
        <Typography variant="h3" color='white' gutterBottom>
          WealthifyAI
        </Typography>
        <Typography variant="body1" color='white' paragraph>
          "Investment advice that works just for you."
        </Typography>
        <Box sx={{ marginY: 4, display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Button
            component={Link}
            to="/sign-up"
            variant="contained"
            color="primary"
            size="large"
            sx={{ 
              marginX: 1, 
              mb: 3, 
              borderRadius: '15px', 
              boxShadow: '0 10px 0 #639577', 
              width: 'auto', 
              paddingX: 3,
              color: "#3B0347",
              bgcolor: "#87DBA8"
            }}
          >
            Get Started
          </Button>
          <Button
            component={Link}
            to="/log-in"
            variant="contained"
            color="primary"
            size="large"
            sx={{ 
              marginX: 1, 
              mb: 3, 
              borderRadius: '15px', 
              boxShadow: '0 10px 0 #639577', 
              width: 'auto', 
              paddingX: 3,
              color: "#3B0347",
              bgcolor: "#87DBA8"
            }}
          >
            Log In
          </Button>
          <Typography>
            <Link
              to="/about"
              style={{ textDecoration: 'none', color: "#87DBA8" }}
            >
              How does it work?
            </Link>    
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default HomePage;
