import { Box, Typography } from "@mui/material";
import * as React from "react";

const style = {
    color: "black",
    textAlign: "center",
    px: '10%'
};

const gradientTextStyle = {
    background: 'linear-gradient(45deg, #6E3979, #3B0B47)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

export default function StepOne() {
    return (
            <Box sx={style}>
                <Typography 
                    variant="h1" 
                    color={gradientTextStyle}
                    sx={{fontFamily: "MontBlancBold", fontSize: "90px"}}
                >
                    Hello!
                </Typography>
                <Typography variant="body" sx={{fontSize: "40px"}}>
                    Before we begin, I'll ask you a couple of questions to help develop your unique investment plot.
                </Typography>
            </Box>
    );
}