import { Navigate, useLocation } from "react-router-dom";
import { getLocalStorage } from "../utils/global_function";
const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const isUser = getLocalStorage("user");
  const isAuthenticated = isUser != "" ? true : false;
  if (!isAuthenticated) {
    return <Navigate to="/" replace state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoute;
