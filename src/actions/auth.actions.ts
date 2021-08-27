import { bindActionCreators } from "redux";
import { User } from "../modals/User";
import { store } from "../store";
import { ME_FETCH, ME_LOGIN } from "./actions.constant";

export const meLoginAction = (user: User) => ({
  type: ME_LOGIN,
  payload: user,
});

const meFetchAction = (user: User) => ({
  type: ME_FETCH,
  payload: user,
});

export const authActions = bindActionCreators(
  {
    fetch: meFetchAction,
    login: meLoginAction,
  },
  store.dispatch
);
