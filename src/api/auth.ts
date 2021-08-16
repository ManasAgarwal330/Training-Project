import axios from "axios";
import { User, UserUpdate } from "../modals/User";
import { BASE_URL, LS_AUTH_TOKEN } from "./base";

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
  user: User;
  data: {
    is_2fa_enabled: boolean;
  };
}

export const login = (data: LoginRequest) => {
  const url = BASE_URL + "/login";
  return axios.post<LoginResponse>(url, data).then((response) => {
    localStorage.setItem(LS_AUTH_TOKEN, response.data.token);
    return response.data.user;
  });
};

export const Logout = () => {
  localStorage.removeItem(LS_AUTH_TOKEN);
  window.location.href = "/login";
};

interface MeResponse {
  data: User;
}

export const me = () => {
  const url = BASE_URL + "/me";

  return axios.get<MeResponse>(url).then((response) => {
    return response.data.data;
  });
};

interface MeUpdateResponse{
  data:User;
}

export const meUpdate = (data: UserUpdate | undefined) => {
  const url = BASE_URL + "/me";
  return axios.put<MeUpdateResponse>(url, data).then((response) => {
    return response.data.data;
  });
};
