import { TypedUseSelectorHook, useSelector } from "react-redux";
import { combineReducers, createStore } from "redux";
import { authReducer } from "./reducers/auth.reducer";
import { groupReducer } from "./reducers/groups.reducer";
import { uiReducer } from "./reducers/ui.reducer";
import { userReducer } from "./reducers/users.reducer";

const reducer = combineReducers({
  auth: authReducer,
  users: userReducer,
  groups: groupReducer,
  ui: uiReducer,
});


export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); //eslint/no-unused-vars

type AppState = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
