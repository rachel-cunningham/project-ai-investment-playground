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
      <Box 
        sx={{ 
          width: 500, 
          textAlign: 'center', 
          margin: 'auto', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          height: '400px' 
        }}
      >
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
          marks={marks}
          color='primary'
          sx={{
            height: 10,
            '& .MuiSlider-thumb': {
              width: 24,
              height: 24,
              backgroundColor: '#87DBA8',
              '&:hover, &.Mui-focusVisible, &.Mui-active': {
                boxShadow: 'inherit',
              },
            },
            '& .MuiSlider-track': {
              height: 10,
              backgroundColor: '#87DBA8',
            },
            '& .MuiSlider-rail': {
              height: 10,
              backgroundColor: '#87DBA8',
            },
            '& .MuiSlider-mark': {
              backgroundColor: '#3B0B47',
              height: 10,
              width: 10,
              borderRadius: '50%',
            },
            '& .MuiSlider-markLabel': {
              fontSize: '0px',
            },
          }}
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <Typography
            variant="body2"
            onClick={() => handleChange(null, 1)}
            sx={{ cursor: 'pointer', color: 'black', fontSize: '25px' }}
          >
            Low
          </Typography>
          <Typography
            variant="body2"
            onClick={() => handleChange(null, 2)}
            sx={{ cursor: 'pointer', color: 'black', fontSize: '25px' }}
          >
            Mid
          </Typography>
          <Typography
            variant="body2"
            onClick={() => handleChange(null, 3)}
            sx={{ cursor: 'pointer', color: 'black', fontSize: '25px' }}
          >
            High
          </Typography>
        </Box>
      </Box>
    </form>
  );
}
