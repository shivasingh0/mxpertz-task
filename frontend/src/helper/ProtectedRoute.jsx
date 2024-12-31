// protected route component
import React from "react";
import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ children }) => (
  localStorage.getItem("token") ? children : <Navigate to="/login" />
);

export default ProtectedRoute;
