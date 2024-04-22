import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "../githubrepos/pages/HomePage";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { PrivateRoute } from "./PrivateRoute";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />

        <Route path="/auth/*" element={<AuthRoutes />} />

        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </>
  );
};
