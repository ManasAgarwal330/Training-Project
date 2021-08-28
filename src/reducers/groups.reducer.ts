import { AnyAction, Reducer } from "redux";
import {
  GROUPS_QUERY,
  GROUPS_QUERY_COMPLETED,
} from "../actions/actions.constant";
import { Groups } from "../modals/Groups";
import { addMany, EntityState, getIds } from "./entity.reducer";

export interface GroupState extends EntityState<Groups> {
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
      const groupId = getIds(groups);
      const newState = addMany<GroupState>(state, groups);
      return {
        ...newState,
        queryMap: {
          ...newState.queryMap,
          [action.payload.query]: groupId,
        },
      };
    default:
      return state;
  }
};
