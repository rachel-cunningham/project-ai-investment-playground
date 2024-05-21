import React, { useEffect, useState } from "react";
import { useParams, useNavigate} from "react-router-dom";
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
  React.useEffect(() => {
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
  const goToPlanPage=planType=>()=>{
    history(`/dashboard/${userId}/plans/${planType}`);
  }
  const goToPage=learningType=>()=>{
    history(`/learning-paths/${learningType}`);
  }
  
  return (
    <Box>
      <AuthHeader userId={userId} />
      <Box className="top-box">
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
              <img src={EditIcon}></img>
              <Box>Most Recent Plan</Box>
            </Grid>
            <Grid className="card" xs={3} onClick={goToPlanPage('')}>
              <img src={ViewPlanIcon}></img>
              <Box >View Plans
              </Box>
            </Grid>
            <Grid className="card" xs={3} onClick={goToPlanPage('new')}>
              <img src={StartPlanIcon}></img>
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
              <img src={ISIcon}></img>
              <Box>Investment Strategies</Box>
            </Grid>
            <Grid className="card" xs={3} onClick={goToPage('terms')}>
              <img src={TermIcon}></img>
              <Box>Terminology</Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default DashboardPage;
