import React from "react";
import AuthForm from "../components/AuthForm";

function LogInPage() {
  const handleLoginSubmit = (formData) => {
    // handling login logic
    console.log("Login data:", formData);
  };

  return (
    <div>
      <header>
        <h1>Log In Page</h1>
        <AuthForm isSignup={false} onSubmit={handleLoginSubmit} />
      </header>
    </div>
  );
}

export default LogInPage;
