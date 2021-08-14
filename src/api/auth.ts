import axios from 'axios';
import { User } from '../modals/User';
import {BASE_URL, LS_AUTH_TOKEN} from './base';

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
      console.log(response.data);
      localStorage.setItem(LS_AUTH_TOKEN, response.data.token);
      return response.data.user;
    });
  };

  export const Logout = () => {
      localStorage.removeItem(LS_AUTH_TOKEN);
      window.location.href="/login";
  }