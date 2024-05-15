import React from "react";
import NewUserForm from "../layouts/users/NewUserForm";

function SignUpPage() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Sign Up Page</h1>
        <NewUserForm />
        <p>"/dashboard" </p>
        <p>"/log-in"</p>
        <p>"/sign-up</p>
      </header>
    </div>
  );
}

export default SignUpPage;
