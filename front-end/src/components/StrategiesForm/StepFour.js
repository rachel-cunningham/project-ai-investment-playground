import { FormLabel, TextField, Box } from "@mui/material";
import * as React from "react";

export default function StepFour({ formData, setFormData }) {
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
                    How many years are you hoping to reach your goal?
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
          name="yearsToInvest"
          value={formData.yearsToInvest}
          onChange={handleChange}
          variant="outlined"
          placeholder="Enter Number of Years"
          autoFocus
        />
            </Box>
        </form>
    );
}