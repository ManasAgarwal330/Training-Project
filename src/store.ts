import { TypedUseSelectorHook, useSelector } from "react-redux";
import { AnyAction, createStore, Reducer } from "redux";
import { Groups } from "./modals/Groups";
import { User } from "./modals/User";

export const ME_LOGIN = "me/login";
export const UI_TOGGLE_SIDEBAR = "ui/sidebar_toggle";
export const UI_TOGGLE_SMALL_SIDEBAR = "ui/small_sidebar_toggle";


interface AppState {
  me?: User;
  query:string;
  groupQueryMap:{[query:string]:number[]}
  groups:{[id:number]:Groups};
  isSidebarOpen: boolean;
  isSmallSidebarOpen:boolean;
}

const initialState: AppState = {
  me: undefined,
  query:"",
  groupQueryMap:{},
  groups:{},
  isSidebarOpen: false,
  isSmallSidebarOpen:false,
};

const reducer: Reducer<AppState> = (
  currentState = initialState,
  dispatchedAction: AnyAction
) => {
  switch (dispatchedAction.type) {
    case ME_LOGIN:
      return { ...currentState, me: dispatchedAction.payload };
    case UI_TOGGLE_SIDEBAR:
      return {...currentState,isSidebarOpen:dispatchedAction.payload};
    case UI_TOGGLE_SMALL_SIDEBAR:
      return {...currentState,isSmallSidebarOpen:dispatchedAction.payload};
    default:
      return currentState;
  }
};

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); //eslint/no-unused-vars

export const meFetchAction = (user: User) => ({
  type: ME_LOGIN,
  payload: user,
});

export const uiSidebarToggle = (open:boolean) => ({type:UI_TOGGLE_SIDEBAR,payload:open});

export const uiSmallSidebarToggle = (open:boolean) => ({type:UI_TOGGLE_SMALL_SIDEBAR,payload:open});

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
