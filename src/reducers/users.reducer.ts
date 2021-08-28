import { AnyAction, Reducer } from "redux";
import { ME_FETCH, ME_LOGIN } from "../actions/actions.constant";
import { User } from "../modals/User";
import { addOne, EntityState } from "./entity.reducer";

export interface UserState extends EntityState<User>{
}

const initialState = {
  byId:{},
};

export const userReducer: Reducer<UserState> = (
  state = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case ME_FETCH:
    case ME_LOGIN:
        return addOne<UserState>(state,action.payload as User);
    default:
      return state;
  }
};
