import { bindActionCreators } from "redux";
import { store } from "../store";
import { UI_TOGGLE_SIDEBAR, UI_TOGGLE_SMALL_SIDEBAR } from "./actions.constant";

const uiSidebarToggle = (open: boolean) => ({
  type: UI_TOGGLE_SIDEBAR,
  payload: open,
});

const uiSmallSidebarToggle = (open: boolean) => ({
  type: UI_TOGGLE_SMALL_SIDEBAR,
  payload: open,
});

export const uiActions = bindActionCreators(
  {
    sidebar: uiSidebarToggle,
    smallSidebar: uiSmallSidebarToggle,
  },
  store.dispatch
);
