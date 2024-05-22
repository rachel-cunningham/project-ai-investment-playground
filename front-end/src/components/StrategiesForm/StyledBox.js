
import React from 'react';
import Box from '@mui/material/Box';

const StyledBox = ({ children }) => {
  return (
    <Box sx={{
      width: '90%',
      bgcolor: 'white',
      color: 'black',
      display: 'flex',
      flexDirection
      borderRadius: '40px',
      textAlign: 'center',
      margin: 'auto'
    }}>
      {children}
    </Box>
  );
};

export default StyledBox;
