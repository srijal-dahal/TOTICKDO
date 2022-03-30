import { Navigate, useLocation } from "react-router-dom";
const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const isUser = document.cookie.includes("authorization");
  const isAuthenticated = isUser !== null && isUser ? true : false;
  if (!isAuthenticated) {
    return <Navigate to="/" replace state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoute;
