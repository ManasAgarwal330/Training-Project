import { AnyAction, Reducer } from "redux";
import { GROUPS_QUERY, GROUPS_QUERY_COMPLETED } from "../actions/groups.actions";
import { Groups } from "../modals/Groups";

export interface GroupState {
  byId: {
    [id: number]: Groups;
  };
  query: string;
  queryMap: { [query: string]: number[] };
}

const initialState = {
  byId: {},
  query: "",
  queryMap: {},
};

export const groupReducer: Reducer<GroupState> = (
  state = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case GROUPS_QUERY:
      return { ...state, query: action.payload };
    case GROUPS_QUERY_COMPLETED:
      const groups = action.payload.groups as Groups[];
      const groupId = groups.map((group) => group.id);
      const groupMap = groups.reduce((prev, group) => {
        return { ...prev, [group.id]: group };
      }, {});
      return {
        ...state,
        queryMap: {
          ...state.queryMap,
          [action.payload.query]: groupId,
        },
        byId: { ...state.byId, ...groupMap },
      };
    default:
      return state;
  }
};
