import { Groups } from "../modals/Groups";

export const GROUPS_QUERY = "groups/query";
export const GROUPS_QUERY_COMPLETED = "groups/queryCompleted";

export const groupsQuery = (query: string) => ({
  type: GROUPS_QUERY,
  payload: query,
});

export const groupsQueryCompleted = (
  groups: Groups[] | void,
  query: string
) => ({
  type: GROUPS_QUERY_COMPLETED,
  payload: { groups, query },
});
