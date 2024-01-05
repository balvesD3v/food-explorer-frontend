import { BrowserRouter } from "react-router-dom";

import { AdminRoutes } from "./admin.routes";
import { UserRoutes } from "./user.routes.";
import { AuthRoutes } from "./auth.routes";
import { useAuth } from "../hooks/auth";
import { USER_ROLE } from "../utils/roles";

export function Routes() {
  const { user } = useAuth();

  function AccessRoute() {
    switch (user.role) {
      case USER_ROLE.ADMIN:
        return <AdminRoutes />;

      case USER_ROLE.USER:
        return <UserRoutes />;

      default:
        return <UserRoutes />;
    }
  }

  return (
    <BrowserRouter>{user ? <AccessRoute /> : <AuthRoutes />}</BrowserRouter>
  );
}
