import React, { useState } from "react";
import AuthForm from "../components/AuthForm";

function SignUpPage() {
  const [passwordError, setPasswordError] = useState("");

  const handleSignupSubmit = (formData) => {
    const { password } = formData;
    // Validate password length
    if (password.length < 12) {
      setPasswordError("Password must be at least 12 characters long.");
      return;
    }

    // Password must be a combination of uppercase letters, lowercase letters, numbers, and symbols.
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{12,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one symbol."
      );
      return;
    }

    //validation logic for password similarity with previous password.

    console.log("Signup data:", formData);
  };
  return (
    <div>
      <header>
        <h1>Let's create an account</h1>
        <AuthForm
          isSignup={true}
          onSubmit={handleSignupSubmit}
          passwordError={passwordError}
        />
      </header>
    </div>
  );
}

export default SignUpPage;
