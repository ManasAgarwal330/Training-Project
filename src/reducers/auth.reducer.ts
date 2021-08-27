import { AnyAction, Reducer } from "redux";
import { ME_FETCH, ME_LOGIN } from "../actions/actions.constant";


export interface AuthState {
  id ?: number;
}

const initialState = {
  id: undefined,
};

export const authReducer: Reducer<AuthState> = (
  state = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case ME_FETCH:
    case ME_LOGIN:
        const userId = action.payload.id as number;
        return {...state,id:userId};
    default:
        return state;
  }
};
