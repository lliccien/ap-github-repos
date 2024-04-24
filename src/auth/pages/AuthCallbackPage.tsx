import { useContext, useEffect, useState } from "react";
import { gitHub } from "../../api/gitHubApi";
import { UserContext } from "../../context/AuthProvider";
import { Navigate } from "react-router-dom";

const getAccessToken = async (code: string) => {
  const { data } = await gitHub.post("/login/oauth/access_token", {
    client_id: import.meta.env.VITE_GITHUB_CLIENT_ID,
    client_secret: import.meta.env.VITE_GITHUB_CLIENT_SECRET,
    code,
  });

  return data;
};

export const AuthCallbackPage = () => {
  const { setUser } = useContext(UserContext);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");
    if (code) {
      getAccessToken(code!)
        .then((response) => {
          setUser({
            token: response.access_token,
            isAuthenticated: true,
          });

          sessionStorage.setItem("token", response.access_token);

          setRedirect(true);
        })
        .catch((error) => {
          console.error(error);
          return;
        });
    }
  }, [setUser, setRedirect]);

  return (
    <>
      <h3>Obteniendo token de acceso</h3>
      {redirect && <Navigate to="/home" />}
    </>
  );
};
