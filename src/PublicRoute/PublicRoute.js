import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PublicRoute = ({ children }) => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    if (isLoggedIn) {
        return <Navigate to="/contacts" replace />;
      }
    return children
}