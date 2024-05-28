"use client";
// src/pages/HomePage.tsx

import React from "react";
import { useAuth } from "../contexts/AuthContext";
// import { useAuth } from "../contexts/AuthContext";

const HomePageExampleContext: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <div>
      <h1>Home Page</h1>
      {isAuthenticated ? (
        <div>
          <p>Welcome! You are logged in.</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  );
};

export default HomePageExampleContext;
