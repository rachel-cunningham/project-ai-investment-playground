import React from 'react';
import { Box, Typography } from '@mui/material';

const ConfirmInvestmentStrategy = ({ formData }) => {
  const bodyStyle = {
    fontSize: '30px'
  };

  return (
    <Box
      display="flex"
      flexDirection='column'
      justifyContent="center"
      alignItems="center"
      height='400px'
    >
      <Typography variant="h1" 
        sx={{ 
          fontFamily: "MontBlancBold", 
          fontSize: "60px",
          background: 'linear-gradient(45deg, #6E3979, #3B0B47)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}
      >
        Confirm Investment Strategy
      </Typography>
      <Box sx={{mt: 4}}>
        <Typography variant="body1" sx={bodyStyle}><strong>Goal Name:</strong> {formData.goalName}</Typography>
        <Typography variant="body1" sx={bodyStyle}><strong>Return on Investment:</strong> {formData.return}</Typography>
        <Typography variant="body1" sx={bodyStyle}><strong>Starting Investment:</strong> {formData.startingInvestment}</Typography>
        <Typography variant="body1" sx={bodyStyle}><strong>Years to Invest:</strong> {formData.yearsToInvest}</Typography>
        <Typography variant="body1" sx={bodyStyle}><strong>Risk Comfort Level:</strong> {formData.riskComfortLevel}</Typography>
      </Box>
    </Box>
  );
};

export default ConfirmInvestmentStrategy;
