import { useEffect } from "react";
import { gitHub } from "../../api/gitHubApi";

const getAccessToken = async (code: string) => {
  const { data } = await gitHub.post("/login/oauth/access_token", {
    client_id: import.meta.env.VITE_GITHUB_CLIENT_ID,
    client_secret: import.meta.env.VITE_GITHUB_CLIENT_SECRET,
    code,
  });

  return data;
};

export const AuthCallbackPage = () => {
  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");
    if (!code) {
      const error = new URLSearchParams(window.location.search).get("error");
      if (error) {
        window.location.href = "/";
      }
    }

    getAccessToken(code!)
      .then((response) => {
        sessionStorage.setItem("token", response.access_token);
        window.location.href = "/";
      })
      .catch(() => {
        window.location.href = "/";
      });
  }, []);

  return <h3>Obteniendo token de acceso</h3>;
};
