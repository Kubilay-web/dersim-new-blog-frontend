import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ element }) => {
  const { currentUser } = useSelector((state) => state.user);

  // Kullanıcı giriş yapmışsa bileşeni göster, değilse giriş sayfasına yönlendir
  return currentUser ? element : <Navigate to="/sign-in" replace />;
};

export default PrivateRoute;
