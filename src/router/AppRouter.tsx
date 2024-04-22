import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "../githubrepos/pages/HomePage";
import { AuthRoutes } from "../auth/routes/AuthRoutes";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="home" element={<HomePage />} />
        <Route path="/auth/*" element={<AuthRoutes />} />

        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </>
  );
};
