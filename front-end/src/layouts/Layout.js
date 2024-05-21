import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import HomePage from "../pages/HomePage";
import LogInPage from "../pages/LogInPage";
import NotFoundPage from "../pages/NotFoundPage";
import SignUpPage from "../pages/SignUpPage";
import StrategiesForm from "../components/StrategiesForm/StrategiesForm";

// For api testing
import DashboardPage from "../pages/DashboardPage";
import ExampleLoginPage from "../pages/ExampleLoginPage";
import DisplayOneGoal from "../pages/GoalsExamplePages/DisplayOneGoal";
import ExampleCreateGoal from "../pages/GoalsExamplePages/ExampleCreateGoal";
import ExampleDashboard from "../pages/GoalsExamplePages/ExampleDashboard";
import PlansPage from "../pages/PlansPage";
import LatestPlanPage from "../pages/LatestPlanPage";
import PrivacyPolicyPage from "../pages/PrivacyPolicyPage";
// import ExampleEditGoal from "../pages/GoalsExamplePages/ExampleEditGoal";

function Layout() {
  const location = useLocation();

  return (
    <>
      <div className="Layout">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/log-in" element={<LogInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/dashboard/:userId/plans" element={<PlansPage />} />
          <Route path="/strategy" element={<StrategiesForm />} />
          <Route
            path="/dashboard/:userId/plans/latest"
            element={<LatestPlanPage />}
          />
          <Route
            path="/dashboard/:userId/goals/:goalId"
            element={<DisplayOneGoal />}
          />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />

          {/* example pages */}
          <Route path="/example-login" element={<ExampleLoginPage />} />
          <Route
            path="/dashboard/:userId/create"
            element={<ExampleCreateGoal />}
          />
          <Route
            path="/dashboard/:userId/goals"
            element={<ExampleDashboard />}
          />
          {/* example pages end */}

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      {location.pathname !== "/" && <Footer />}
    </>
  );
}

export default Layout;
