import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import HomePage from "../pages/HomePage";
import LogInPage from "../pages/LogInPage";
import SignUpPage from "../pages/SignUpPage";
import Footer from "../components/Footer";
import DashboardPage from "../pages/DashboardPage";

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
      </Routes>
      </div>
    
      <Footer />
    </Router>
  );
}

export default Layout;
