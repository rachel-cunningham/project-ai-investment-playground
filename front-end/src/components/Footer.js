import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import theme from "../styles/theme";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        textAlign: "center",
        background: `linear-gradient(to top, ${theme.palette.custom.LightPurple}, ${theme.palette.custom.DarkPurple})`,
      }}
    >
      <Grid container justifyContent="center">
        <Grid item xs={6} sm={2} md={1} sx={{ mt: 2 }}>
          <Typography variant="body2" gutterBottom>
            Privacy Policy
          </Typography>
        </Grid>
        <Grid item xs={6} sm={2} md={1} sx={{ mt: 2 }}>
          <Typography variant="body2" gutterBottom>
            Terms of Use
          </Typography>
        </Grid>
        <Grid item xs={6} sm={2} md={1} sx={{ mt: 2 }}>
          <Typography variant="body2" gutterBottom>
            Legal
          </Typography>
        </Grid>
        <Grid item xs={6} sm={2} md={1} sx={{ mt: 2 }}>
          <Typography variant="body2" gutterBottom>
            Site Map
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} sx={{ mt: 1, mb: 2 }}>
          <Typography variant="body2" gutterBottom>
            &copy; {currentYear} All Rights Reserved
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
