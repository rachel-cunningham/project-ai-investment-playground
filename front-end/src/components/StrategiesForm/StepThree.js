import { FormLabel, TextField, Box } from "@mui/material";
import * as React from "react";

export default function StepThree({ formData, setFormData }) {
  const handleChange = (e) => {
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
          How much do you want to invest?
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
          name="starting_amount_to_invest"
          value={formData.starting_amount_to_invest}
          onChange={handleChange}
          variant="outlined"
          placeholder="Enter Dollar Amount"
          autoFocus
        />
      </Box>
    </form>
  );
}
