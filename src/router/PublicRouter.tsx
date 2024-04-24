import { FC, useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/AuthProvider";

interface pros {
  children: React.ReactNode;
}

export const PublicRouter: FC<pros> = ({ children }) => {
  const { user } = useContext(UserContext);
  const isAuthenticated = user.isAuthenticated;

  return !isAuthenticated ? <>{children}</> : <Navigate to="/home" />;
};
