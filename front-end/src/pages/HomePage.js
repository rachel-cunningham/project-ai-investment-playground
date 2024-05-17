import React from "react";
import { Link } from "react-router-dom";
import { Typography, Button, Container, Box, CardMedia } from "@mui/material";
import Logo from "../artwork/landing/wealthify-logo.png";

function HomePage() {
  return (
    <Container sx={{ textAlign: "center", marginTop: 25, px: 7 }}>
      <CardMedia
        component="img"
        alt="stacks of coins"
        height="100%"
        image={Logo}
      />
      <Typography variant="h3" gutterBottom>
        WealthifyAI
      </Typography>
      <Typography variant="body1" paragraph>
        "Investment advice that works just for you."
      </Typography>
      <Box sx={{ marginY: 4, display: "flex", flexDirection: "column", alignItems: "center" }}>
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
            boxShadow: '0 10px 0 rgba(0, 0, 0, 0.2)', 
            width: 'auto', 
            paddingX: 3
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
            boxShadow: '0 10px 0 rgba(0, 0, 0, 0.2)', 
            width: 'auto', 
            paddingX: 3
          }}
        >
          Log In
        </Button>
        <Typography>
          <Link
            to="/about"
            style={{ textDecoration: 'none' }}
            sx={{
              '&:hover': {
                textDecoration: 'underline',
              },
            }}
          >
            How does it work?
          </Link>    
        </Typography>
      </Box>
    </Container>
  );
}

export default HomePage;
