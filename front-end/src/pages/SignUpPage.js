import React from "react";
import AuthForm from "../components/AuthForm";

function SignUpPage() {
  const handleSignupSubmit = (formData) => {
    // Handle signup logic
    console.log("Signup data:", formData);
  };
  return (
    <div>
      <header>
        <h1>Sign Up Page</h1>
        <AuthForm isSignup={true} onSubmit={handleSignupSubmit} />
        <p>"/dashboard" </p>
        <p>"/log-in"</p>
        <p>"/sign-up</p>
      </header>
    </div>
  );
}

export default SignUpPage;
