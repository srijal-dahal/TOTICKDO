import { useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { getLocalStorage } from "../utils/global_function";
const ProtectedRoute = ({ children }) => {
  const user = getLocalStorage("user");
  const location = useLocation();
  const isAuthenticated = user !== null ? true : false;
  if (!isAuthenticated) {
    return <Navigate to="/" replace state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoute;
