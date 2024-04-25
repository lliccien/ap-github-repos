import axios from "axios";

export const gitHub = axios.create({
  baseURL: "/github",
  headers: {
    Accept: "application/json",
  },
});

gitHub.interceptors.request.use((config) => {
  const token = sessionStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
    config.headers.AccessControlAllowOrigin = "*";
  }
  return config;
});

export const gitHubApi = axios.create({
  baseURL: "/api",
  headers: {
    Accept: "application/json",
  },
});

gitHubApi.interceptors.request.use((config) => {
  const token = sessionStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
    config.headers.AccessControlAllowOrigin = "*";
  }
  return config;
});
