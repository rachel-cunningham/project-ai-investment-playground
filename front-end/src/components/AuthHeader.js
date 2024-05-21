// header for when the user is logged in

import React, { useState } from "react";
import {
  Box,
  AppBar,
  Typography,
  Toolbar,
  CardMedia,
  Container,
  Menu,
  IconButton,
  Tooltip,
  Avatar,
  MenuItem,
} from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo/WealthifyAI-logo.png";
import theme from "../styles/theme";

function AuthHeader({ userId }) {
  const [anchorElUser, setAnchorElUser] = useState(null);

  const menuItems = [
    { label: "Account", path: `/dashboard/${userId}/account` },
    { label: "Dashboard", path: `/dashboard/${userId}` },
    { label: "Logout", path: "/" }, // logout logic needing implemented. does it go to screen that says "you have successfully logged out"? or back to home page? how does user actually log out or know that they logged out?
  ];

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

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
        <Container maxWidth="xxl">
          <Toolbar disableGutters>
            <Typography
              component={Link}
              to={`/dashboard/${userId}`}
              sx={{
                flexGrow: "1",
              }}
            >
              <CardMedia
                component="img"
                alt="Investify AI logo"
                image={Logo}
                sx={{ width: "65px" }}
              />
            </Typography>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open Menu" variant="header2">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt="User Avatar"
                    sx={{ width: "48px", height: "48px" }}
                    // src=""  add a src dymanically based on user image upload from backend
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{
                  mt: "45px",
                  "& .MuiPaper-root": {
                    background: "#3B0B47",
                  },
                }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {menuItems.map((menu) => (
                  <MenuItem
                    key={menu.label}
                    onClick={handleCloseUserMenu}
                    sx={{
                      "&:hover": {
                        background: `linear-gradient(to top, ${theme.palette.custom.LightPurple}, ${theme.palette.custom.DarkPurple})`,
                      },
                    }}
                  >
                    <Typography
                      component={Link}
                      to={menu.path}
                      variant="header2"
                      textAlign="center"
                      sx={{
                        textDecoration: "none",
                        fontSize: "1.1rem",
                      }}
                    >
                      {menu.label}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

export default AuthHeader;
