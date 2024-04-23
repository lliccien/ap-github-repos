import { LoginButton } from "../components/LoginButton";

export const LoginPage = () => {
  return (
    <div className="grid align-center" style={{ height: "100vh" }}>
      <div style={{ margin: "auto" }}>
        <h1 style={{ textAlign: "center" }}>Login</h1>
        <LoginButton />
      </div>
    </div>
  );
};
