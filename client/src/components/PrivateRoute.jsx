import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    // User is not logged in, redirect to login
    return <Navigate to="/login" replace />;
  }

  // User is logged in, render children
  return children;
};

export default PrivateRoute;
