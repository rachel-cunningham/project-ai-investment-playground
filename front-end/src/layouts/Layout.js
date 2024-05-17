import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import About from "../pages/About";
import DashboardPage from "../pages/DashboardPage";
import HomePage from "../pages/HomePage";
import LogInPage from "../pages/LogInPage";
import NotFoundPage from "../pages/NotFoundPage";
import SignUpPage from "../pages/SignUpPage";

// For api testing
import ExampleLoginPage from "../pages/ExampleLoginPage";
import ExampleCreateGoal from "../pages/Goals/ExampleCreateGoal";
import ExampleGoalsList from "../pages/Goals/ExampleGoalsList";

function Layout() {
    return (
        <Router>
            <Header />
            <div className="Layout">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/dashboard" element={<DashboardPage />} />
                    <Route path="/log-in" element={<LogInPage />} />
                    <Route path="/sign-up" element={<SignUpPage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<NotFoundPage />} />
                    <Route
                        path="/example-login"
                        element={<ExampleLoginPage />}
                    />
                    <Route
                        path="/dashboard/:userId/create"
                        element={<ExampleCreateGoal />}
                    />
                    <Route
                        path="/dashboard/:userId"
                        element={<ExampleGoalsList />}
                    />
                </Routes>
            </div>

            <Footer />
        </Router>
    );
}

export default Layout;
