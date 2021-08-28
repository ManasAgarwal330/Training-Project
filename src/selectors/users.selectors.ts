import { AppState } from "../store";
import { userStateSelector } from "./app.selectors";

export const userByIdSelector = (state:AppState) => {
    const userState = userStateSelector(state);
    return userState.byId;
}