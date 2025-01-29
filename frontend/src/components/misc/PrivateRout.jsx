import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import ROUTES from "../../apiConfig";

const PrivateRoute = () => {
  const auth = useAuth();

  return auth.user ? <Outlet /> : <Navigate to={ROUTES.LOGIN_PAGE} />;
};

export default PrivateRoute;
