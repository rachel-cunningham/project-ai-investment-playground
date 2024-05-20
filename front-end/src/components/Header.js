import React from "react";
import { Button, Box, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";

function Header() {
  // useMediaQuery hook to check if the screen width is at least 600px
  const isLargeScreen = useMediaQuery('(min-width:600px)');

  // Render the component only if the screen width is at least 600px
  if (!isLargeScreen) {
    return null;
  }

  return (
    <Box component="header" sx={{ display: "flex", justifyContent: "space-between", padding: 2, backgroundColor: "#f5f5f5" }}>
      <Button  
        component={Link} 
        to="/" 
        variant="outlined"
        sx={{ textDecoration: 'none', color: 'inherit' }}>
        WealthifyAI
      </Button>
      <Box>
        <Button 
          component={Link} 
          to="/log-in" 
          variant="contained" 
          color="primary" 
          sx={{ marginRight: 2 }}>
          Log In
        </Button>
        <Button 
          component={Link} 
          to="/sign-up" 
          variant="contained" 
          color="primary" 
          sx={{ marginRight: 2 }}>
          Sign Up
        </Button>
      </Box>
    </Box>
  );
}

export default Header;
