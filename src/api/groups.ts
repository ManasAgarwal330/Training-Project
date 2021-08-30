import axios from "axios";
import { Groups } from "../modals/Groups";
import { BASE_URL } from "./base";

export interface GroupRequest {
    limit?: number;
    offset?: number;
    query : string;
    status: "all-groups" | "favourite" | "archived";
  }
  
  interface GroupResponse {
    data: Groups[];
  }

  export const fetchGroup = (data: GroupRequest) => {
    const url = BASE_URL + "/groups";
  
    return axios
      .get<GroupResponse>(url, { params: data })
      .then((response) => {
        return response.data.data;
      })
      .catch((error) => console.error(error));
  };