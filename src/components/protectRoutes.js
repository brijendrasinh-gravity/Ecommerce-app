import React from "react";
import { Navigate } from "react-router-dom";
import { getRole, getToken } from "./utils/api";

const ProtectedRoute = ({ children, allow = [] }) => {
  const token = getToken();
  const role = getRole();
  if (!token) return <Navigate to="/" />;
  if (allow.length && !allow.includes(role)) return <Navigate to="/" />;
  return children;
};

export default ProtectedRoute;
