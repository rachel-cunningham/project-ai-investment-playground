import React from "react";
import {
  Button,
  Box,
  AppBar,
  Typography,
  Toolbar,
  CardMedia,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { HashLink as RouterHashLink } from "react-router-hash-link";
import { useTheme } from "@mui/material/styles";
import Logo from "../assets/images/logo/WealthifyAI-logo.png";

function Header() {
  const theme = useTheme();
  return (
    <Box
      component="header"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: 2,
      }}
    >
      <AppBar
        component="nav"
        sx={{ backgroundColor: theme.palette.custom.DarkPurple }}
      >
        <Toolbar>
          <Typography
            component={RouterLink}
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
              component={RouterHashLink}
              to="/#about-us"
              smooth
              offset={-70}
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
              component={RouterLink}
              to="/log-in"
              variant="contained"
              color="primary"
              sx={{
                marginRight: 2,
                borderRadius: 3,
                fontFamily: "MavenPro",
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
              component={RouterLink}
              to="/sign-up"
              variant="contained"
              color="primary"
              sx={{
                borderRadius: 3,
                fontFamily: "MavenPro",
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
