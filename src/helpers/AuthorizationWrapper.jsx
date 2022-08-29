import { Navigate } from "react-router-dom";

// redirect to Login if user is not found
export function AuthorizationWrapper({ children }) {
  if (localStorage.getItem("user")) {
    return children;
  } else {
    return <Navigate to="/login" replace />;
  }
}
