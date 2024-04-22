import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "../githubrepos/pages/HomePage";
import AuthPage from "../auth/pages/AuthPage";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="home" element={<HomePage />} />
        <Route path="auth" element={<AuthPage />} />

        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </>
  );
};
