import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import { FormLabel } from '@mui/material';

const marks = [
  {
    value: 1,
    label: 'Low',
  },
  {
    value: 2,
    label: 'Mid',
  },
  {
    value: 3,
    label: 'High',
  },
];

export default function StepFive({ formData, setFormData }) {
  const [val, setVal] = React.useState(1);

  const handleChange = (_, newValue) => {
    setVal(newValue);
    setFormData((prevFormData) => ({
      ...prevFormData,
      riskComfortLevel: marks.find(mark => mark.value === newValue)?.label,
    }));
  };

  return (
    <form>
      <Box sx={{ width: 400, textAlign: 'center', margin: 'auto' }}>
        <FormLabel sx={{ color: 'black', fontSize: '40px' }}>
          Select your preferred risk level 
        </FormLabel>
        <Slider
          step={1}
          value={val}
          min={1}
          max={3}
          onChange={handleChange}
          valueLabelDisplay="off"
          color='primary'
          sx={{
            color: '#87DBA8',
            '& .MuiSlider-thumb': {
              backgroundColor: '#87DBA8',
            },
            '& .MuiSlider-track': {
              backgroundColor: '#87DBA8',
            },
            '& .MuiSlider-rail': {
              backgroundColor: '#87DBA8',
            },
            '& .MuiSlider-mark': {
              backgroundColor: '#87DBA8',
            },
            '& .MuiSlider-markLabel': {
              color: '#87DBA8',
            },
          }}
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <Typography
            variant="body2"
            onClick={() => handleChange(null, 1)}
            sx={{ cursor: 'pointer', color: 'black' }}
          >
            Low
          </Typography>
          <Typography
            variant="body2"
            onClick={() => handleChange(null, 2)}
            sx={{ cursor: 'pointer', color: 'black' }}
          >
            Mid
          </Typography>
          <Typography
            variant="body2"
            onClick={() => handleChange(null, 3)}
            sx={{ cursor: 'pointer', color: 'black' }}
          >
            High
          </Typography>
        </Box>
      </Box>
    </form>
  );
}
