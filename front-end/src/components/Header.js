import React from "react";
import { Button, Box, AppBar, Typography, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

function Header() {
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
            variant="header2"
            sx={{
              flexGrow: "1",
              textDecoration: "none",
              display: { xs: "none", sm: "block" },
              fontSize: "1.5rem",
            }}
          >
            Wealthify AI
          </Typography>
          <Box>
            <Typography
              component={Link}
              to="/about"
              variant="header2"
              sx={{
                textDecoration: "none",
                fontSize: "1.5rem",
                marginRight: 5,
              }}
            >
              About Us
            </Typography>
            {/* <Typography
              component={Link}
              to="/how-it-works"
              variant="header2"
              sx={{
                textDecoration: "none",
                fontSize: "1.5rem",
                marginRight: 8,
              }}
            >
              How it Works
            </Typography> */}
            {/* <Typography
              component={Link}
              to="/dashboard"
              variant="h6"
              sx={{ textDecoration: "none", marginRight: 1 }}
            >
              Dashboard
            </Typography> */}
          </Box>
          <Box>
            <Button
              component={Link}
              to="/log-in"
              variant="contained"
              color="primary"
              sx={{ marginRight: 2 }}
            >
              Log In
            </Button>
            <Button
              component={Link}
              to="/sign-up"
              variant="contained"
              color="primary"
            >
              Sign Up
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
