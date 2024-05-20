import { FormLabel, TextField, Box } from "@mui/material";
import * as React from "react";

export default function StepThree({ formData, setFormData }) {
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
          name="startingInvestment"
          value={formData.startingInvestment}
          onChange={handleChange}
          variant="outlined"
          placeholder="Enter Dollar Amount"
          autoFocus
        />
            </Box>
        </form>
    );
}