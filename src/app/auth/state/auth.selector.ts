import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./auth.state";

export const AUTH_STATE_NAME='auth';


const getAuthenticatedState=createFeatureSelector<AuthState>(AUTH_STATE_NAME);
export const isAuthenticated=createSelector(getAuthenticatedState,state=>{
    return state.user?true:false
})