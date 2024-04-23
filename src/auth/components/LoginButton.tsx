import { Button } from "primereact/button";

const GITHUB_CLIENT_ID = import.meta.env.VITE_GITHUB_CLIENT_ID;

export const LoginButton = () => {
  const handleLogin = () => {
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&scope=user%20repo`;
  };
  return (
    <>
      <Button
        label="Login with GitHub"
        icon="pi pi-github"
        onClick={handleLogin}
      />
    </>
  );
};
