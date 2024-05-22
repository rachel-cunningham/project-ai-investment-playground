import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate, useParams } from "react-router-dom";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import StepFive from "./StepFive";
import Confirm from "./Confirm";
import AuthHeader from "../AuthHeader";

const theme = createTheme({
  components: {
    MuiStepLabel: {
      styleOverrides: {
        label: {
          "&.Mui-active": {
            color: "#87DBA8",
          },
          "&.Mui-completed": {
            color: "#87DBA8",
          },
        },
      },
    },
    MuiStepIcon: {
      styleOverrides: {
        root: {
          "&.Mui-active": {
            color: "#87DBA8",
          },
          "&.Mui-completed": {
            color: "#87DBA8",
          },
        },
      },
    },
  },
});

const style = {
  width: "90%",
  bgcolor: "white",
  color: "black",
  border: "12px solid #87DBA8",
  borderRadius: "40px",
};

const steps = [
  "Start",
  "Goal",
  "Initial Investment",
  "Investment Length",
  "Risk",
  "Confirm",
];

const StrategiesForm = () => {
  const { userId } = useParams();

  const initialFormData = {
    goal_name: "",
    expected_return_on_investment: "",
    years_to_invest_for: "",
    risk_comfort_level: "low",
    starting_amount_to_invest: "",
  };

  const [activeStep, setActiveStep] = React.useState(0);
  const [formData, setFormData] = React.useState(initialFormData);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const navigate = useNavigate();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setFormData(initialFormData);
    setIsSubmitted(false); // Reset submission status
  };

  const isStepValid = () => {
    switch (activeStep) {
      case 1:
        return (
          formData.goal_name.trim() !== "" &&
          formData.expected_return_on_investment !== "" &&
          formData.expected_return_on_investment > 0
        );
      case 2:
        return (
          formData.starting_amount_to_invest !== "" &&
          formData.starting_amount_to_invest > 0
        );
      case 3:
        return (
          formData.years_to_invest_for !== "" &&
          formData.years_to_invest_for > 0
        );
      default:
        return true;
    }
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <StepOne />;
      case 1:
        return <StepTwo formData={formData} setFormData={setFormData} />;
      case 2:
        return <StepThree formData={formData} setFormData={setFormData} />;
      case 3:
        return <StepFour formData={formData} setFormData={setFormData} />;
      case 4:
        return <StepFive formData={formData} setFormData={setFormData} />;
      case 5:
        return (
          <Confirm
            formData={formData}
            userId={userId}
            setIsSubmitted={setIsSubmitted}
          />
        );
      default:
        return "Unknown step";
    }
  };

  return (
    <>
      {" "}
      <AuthHeader userId={userId} />
      <ThemeProvider theme={theme}>
        <Box sx={style}>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography
                sx={{ mt: 2, mb: 1, textAlign: "center", fontSize: "40px" }}
              >
                Finished!
              </Typography>
              <Box
                sx={{ display: "flex", justifyContent: "center", pt: 2, mb: 7 }}
              >
                <Button
                  onClick={() => navigate(`/dashboard/${userId}`)}
                  variant="contained"
                  color="primary"
                  sx={{
                    fontFamily: "MontBlancBold",
                    textTransform: "none",
                    marginX: 5,
                    borderRadius: "15px",
                    boxShadow: "0 9px 0 #639577",
                    width: "auto",
                    paddingX: 3,
                    color: "#3B0347",
                    bgcolor: "#87DBA8",
                    "&:hover": {
                      bgcolor: "#639577",
                      boxShadow: "0px",
                    },
                  }}
                >
                  Back To Dashboard
                </Button>
                <Button
                  onClick={handleReset}
                  variant="contained"
                  color="primary"
                  sx={{
                    fontFamily: "MontBlancBold",
                    textTransform: "none",
                    marginX: 5,
                    borderRadius: "15px",
                    boxShadow: "0 9px 0 #639577",
                    width: "auto",
                    paddingX: 3,
                    color: "#3B0347",
                    bgcolor: "#87DBA8",
                    "&:hover": {
                      bgcolor: "#639577",
                      boxShadow: "0px",
                    },
                  }}
                >
                  Start New Investment
                </Button>
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Box sx={{ mt: 2, mb: 1 }}>{getStepContent(activeStep)}</Box>
              {activeStep === 0 ? (
                <Box sx={{ display: "flex", justifyContent: "center", pt: 2 }}>
                  <Button
                    onClick={handleNext}
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{
                      fontFamily: "MontBlancBold",
                      textTransform: "none",
                      marginX: 1,
                      borderRadius: "15px",
                      boxShadow: "0 9px 0 #639577",
                      width: "auto",
                      paddingX: 3,
                      color: "#3B0347",
                      bgcolor: "#87DBA8",
                      "&:hover": {
                        bgcolor: "#639577",
                        boxShadow: "0px",
                      },
                    }}
                  >
                    Continue
                  </Button>
                </Box>
              ) : (
                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <Button
                    color="primary"
                    variant="contained"
                    onClick={handleBack}
                    sx={{
                      mr: 1,
                      fontFamily: "MontBlancBold",
                      textTransform: "none",
                      marginX: 1,
                      borderRadius: "15px",
                      boxShadow: "0 9px 0 #639577",
                      width: "auto",
                      paddingX: 3,
                      color: "#3B0347",
                      bgcolor: "#87DBA8",
                      "&:hover": {
                        bgcolor: "#639577",
                        boxShadow: "0px",
                      },
                    }}
                  >
                    Back
                  </Button>
                  <Box sx={{ flex: "1 1 auto" }} />
                  <Button
                    onClick={handleNext}
                    variant="contained"
                    color="primary"
                    disabled={
                      !isStepValid() ||
                      (activeStep === steps.length - 1 && !isSubmitted)
                    }
                    sx={{
                      fontFamily: "MontBlancBold",
                      textTransform: "none",
                      marginX: 1,
                      borderRadius: "15px",
                      boxShadow: "0 9px 0 #639577",
                      width: "auto",
                      paddingX: 3,
                      color: "#3B0347",
                      bgcolor: "#87DBA8",
                      "&:hover": {
                        bgcolor: "#639577",
                        boxShadow: "0px",
                      },
                    }}
                  >
                    {activeStep === steps.length - 1 ? "Finished" : "Next"}
                  </Button>
                </Box>
              )}
            </React.Fragment>
          )}
          <Stepper activeStep={activeStep} sx={{ mt: 3, px: 3, pb: 3 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default StrategiesForm;
