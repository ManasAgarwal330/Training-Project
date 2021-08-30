import { groupActions } from "../actions/groups.actions";
import { GroupRequest,fetchGroup as fetchGroupsApi } from "../api/groups";

export const fetchGroups = (request:GroupRequest) => {
    const query = request.query;
    groupActions.query(query);
    fetchGroupsApi(request).then((groups) => groupActions.queryCompleted(groups,query));

}