import axios from "axios";

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem(LS_AUTH_TOKEN);

  if (!token) {
    return config;
  }

  return { ...config, headers: { ...config.headers, Authorization: token } };
});

axios.interceptors.response.use(undefined, (error) => {
  if (error && error.response.data.code === 9101) {
    localStorage.removeItem(LS_AUTH_TOKEN);
    window.location.href = "/login";
  }
  return Promise.reject(error);
});

export const BASE_URL = `https://api-dev.domecompass.com`;
export const LS_AUTH_TOKEN = "login_token";
