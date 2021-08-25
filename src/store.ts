import { TypedUseSelectorHook, useSelector } from "react-redux";
import { AnyAction, createStore, Reducer } from "redux";
import { Groups } from "./modals/Groups";
import { User } from "./modals/User";

export const ME_LOGIN = "me/login";
export const UI_TOGGLE_SIDEBAR = "ui/sidebar_toggle";
export const UI_TOGGLE_SMALL_SIDEBAR = "ui/small_sidebar_toggle";
export const GROUPS_QUERY = "groups/query";
export const GROUPS_QUERY_COMPLETED = "groups/queryCompleted";

interface AppState {
  me?: User;
  query: string;
  groupQueryMap: { [query: string]: number[] };
  groups: { [id: number]: Groups };
  isSidebarOpen: boolean;
  isSmallSidebarOpen: boolean;
}

const initialState: AppState = {
  me: undefined,
  query: "",
  groupQueryMap: {},
  groups: {},
  isSidebarOpen: false,
  isSmallSidebarOpen: false,
};

const reducer: Reducer<AppState> = (
  currentState = initialState,
  dispatchedAction: AnyAction
) => {
  switch (dispatchedAction.type) {
    case ME_LOGIN:
      return { ...currentState, me: dispatchedAction.payload };
    case UI_TOGGLE_SIDEBAR:
      return { ...currentState, isSidebarOpen: dispatchedAction.payload };
    case UI_TOGGLE_SMALL_SIDEBAR:
      return { ...currentState, isSmallSidebarOpen: dispatchedAction.payload };
    case GROUPS_QUERY:
      return { ...currentState, query: dispatchedAction.payload };
    case GROUPS_QUERY_COMPLETED:
      const groups = dispatchedAction.groups as Groups[];
      const groupId = groups.map((group) => group.id);
      const groupMap = groups.reduce((prev, group) => {
        return { ...prev, [group.id]: group };
      }, {});
      console.log(groupMap);
      return {
        ...currentState,
        groupQueryMap: {
          ...currentState.groupQueryMap,
          [dispatchedAction.query]: groupId,
        },
        groups: { ...currentState.groups,...groupMap},
      };
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

export const uiSidebarToggle = (open: boolean) => ({
  type: UI_TOGGLE_SIDEBAR,
  payload: open,
});

export const uiSmallSidebarToggle = (open: boolean) => ({
  type: UI_TOGGLE_SMALL_SIDEBAR,
  payload: open,
});

export const groupsQuery = (query: string) => ({
  type: GROUPS_QUERY,
  payload: query,
});

export const groupsQueryCompleted = (groups: Groups[]|void, query: string) => ({
  type: GROUPS_QUERY_COMPLETED,
  groups: groups,
  query: query,
});

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
