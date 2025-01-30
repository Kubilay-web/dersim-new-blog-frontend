import React from "react";
import { Navigate } from "react-router-dom";

// PrivateRoute, yalnızca giriş yapmış kullanıcıları yönlendirecek
const PrivateRoute = ({ element }) => {
  const token = document.cookie
    .split("; ")
    .find((row) => row.startsWith("access_token="));

  // Token var ise, bileşeni göster; yoksa giriş sayfasına yönlendir
  return token ? element : <Navigate to="/sign-in" replace />;
};

export default PrivateRoute;
