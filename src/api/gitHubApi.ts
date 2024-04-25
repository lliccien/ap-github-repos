import axios from "axios";

export const gitHub = axios.create({
  baseURL: "https://github.com",
  headers: {
    Accept: "application/json",
  },
});

gitHub.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

gitHub.interceptors.request.use((config) => {
  const token = sessionStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const gitHubApi = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Accept: "application/json",
  },
});

gitHubApi.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

gitHubApi.interceptors.request.use((config) => {
  const token = sessionStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
    config.headers.AccessControlAllowOrigin = "*";
  }
  return config;
});
