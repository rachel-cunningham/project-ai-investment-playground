import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Avatar from "@mui/material/Avatar";
import { createTheme } from "@mui/material/styles";
import AuthHeader from "../components/AuthHeader";
import EditIcon from "../assets/images/icons/EditPlans_Icon.png";
import ViewPlanIcon from "../assets/images/icons/ViewPlans_icon.png";
import StartPlanIcon from "../assets/images/icons/StartPlan_Icon.png";
import ISIcon from "../assets/images/icons/Strat_icon.png";
import TermIcon from "../assets/images/icons/Term_icon.png";
import Account_Icon from "../assets/images/icons/Account_Icon.png";
import Advice_icon from "../assets/images/icons/Advice_icon.png";
import Plans_icon from "../assets/images/icons/Plans_icon.png";
import Dashboard_icon from "../assets/images/icons/Dashboard_icon.png";
import BlankProfile from "../assets/images/dashboard/blank-profile-picture.png";
import "./DashboardPage.css";
import { Typography } from "@mui/material";
import HowItWorks from "../components/HowItWorks";

function DashboardPage({ name }) {
  const history = useNavigate();
  const [displayName, setDisplayName] = useState(name);

  const { userId } = useParams();

  const handleName = (name) => {
    setDisplayName(name);
  };

  let salutation = "Good Morning,";
  const theme = createTheme({
    palette: {
      primary: {
        main: "#87DBA8",
      },
    },
  });

  useEffect(() => {
    const queryParameters = new URLSearchParams(window.location.search);
    const lname = queryParameters.get("userId");
    if (lname) {
      setDisplayName(lname);
    }
    let date = new Date();
    let hours = date.getHours();
    if (hours >= 12 && hours <= 17) {
      salutation = "Good Afternoon,";
    } else if (hours >= 17 && hours <= 24) {
      salutation = "Good Evening,";
    }
  }, []);

  const goToPlanPage = (planType) => () => {
    history(`/dashboard/${userId}/plans/${planType}`);
  };

  const goToPage = (learningType) => () => {
    history(`/learning-paths/${learningType}`);
  };

  return (
    <Box>
      <AuthHeader userId={userId} />
      <Box className="top-box" sx={{ mb: 2 }}>
        <Grid
          className="top"
          container
          direction="row"
          justifyContent="flex-start"
          spacing={1}
        >
          <Avatar
            sx={{ bgcolor: theme, width: 86, height: 86 }}
            xs={1}
            src={BlankProfile}
          ></Avatar>
          <Grid xs={9}>
            <Typography variant="h3">{salutation} </Typography>
            <Typography variant="h3" sx={{ textTransform: "capitalize" }}>
              {userId}
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 2 }}>
        <HowItWorks />
      </Box>
      <Box className="middle-box">
        <Grid className="main-grid" container direction="column" spacing={2}>
          <Grid
            container
            direction="row"
            spacing={1}
            justifyContent="space-evenly"
          >
            <Grid xs={12}>
              <h2 className="titles">Things To Do</h2>
            </Grid>
            <Grid className="card" xs={3} onClick={goToPlanPage('latest')}>
              <img src={EditIcon} alt="Edit Plan"></img>
              <Box>Most Recent Plan</Box>
            </Grid>
            <Grid className="card" xs={3} onClick={goToPlanPage('')}>
              <img src={ViewPlanIcon} alt="View Plan"></img>
              <Box>View Plans</Box>
            </Grid>
            <Grid className="card" xs={3} onClick={goToPlanPage('new')}>
              <img src={StartPlanIcon} alt="Start New Plan"></img>
              <Box>Start New Plan</Box>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            spacing={1}
            justifyContent="space-evenly"
          >
            <Grid xs={12}>
              <h2 className="titles">Learning Paths</h2>
            </Grid>
            <Grid className="card" xs={3} onClick={goToPage('articles')}>
              <img src={ISIcon} alt="Investment Strategies"></img>
              <Box>Investment Strategies</Box>
            </Grid>
            <Grid className="card" xs={3} onClick={goToPage('terms')}>
              <img src={TermIcon} alt="Terminology"></img>
              <Box>Terminology</Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box className="bottom">
        <Grid
          container
          direction="row"
          spacing={2}
          justifyContent="space-evenly"
        >
          <Grid xs={2}>
            <img src={Dashboard_icon} alt="Dashboard"></img>
          </Grid>
          <Grid xs={2}>
            <img src={Advice_icon} alt="Advice"></img>
          </Grid>
          <Grid xs={2}>
            <img src={Plans_icon} alt="Plans"></img>
          </Grid>
          <Grid xs={2}>
            <img src={Account_Icon} alt="Account"></img>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default DashboardPage;
