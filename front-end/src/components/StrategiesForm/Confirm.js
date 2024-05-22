import React, { useState } from 'react';
import { Box, Typography, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Stack, CircularProgress } from '@mui/material';
import { createGoal } from '../../utils/api';

const Confirm = ({ formData, userId, setIsSubmitted }) => {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false); // New state for disabling the button
  const bodyStyle = {
    fontSize: '20px'
  };

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true); // Disable submit button and show progress indicator
    setOpen(true); // Open dialog immediately to show progress
    const abortController = new AbortController();
    try {
      await createGoal(formData, userId, abortController.signal);
      console.log("Goal created!");
      setIsSubmitted(true);
      setIsSubmitting(false);
      setIsDisabled(true); // Disable the submit button after successful submission
    } catch (error) {
      console.log(error);
      setIsSubmitting(false); // Re-enable submit button if there's an error
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
        <Typography variant="body1" sx={bodyStyle}><strong>Goal Name:</strong> {formData.goal_name}</Typography>
        <Typography variant="body1" sx={bodyStyle}><strong>Return on Investment:</strong> {formData.expected_return_on_investment}</Typography>
        <Typography variant="body1" sx={bodyStyle}><strong>Starting Investment:</strong> {formData.starting_amount_to_invest}</Typography>
        <Typography variant="body1" sx={bodyStyle}><strong>Years to Invest:</strong> {formData.years_to_invest_for}</Typography>
        <Typography variant="body1" sx={bodyStyle}><strong>Risk Comfort Level:</strong> {formData.risk_comfort_level}</Typography>
      </Box>
      <Box sx={{mt: 4}}>
        <Button
          onClick={handleSubmit}
          variant='contained'
          color='primary'
          disabled={isSubmitting || isDisabled} // Disable button based on isSubmitting or isDisabled state
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
        PaperProps={{
          sx: {
            border: '8px solid #87DBA8',
            borderRadius: '25px'
          }
        }}
      >
        {isSubmitting ? (
          <Stack sx={{ color: 'grey.500', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 6 }}>
            <CircularProgress color="secondary" />
          </Stack>
        ) : (
          <>
            <DialogTitle 
              id="alert-dialog-title"
              sx={{
                display: 'flex', 
                textAlign: 'center', 
                justifyContent: 'center', 
                alignItems: 'center',
                padding: 6,
              }}
            >
              {"Investment Strategy Successfully Submitted"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Your investment strategy has been successfully submitted.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button 
              onClick={handleClose} 
              color="primary" 
              autoFocus
              sx={{
                fontFamily: "MontBlancBold",
                textTransform: 'none',
                borderRadius: '15px',
                boxShadow: '0 9px 0 #639577',
                width: 'auto',
                paddingX: 3,
                mb: 2,
                mr: 2,
                color: "#3B0347",
                bgcolor: "#87DBA8",
                '&:hover': {
                  bgcolor: "#639577",
                  boxShadow: "0px"
                }
              }}
              >
                Close
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default Confirm;
