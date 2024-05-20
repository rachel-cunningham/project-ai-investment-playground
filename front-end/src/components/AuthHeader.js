// header for when the user is logged in

import React from "react";
import { Button, Box, AppBar, Typography, Toolbar, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo/WealthifyAI.png";

function AuthHeader() {
  // possible future implementation of only showing the user specific sections of the navigation if they're logged in vs when they are not

  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const navItems = ["About"];

  // if (isLoggedIn) {
  //   navItems.push("View Plans", "Dashboard", "Account");
  // }

  return (
    <Box
      component="header"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: 2,
      }}
    >
      <AppBar component="nav" color="transparent">
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="header1"
            sx={{
              flexGrow: "1",
              textDecoration: "none",
              display: { xs: "none", sm: "block" },
            }}
          >
            <CardMedia
          component="img"
          alt="logo"
          image={Logo}
          sx={{ width: '80px', height: 'auto' }}
        /> 
          </Typography>
          <Box>
            <Typography
              component={Link}
              to="/dashboard"
              variant="header2"
              sx={{ textDecoration: "none", fontSize: "1.5rem", marginRight: 30 }}
            >
              Dashboard
            </Typography>
            <Typography
              component={Link}
              to="/get-advice"
              variant="header2"
              sx={{ textDecoration: "none", fontSize: "1.5rem", marginRight: 30 }}
            >
              Get Advice
            </Typography>
            <Typography
              component={Link}
              to="/plans"
              variant="header2"
              sx={{ textDecoration: "none", fontSize: "1.5rem", marginRight: 30}}
            >
              View Plans
            </Typography>
            <Typography
              component={Link}
              to="/account"
              variant="header2"
              sx={{ textDecoration: "none", fontSize: "1.5rem", marginRight: 2 }}
            >
              Account
            </Typography>
          </Box>
          {/* <Box>
            <Button
              component={Link}
              to="/sign-up"
              variant="contained"
              color="primary"
            >
              Sign Out
            </Button>
          </Box> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default AuthHeader;
