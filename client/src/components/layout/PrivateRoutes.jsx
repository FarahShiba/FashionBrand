import { Outlet, Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const PrivateRoutes = () => {
  const { getCurrentUser } = useAuth(); // Get the current user from context
  const location = useLocation(); // Get the current location

  return !getCurrentUser() ? (
    <Navigate to="/login" state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
};

export default PrivateRoutes;
