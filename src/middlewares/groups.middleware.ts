import { groupActions } from "../actions/groups.actions";
import { GroupRequest,fetchGroup as fetchGroupsApi } from "../api/groups";
import {groupQueryLoadingSelector} from "../selectors/groups.selectors";
import { store } from "../store";

export const fetchGroups = (request:GroupRequest) => {
    const loadingMap = groupQueryLoadingSelector(store.getState());
    const query = request.query;
    const loading = loadingMap[query];
    groupActions.query(query);
    if(loading)
    {
        return;
    }
    
    fetchGroupsApi(request).then((groups) => groupActions.queryCompleted(groups,query));

}