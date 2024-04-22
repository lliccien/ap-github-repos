import { FC } from "react";
import { Navigate } from "react-router-dom";

interface pros {
  children: React.ReactNode;
}

export const PublicRouter: FC<pros> = ({ children }) => {
  const isAuthenticated = false;
  return !isAuthenticated ? <>{children}</> : <Navigate to="/home" />;
};
