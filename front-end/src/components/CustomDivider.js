import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/system";

const CustomDividerContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  width: "140%",
  [theme.breakpoints.down("md")]: {
    width: "105%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "90%",
  },
}));

const Line = styled(Box)(({ theme }) => ({
  height: "2px",
  backgroundColor: `${theme.palette.custom.LightPurple}`,
  flexGrow: 1,
}));

const SquaresContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(5), // gap of squares
  margin: "3px 50px", // gap of squares to lines
}));

const Square = styled(Box)(({ theme }) => ({
  width: "20px", // square size
  height: "20px",
  backgroundColor: "transparent",
  border: `2px solid ${theme.palette.custom.LightPurple}`,
}));

const CustomDivider = () => {
  return (
    <CustomDividerContainer>
      <Line />
      <SquaresContainer>
        <Square />
        <Square />
        <Square />
      </SquaresContainer>
      <Line />
    </CustomDividerContainer>
  );
};

export default CustomDivider;
