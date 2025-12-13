import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/use-Auth";
import useAuthUser from "../hooks/use-AuthUser";

type RequiredAuthProps = {
  allowedRoles: string[];
};

const RequiredAuth = ({ allowedRoles }: RequiredAuthProps) => {
  const auth = useAuth();
  const location = useLocation();
  const roles = useAuthUser();

  if (auth?.loading) return <div>Loading...</div>;

  return auth?.isAuthenticated &&
    roles.roles.some((role) => allowedRoles.includes(role)) ? (
    <Outlet />
  ) : auth?.isAuthenticated ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/auth/login" state={{ from: location }} replace />
  );
};

export default RequiredAuth;
