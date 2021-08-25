import { TypedUseSelectorHook, useSelector } from "react-redux";
import { AnyAction, createStore, Reducer } from "redux";
import { Groups } from "./modals/Groups";
import { User } from "./modals/User";

export const ME_LOGIN = "me/login";

interface AppState{
    me ?: User;
    groups:Groups[];
    isSidebarOpen:boolean;
}

const initialState:AppState = {
    me:undefined,
    groups:[],
    isSidebarOpen:true,
} 

const reducer:Reducer<AppState> = (currentState = initialState,dispatchedAction:AnyAction) => {
    switch(dispatchedAction.type){
        case ME_LOGIN:
            return {...currentState,me:dispatchedAction.payload};
        default:
            return currentState;
    }
}

export const store = createStore(reducer); //eslint/no-unused-vars

export const meFetchAction = (user:User) => ({type:ME_LOGIN,payload:user});

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;