import React, { useState } from "react";
import AuthForm from "../components/AuthForm";
import Header from "../components/Header";

function LogInPage() {
  const [loginError, setLoginError] = useState("");

  const handleLoginSubmit = (formData) => {
    const { username, password } = formData;
    if (username === "exampleuser" && password === "password") {
      console.log("Login successful:", formData);
      setLoginError("");
    } else {
      setLoginError("Invalid username or password. Please try again.");
    }
  };

  return (
    <div>
      <Header />
      <header>
        <h1>Welcome Back</h1>
        <AuthForm isSignup={false} onSubmit={handleLoginSubmit} />
        {loginError && <p>{loginError}</p>}
      </header>
    </div>
  );
}

export default LogInPage;
