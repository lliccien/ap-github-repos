import { useEffect } from "react";
import { gitHub } from "../../api/gitHubApi";

const getAccessToken = async (code: string) => {
  const { data } = await gitHub.post("/login/oauth/access_token", {
    client_id: import.meta.env.VITE_GITHUB_CLIENT_ID,
    client_secret: import.meta.env.VITE_GITHUB_CLIENT_SECRET,
    code,
  });
  console.log(`data: ${JSON.stringify(data)}`);
  return data;
};

export const AuthCallbackPage = () => {
  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");
    if (!code) {
      const error = new URLSearchParams(window.location.search).get("error");
      if (error) {
        console.log(error);
      }
    }
    console.log(`code: ${code}`);

    getAccessToken(code!)
      .then((response) => {
        console.log(`response: ${JSON.stringify(response)}`);
        sessionStorage.setItem("token", response.access_token);
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <h3>Obteniendo token de acceso</h3>;
};
