import React from "react";
import { Navigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode";

const ProtectedRoute = ({ children, adminOnly = false }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  try {
    const decoded = jwtDecode(token);

    // If route is admin-only, verify user's role
    if (adminOnly && decoded.role !== "Admin") {
      return <Navigate to="/" replace />;
    }

    return children;
  } catch (error) {
    console.error("Invalid token", error);
    return <Navigate to="/login" replace />;
  }
};

export default ProtectedRoute;