"use client";

import { useAuth } from "../contexts/AuthContext";

// src/pages/LoginPage.tsx

// import React from "react";
// import { useAuth } from "../contexts/AuthContext";
// import { useAuth } from "../contexts/AuthContext";

const LoginPage: React.FC = () => {
  const { isAuthenticated, login } = useAuth();

  return (
    <div>
      <h1>Login Page</h1>
      {isAuthenticated ? (
        <p>You are already logged in.</p>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </div>
  );
};

export default LoginPage;
