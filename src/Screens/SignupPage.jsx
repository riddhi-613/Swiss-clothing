import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignupPage.css"; // Add styles for the page

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    if (!email || !password) {
      setError("Both email and password are required!");
      return;
    }

    // Simple email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address!");
      return;
    }

    setError(""); // Clear any previous error messages
    alert("Signed up successfully!");
    navigate("/login"); // Redirect to login after successful signup
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      {error && <p className="error-message">{error}</p>} {/* Display error message */}
      <div className="input-group">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
        />
      </div>
      <div className="input-group">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
        />
      </div>
      <button onClick={handleSignup} className="signup-button">
        Sign Up
      </button>
    </div>
  );
};

export default SignupPage;
