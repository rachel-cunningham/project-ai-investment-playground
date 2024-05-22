import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import HomePage from "../pages/HomePage";
import LogInPage from "../pages/LogInPage";
import NotFoundPage from "../pages/NotFoundPage";
import SignUpPage from "../pages/SignUpPage";
import Articles from "../learningLibrary/articles";
import Terms from "../learningLibrary/terms";
import StrategiesForm from "../components/StrategiesForm/StrategiesForm";

// For api testing
import DashboardPage from "../pages/DashboardPage";
import ExampleLoginPage from "../pages/ExampleLoginPage";
import DisplayOneGoal from "../pages/GoalsExamplePages/DisplayOneGoal";
import ExampleCreateGoal from "../pages/GoalsExamplePages/ExampleCreateGoal";
import ExampleDashboard from "../pages/GoalsExamplePages/ExampleDashboard";
import PlansPage from "../pages/plans/PlansPage";
import NewPlanPage from "../pages/plans/NewPlanPage";
import LatestPlanPage from "../pages/plans/LatestPlanPage";
import PrivacyPolicyPage from "../pages/PrivacyPolicyPage";
import AccountPage from "../pages/AccountPage";

function Layout() {
  const location = useLocation();

  return (
    <>
      <div className="Layout">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/log-in" element={<LogInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/example-login" element={<ExampleLoginPage />} />
          <Route path="/dashboard/:userId" element={<DashboardPage />} />
          <Route path="/dashboard/:userId/plans" element={<PlansPage />} />
          <Route
            path="/dashboard/:userId/plans/new"
            element={<StrategiesForm />}
          />
          <Route
            path="/dashboard/:userId/plans/latest"
            element={<LatestPlanPage />}
          />
          <Route path="/dashboard/:userId/account" element={<AccountPage />} />
          <Route path="/learning-paths/articles" element={<Articles />} />
          <Route path="/learning-paths/terms" element={<Terms />} />
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
