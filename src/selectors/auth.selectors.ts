import { createSelector } from "reselect";
import { authStateSelector} from "./app.selectors";
import { userByIdSelector } from "./users.selectors";

const authIdSelector = createSelector(
  [authStateSelector],
  (authState) => authState.id
);

export const meSelector = createSelector(
  [authIdSelector, userByIdSelector],
  (authId, userById) => {
    return authId !== undefined ? userById[authId] : undefined;
  }
);

export const meFirstNameSelector = createSelector([authIdSelector,userByIdSelector],(authId,userById) => {
    return authId !== undefined ? userById[authId].first_name : undefined 
})