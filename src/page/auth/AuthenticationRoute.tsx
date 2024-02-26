import { Outlet, Navigate } from "react-router-dom";

interface AuthenticationRouteProps {
  isLoggedIn: string;
}

// only authenticated user can access
export const AuthenticationRoute = ({
  isLoggedIn,
}: AuthenticationRouteProps) => {
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

// public route any one can access
export const PublicRoute = ({ isLoggedIn }: AuthenticationRouteProps) => {
  return !isLoggedIn ? <Outlet /> : <Navigate to="/" />;
};
