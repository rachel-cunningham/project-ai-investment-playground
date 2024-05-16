import React from "react";
import { Box, Typography } from "@mui/material";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box component="footer" sx={{ padding: 2, backgroundColor: "#f5f5f5", textAlign: "right", marginTop: 4 }}>
      <Typography variant="body2" color="textSecondary">
        &copy; {currentYear} WealthifyAI. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
