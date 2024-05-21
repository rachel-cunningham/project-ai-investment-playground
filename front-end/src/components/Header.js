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
import { HashLink as RouterHashLink } from 'react-router-hash-link';
import { useTheme } from '@mui/material/styles';
import Logo from "../assets/images/logo/WealthifyAI-logo.png"

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
      <AppBar component="nav" sx={{ backgroundColor: theme.palette.custom.DarkPurple }}>
        <Toolbar>
          <Typography
            component={RouterLink}
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
              component={RouterHashLink}
              to="/#about-us"
              smooth
              offset={-70}
              variant="header2"
              sx={{
                cursor: "pointer",
                textDecoration: "none",
                fontSize: "1.5rem",
                marginRight: 5,
                color: '#87DBA8',
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
              component={RouterLink}
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
