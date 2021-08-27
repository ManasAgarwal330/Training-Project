import { AnyAction, Reducer } from "redux";
import {
  UI_TOGGLE_SIDEBAR,
  UI_TOGGLE_SMALL_SIDEBAR,
} from "../actions/actions.constant";

export interface UiState {
  isSidebarOpen: boolean;
  isSmallSidebarOpen: boolean;
}

export const initialState = {
  isSidebarOpen: false,
  isSmallSidebarOpen: false,
};

export const uiReducer: Reducer<UiState> = (
  state = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case UI_TOGGLE_SIDEBAR:
      return { ...state, isSidebarOpen: action.payload };
    case UI_TOGGLE_SMALL_SIDEBAR:
      return { ...state, isSmallSidebarOpen: action.payload };
    default:
      return state;
  }
};
