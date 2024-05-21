import React, { useState } from 'react';
import { Box, Typography, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { createGoal } from '../../utils/api';

const Confirm = ({ formData, userId, setIsSubmitted }) => {
  const [open, setOpen] = useState(false);
  const bodyStyle = {
    fontSize: '20px'
  };

  async function handleSubmit(event) {
    //on submit, prevent page from reloading
    event.preventDefault();

    const abortController = new AbortController();

    try {
        //make call to API with POST method to create a new goal with the form data
        await createGoal(formData, userId, abortController.signal);
        console.log("Goal created!");
    } catch (error) {
        console.log(error);
        //setError(error);
    }

    return () => abortController.abort;
}
  

  const handleClose = () => {
    setOpen(false);
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
          fontSize: "50px",
          background: 'linear-gradient(45deg, #6E3979, #3B0B47)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textAlign: 'center'
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
      <Box sx={{mt: 4}}>
        <Button
          onClick={handleSubmit}
          variant='contained'
          color='primary'
          sx={{
            fontFamily: "MontBlancBold",
            textTransform: 'none',
            borderRadius: '15px',
            boxShadow: '0 9px 0 #639577',
            width: 'auto',
            paddingX: 3,
            color: "#3B0347",
            bgcolor: "#87DBA8",
            '&:hover': {
              bgcolor: "#639577",
              boxShadow: "0px"
            }
          }}
        >
          Submit
        </Button>
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Form Submitted Successfully"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Your investment strategy has been successfully submitted.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Confirm;
