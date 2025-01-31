import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element }) => {
  const token = document.cookie.includes("access_token");

  return token ? element : <Navigate to="/sign-in" replace />;
};

export default PrivateRoute;
