import React, { createContext, useContext, useState } from "react";

// Create a context
const AuthContext = createContext();

// Use the context in components
export const useAuth = () => useContext(AuthContext);

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = () => {
    // Simulate login action
    setUser({ email: "user@example.com" }); // Example user
    localStorage.setItem("user", JSON.stringify({ email: "user@example.com" }));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
