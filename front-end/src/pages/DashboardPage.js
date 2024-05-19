import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Avatar from "@mui/material/Avatar";
import { createTheme } from '@mui/material/styles';
import EditIcon from "../assets/images/icons/EditPlans_Icon.png";
import ViewPlanIcon from "../assets/images/icons/ViewPlans_icon.png";
import StartPlanIcon from "../assets/images/icons/StartPlan_Icon.png";
import ISIcon from "../assets/images/icons/Strat_icon.png";
import TermIcon from "../assets/images/icons/Term_icon.png";
import Account_Icon from "../assets/images/icons/Account_Icon.png";
import Advice_icon from "../assets/images/icons/Advice_icon.png";
import Plans_icon from "../assets/images/icons/Plans_icon.png";
import Dashboard_icon from "../assets/images/icons/Dashboard_icon.png";
import BenchMarkIcon from "../assets/images/icons/BenchMark_Icon.png";
import BlankProfile from "../assets/images/dashboard/blank-profile-picture.png";
import "./DashboardPage.css"

function DashboardPage() {
  const theme = createTheme({
    palette:{
      primary:{
        main: '#87DBA8'
      }
    }
  })
  return (
    <Box>
      <Box class="top-box">
        <Grid className="top" container direction="row" justifyContent="flex-start" spacing={1}>
          <Avatar sx ={{bgcolor:theme, width: 86, height: 86}} xs={1} src={BlankProfile}></Avatar>          
          <Grid xs={9}>
            <h1>Good Morning,</h1>
            <h1>Rachel</h1>
          </Grid>
        </Grid>
      </Box>
      <Box class="middle-box">
        <Grid className="main-grid" container direction="column" spacing={2}>
          <Grid container direction="row" spacing={1} justifyContent="space-evenly">
              <Grid xs={12}>
                <h2 className="titles">Things To Do</h2>
              </Grid>
              <Grid className="card" xs={3}>
                <img src={EditIcon}></img>
                <Box>Edit My Plans</Box>
              </Grid>
              <Grid className="card" xs={3}>
                <img src={ViewPlanIcon}></img>
                <Box>View Plans</Box>
              </Grid>
              <Grid className="card" xs={3}>
                <img src={StartPlanIcon}></img>
                <Box>Start New Plan</Box>
              </Grid>
          </Grid>
          <Grid container direction="row" spacing={1} justifyContent="space-evenly">
            <Grid xs={12}>
                <h2 className="titles">Learning Paths</h2>
            </Grid>
            <Grid className="card" xs={3}>
              <img src={ISIcon}></img>
              <Box>Investment Strategies</Box>
            </Grid>
            <Grid className="card" xs={3}>
              <img src={TermIcon}></img>
              <Box>Terminology</Box>
            </Grid>
            <Grid className="card" xs={3}>
              <img src={BenchMarkIcon}></img>
              <Box>Benchmark Examples</Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box className="bottom">
        <Grid  container direction="row" spacing={2} justifyContent="space-evenly">
          <Grid  xs={2}>
              <img src={Dashboard_icon}></img>              
          </Grid>
          <Grid  xs={2}>
              <img src={Advice_icon}></img>              
          </Grid>
          <Grid  xs={2}>
              <img src={Plans_icon}></img>              
          </Grid>
          <Grid  xs={2}>
              <img src={Account_Icon}></img>              
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default DashboardPage;
