import React, { useEffect, useState } from "react";
import { listGoals } from "../../utils/api";
import { Link, useParams } from "react-router-dom";
import { Box, Typography, Button, Grid } from "@mui/material";
import { PieChart } from '@mui/x-charts';
import AuthHeader from "../../components/AuthHeader";
import CustomDivider from "../../components/CustomDivider";
import EditIcon from "../../assets/images/icons/EditPlans_Icon.png";
import "./PlansPage.css";

const PlansPage = () => {
  const [plans, setPlans] = useState([]);
  const { userId } = useParams();
  const [plansError, setPlansError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const loadDashboard = () => {
      setPlansError(null);
      if (userId) {
        listGoals(userId, signal)
          .then((resp) => {
            if (resp && resp.data) {  
              setPlans(resp.data);
              setPlansError(null);
            } else {
              setPlans([]);
              setPlansError('No data available');
            }
          })
          .catch((err) => {
            setPlans([]);
            setPlansError(err.message);
          });
      }
    };

    loadDashboard();

    return () => abortController.abort();
  }, [userId]);

  const renderPieChart = (aiResponse) => {
    const data = [
      { id: 0, value: aiResponse.bondsPercentage, label: `Bonds` },
      { id: 1, value: aiResponse.shortTermPercentage, label: `Short Term` },
      { id: 2, value: aiResponse.foreignStockPercentage, label: `Foreign Stock` },
      { id: 3, value: aiResponse.domesticStockPercentage, label: `Domestic Stock` }
    ];

    return (
      <PieChart
        series={[{ data }]}
        width={400}
        height={200}
        slotProps={{
          legend: {
            direction: 'column',
            position: { vertical: { xs: 'middle', sm: 'bottom' }, horizontal: 'right' },
            padding: 0,
            labelStyle: {
              fontSize: { xs: 12, sm: 14, md: 16 },
              fill: 'black',
            }, 
          },
        }}
      />
    );
  };

  if (plansError) {
    return <div>Error: {plansError}</div>;
  }

  return (
    <Box sx={{ mt: { xs: 8, sm: 2, md: 10, lg: 0 } }}>
      <AuthHeader />
      <Box
        id="plans"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            pt: 3,
            pl: 3,
            pr: 3,
          }}
        >
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            color: "#87DBA8",
            fontSize: { xs: "3rem", sm: "4rem", md: "5rem", lg: "4.8rem" },
            mb: 2,
          }}
        >My Plans</Typography>  
        </Box>
        <CustomDivider />
        <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          pt: 3,
          pl: 3,
          pr: 3,
          maxWidth: { xs: "88%"},
          margin: "0 auto" 
        }}
      >
        <Typography 
                    sx={{
                      color: "white",
                      fontSize: {
                        xs: "0.8rem",
                        sm: "1rem",
                        md: "1.5rem",
                        lg: "1.2rem",
                      },
                      padding: { md: "10px 5px", lg: "10px 10px" },
                      textAlign: "center"
                    }}
                    
                  >Based on your responses to the questionnaire and current market trends, it is recommend diversifying your portfolio in the following way(s):</Typography>
        </Box>

        <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          px: 3,
        }}
        >
          <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            mt: 1,
            maxWidth: { xs: "88%"},
          }}
          >
          {plans && plans.length > 0 ? (  
          plans.map(plan => {
            let aiResponse;
            if (plan.ai_response) {  
              if (plan.risk_comfort_level === 'low') {
                aiResponse = plan.ai_response.lowRisk;
              } else if (plan.risk_comfort_level === 'medium') {
                aiResponse = plan.ai_response.mediumRisk;
              } else if (plan.risk_comfort_level === 'high') {
                aiResponse = plan.ai_response.highRisk;
              }
            }

            return aiResponse ? (  
              <Box key={plan.goal_id} sx={{
                bgcolor: "white",
                border: "8px solid #87DBA8",
                borderRadius: "25px",
                width: "100%",
                textAlign: "center",
                p: 2,
                mb: { xs: 5, lg: 1 },
                mt: 4,
              }}
              >
             <Grid
              container
              direction="row"
              spacing={2}
              justifyContent="space-evenly"
             >
              <Grid xs={12}>
              <Typography variant="h4">{plan.goal_name}</Typography>
              </Grid>
              <Grid
              xs={4}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              > 
                {/* <Box mt={2} textAlign="right">
                  <Button component={Link} to={`/plans/edit/${plan.goal_id}`}>
                    <img src={EditIcon} alt="Edit" />
                  </Button>
                </Box> */}
                <Box m={2}>
                  
                  {renderPieChart(aiResponse)}
                 
                </Box>
                </Grid>
                <Grid
                  xs={6}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                <Typography
                      sx={{
                        color: "#3B0347",
                        fontSize: {
                          xs: "0.8rem",
                          sm: "1rem",
                          md: "1.5rem",
                          lg: "1.2rem",
                        },
                        padding: { md: "10px 5px", lg: "10px 10px" },
                      }}
                    >
                      For a balanced investment, allocate {aiResponse.bondsPercentage}% to bonds, {aiResponse.shortTermPercentage}% to short-term investments, {aiResponse.foreignStockPercentage}% to foreign stocks, and {aiResponse.domesticStockPercentage}% to domestic stocks. 
                    </Typography>
                </Grid>
                </Grid>
              </Box>
            ) : null;  
          })
        ) : (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "80%",
              mt: 4,
            }}
          >
            <Box
              sx={{
                bgcolor: "white",
                border: "8px solid #87DBA8",
                borderRadius: "25px",
                width: "100%",
                textAlign: "center",
                p: 2,
                mb: { xs: 5, lg: 1 },
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: "#3B0347",
                  mb: 5,
                }}
              >
                You haven't started any plans.
                <br />
                <br />
                When you do, they'll be located here.
              </Typography>
              <Button
                component={Link}
                to={`/dashboard/${userId}/plans/new`}
                color="primary"
                size="small"
                sx={{
                  fontFamily: "MontBlancBold",
                  fontSize: {
                    xs: "0.8rem",
                    sm: "0.8rem",
                    md: "0.8rem",
                    lg: "1rem",
                  },
                  textTransform: "none",
                  borderRadius: "15px",
                  boxShadow: "0 9px 0 #639577",
                  padding: "10px 20px",
                  color: "#3B0347",
                  bgcolor: "#87DBA8",
                  "&:hover": {
                    bgcolor: "#639577",
                  },
                  mb: 1,
                }}
              >
                Create a Plan
              </Button>
            </Box>
          </Box>
        )}
          </Box>
        </Box>    
      </Box>
    </Box>
  );
}

export default PlansPage;
