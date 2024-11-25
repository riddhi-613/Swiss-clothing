import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css"; // Import custom styles

const LoginPage = () => {
  const { login, loginError } = useAuth();  // Assuming loginError is part of the AuthContext
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (email && password) {
      setLoading(true); // Show loading state
      try {
        await login(email, password);  // Assuming login function takes email and password
        navigate("/"); // Redirect to home page after successful login
      } catch (error) {
        console.error("Login failed:", error);
        setLoading(false);
      }
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <div className="login-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {loginError && <p className="error-message">{loginError}</p>} {/* Display login error */}
        <button onClick={handleLogin} disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
