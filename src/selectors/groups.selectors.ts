import { createSelector } from "reselect";
import { groupStateSelector } from "./app.selectors";

export const groupQuerySelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.query
);

const groupQueryMapSelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.queryMap
);

const groupByIdSelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.byId
);

export const groupSelector = createSelector(
  [groupByIdSelector, groupQueryMapSelector, groupQuerySelector],
  (byId, queryMap, query) => {
    const groupIds = queryMap[query] || [];
    const groups = groupIds.map((id) => byId[id]);
    return groups;
  }
);
