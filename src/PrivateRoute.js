import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify"; // Make sure you have toastify installed

const PrivateRoute = ({ element }) => {
  const { currentUser } = useSelector((state) => state.user);

  // If the user is not logged in, redirect to the sign-in page
  if (!currentUser) {
    return <Navigate to="/sign-in" replace />;
  }

  // If the user is logged in but not an admin, show a toast message and redirect to the homepage
  if (currentUser && !currentUser.isAdmin) {
    toast.error("No authorization"); // Show error toast
    return <Navigate to="/" replace />;
  }

  // If the user is an admin, show the requested element or redirect to the admin page
  if (currentUser.isAdmin) {
    return element; // Allow access to the admin page or component
  }

  // If none of the conditions are met, render nothing (fallback)
  return null;
};

export default PrivateRoute;
