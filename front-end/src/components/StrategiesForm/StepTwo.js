import { FormLabel, Box, TextField } from "@mui/material";
import * as React from "react";

export default function StepTwo({ formData, setFormData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleNumberChange = (e) => {
    const { name, value } = e.target;
    // Allow only numeric characters
    const numericValue = value.replace(/\D/g, '');
    // Update the form data with the integer value
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: numericValue ? parseInt(numericValue, 10) : '',
    }));
  };

  return (
    <form>
      <Box sx={{ display: 'flex', flexDirection: "column", textAlign: 'center', alignItems: 'center', justifyContent: 'center', gap: 3, height: '400px' }}>
        <FormLabel sx={{ color: 'black', fontSize: '40px' }}>
          Name your investment plan
        </FormLabel>
        <TextField
          sx={{
            width: '50%',
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'black',
              },
              '&:hover fieldset': {
                borderColor: 'black',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'black',
              },
              '& input': {
                color: 'black',
              },
            },
          }}
          name="goalName"
          value={formData.goalName}
          onChange={handleChange}
          variant="outlined"
          placeholder="EX: General Savings Plan"
          autoFocus
          required
        />
        <FormLabel sx={{ color: 'black', fontSize: '40px' }}>
          How much of an investment return are you aiming for?
        </FormLabel>
        <TextField
          sx={{
            width: '50%',
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'black',
              },
              '&:hover fieldset': {
                borderColor: 'black',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'black',
              },
              '& input': {
                color: 'black',
              },
            },
          }}
          name="return"
          value={formData.return}
          onChange={handleNumberChange}
          variant="outlined"
          placeholder="Enter Dollar Amount"
          required
        />
      </Box>
    </form>
  );
}
