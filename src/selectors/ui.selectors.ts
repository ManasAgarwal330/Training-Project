import { createSelector } from "reselect";
import { uiStateSelector } from "./app.selectors";

export const sidebarOpenSelector = createSelector(
  [uiStateSelector],
  (uiState) => uiState.isSidebarOpen
);

export const smallSidebarOpenSelector = createSelector(
  [uiStateSelector],
  (uiState) => uiState.isSmallSidebarOpen
);
