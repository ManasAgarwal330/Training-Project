import { bindActionCreators } from "redux";
import { Groups } from "../modals/Groups";
import { store } from "../store";
import { GROUPS_QUERY, GROUPS_QUERY_COMPLETED } from "./actions.constant";

const groupsQuery = (query: string,loading:boolean) => ({
  type: GROUPS_QUERY,
  payload: {query,loading},
});

const groupsQueryCompleted = (groups: Groups[] | void, query: string) => ({
  type: GROUPS_QUERY_COMPLETED,
  payload: { groups, query },
});

export const groupActions = bindActionCreators(
  {
    query: groupsQuery,
    queryCompleted: groupsQueryCompleted,
  },
  store.dispatch
);
