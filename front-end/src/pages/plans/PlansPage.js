import React, { useEffect, useState } from "react";
import { listGoals } from "../../utils/api";
import { Link } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import AuthHeader from "../../components/AuthHeader";
import CustomDivider from "../../components/CustomDivider";
import { useParams, useNavigate} from "react-router-dom";
import EditIcon from "../../assets/images/icons/EditPlans_Icon.png";
import "./PlansPage.css";
import { PieChart } from '@mui/x-charts';

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
              setPlans(resp.data); // Assuming the API response is in `resp.data`
              setPlansError(null);
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
        { id: 'Bonds', value: aiResponse.bondsPercentage, label: 'Bonds' },
        { id: 'Short Term', value: aiResponse.shortTermPercentage, label: 'Short Term' },
        { id: 'Foreign Stock', value: aiResponse.foreignStockPercentage, label: 'Foreign Stock' },
        { id: 'Domestic Stock', value: aiResponse.domesticStockPercentage, label: 'Domestic Stock' }
      ];
  
      return (
        <PieChart
          series={[{ data }]}
          width={400}
          height={200}
        />
      );
    };
  
    if (plansError) {
      return <div>Error: {plansError}</div>;
    }
  
    return (
      <Box sx={{ mt: { xs: 5, md: 0 } }}>
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
          <h2 className="titles">My Plans</h2>
          {plans.length > 0 ? (
            plans.map(plan => {
              let aiResponse;
              if (plan.risk_comfort_level === 'low') {
                aiResponse = plan.ai_response.lowRisk;
              } else if (plan.risk_comfort_level === 'medium') {
                aiResponse = plan.ai_response.mediumRisk;
              } else if (plan.risk_comfort_level === 'high') {
                aiResponse = plan.ai_response.highRisk;
              }
  
              return (
                <Box key={plan.goal_id} mb={4} p={2} border="1px solid #ddd" borderRadius="8px">
                  <Typography variant="h5">{plan.goal_name}</Typography>
                  <Box mt={2} textAlign="right">
                    <Button component={Link} to={`/plans/edit/${plan.goal_id}`}>
                      <img src={EditIcon} alt="Edit" />
                    </Button>
                  </Box>
                  <Box mt={2}>
                    {renderPieChart(aiResponse)}
                  </Box>
                  <Box mt={2}>
                    <Typography variant="body2">Investment Breakdown:</Typography>
                    <ul>
                      <li>Bonds: {aiResponse.bondsPercentage}%</li>
                      <li>Short Term: {aiResponse.shortTermPercentage}%</li>
                      <li>Foreign Stock: {aiResponse.foreignStockPercentage}%</li>
                      <li>Domestic Stock: {aiResponse.domesticStockPercentage}%</li>
                    </ul>
                  </Box>
                </Box>
              );
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
          <CustomDivider />
        </Box>
      </Box>
    );
  }
  
  export default PlansPage;
