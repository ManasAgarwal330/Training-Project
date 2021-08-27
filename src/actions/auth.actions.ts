import { User } from "../modals/User";

export const ME_LOGIN = "me/login";
export const ME_FETCH = "me/fetch";

export const meLoginAction = (user: User) => ({
  type: ME_LOGIN,
  payload: user,
});

export const meFetchAction = (user: User) => ({
  type: ME_FETCH,
  payload: user,
});
