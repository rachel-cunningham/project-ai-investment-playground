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
import Logo from "../assets/images/logo/WealthifyAI-logo.png"

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
      <AppBar component="nav" color="transparent">
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="header2"
            sx={{
              flexGrow: "1",
              textDecoration: "none",
              fontSize: "1.5rem",
            }}
          >
            <CardMedia
              component="img"
              alt="Investify AI logo"
              image={Logo}
              sx={{ width: "65px" }}
            />
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
          </Box>
          <Box>
            <Button
              component={Link}
              to="/log-in"
              variant="contained"
              color="primary"
              sx={{
                marginRight: 2,
                borderRadius: 2,
                fontFamily: "MontBlancBold",
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
                borderRadius: 2,
                fontFamily: "MontBlancBold",
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
