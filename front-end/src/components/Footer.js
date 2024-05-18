import React from "react";
import { Box, Typography, Grid } from "@mui/material";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box component="footer" sx={{ textAlign: "center" }}>
      <Grid container justifyContent="center">
        <Grid item xs={6} sm={2} md={1}>
          <Typography variant="body2" gutterBottom>
            Privacy Policy
          </Typography>
        </Grid>
        <Grid item xs={6} sm={2} md={1}>
          <Typography variant="body2" gutterBottom>
            Terms of Use
          </Typography>
        </Grid>
        <Grid item xs={6} sm={2} md={1}>
          <Typography variant="body2" gutterBottom>
            Legal
          </Typography>
        </Grid>
        <Grid item xs={6} sm={2} md={1}>
          <Typography variant="body2" gutterBottom>
            Site Map
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Typography variant="body2" gutterBottom>
            &copy; {currentYear} All Rights Reserved
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
