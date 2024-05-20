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

  return (
    <form>
      <Box sx={{ display: 'flex', flexDirection: "column", textAlign: 'center', alignItems: 'center', gap: 3 }}>
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
          name="goalStatement"
          value={formData.goalStatement}
          onChange={handleChange}
          variant="outlined"
          placeholder="Enter Dollar Amount"
        />
      </Box>
    </form>
  );
}
