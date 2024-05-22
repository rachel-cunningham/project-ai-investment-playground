import { Box, Typography } from "@mui/material";
import * as React from "react";

const style = {
  color: "black",
  textAlign: "center",
  px: '10%',
  height: '400px',
  display: 'flex', 
  flexDirection: 'column',
  justifyContent: 'center', 
  alignItems: 'center'
};



export default function StepOne() {
  return (
    <Box sx={style}>
      <Typography 
        variant="h1" 
        sx={{ 
          fontFamily: "MontBlancBold", 
          fontSize: "90px",
          background: 'linear-gradient(45deg, #6E3979, #3B0B47)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}
      >
        Hello!
      </Typography>
      <Typography variant="body1" sx={{ fontSize: "40px", mt: 2 }}>
        Before we begin, I'll ask you a couple of questions to help develop your unique investment plot.
      </Typography>
    </Box>
  );
}
