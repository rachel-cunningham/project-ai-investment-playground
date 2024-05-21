import React from "react";
import {
  Button,
  Box,
  AppBar,
  Typography,
  Toolbar,
  CardMedia,
} from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo/WealthifyAI-logo.png";

function Header() {
  return (
    <Box
      component="header"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: 2,
      }}
    >
      <AppBar component="nav" sx={{ backgroundColor: "#3B0B47" }}>
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="header2"
            sx={{
              flexGrow: "1",
              textDecoration: "none",
            }}
          >
            <CardMedia
              component="img"
              alt="Investify AI logo"
              image={Logo}
              sx={{ width: { xs: "50px", sm: "60px", md: "65px", lg: "65px" } }}
            />
          </Typography>
          <Box>
            <Typography
              component={Link}
              to="/about"
              variant="header2"
              sx={{
                textDecoration: "none",
                fontSize: {
                  xs: "0.9rem",
                  sm: "1.5rem",
                  lg: "1.5rem",
                },
                "&:hover": {
                  color: "#87DBA8",
                },
                marginRight: 4,
              }}
            >
              About Us
            </Typography>
          </Box>
          <Box>
            <Button
              component={Link}
              to="/log-in"
              variant="contained"
              color="primary"
              sx={{
                marginRight: 2,
                borderRadius: 3,
                fontFamily: "MontBlancBold",
                fontSize: {
                  xs: "0.8rem",
                  sm: "1rem",
                  lg: "1rem",
                },
                textTransform: "none",
                color: "#3B0347",
                bgcolor: "#87DBA8",
                "&:hover": {
                  bgcolor: "#639577",
                },
              }}
            >
              Log In
            </Button>
            <Button
              component={Link}
              to="/sign-up"
              variant="contained"
              color="primary"
              sx={{
                borderRadius: 3,
                fontFamily: "MontBlancBold",
                fontSize: {
                  xs: "0.8rem",
                  sm: "1rem",
                  lg: "1rem",
                },

                textTransform: "none",
                color: "#3B0347",
                bgcolor: "#87DBA8",
                "&:hover": {
                  bgcolor: "#639577",
                },
              }}
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
