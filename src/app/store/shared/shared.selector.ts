import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SharedState } from "./shared.state";

export const SHARED_STATE_NAME='shared';


const getSharedState=createFeatureSelector<SharedState>(SHARED_STATE_NAME)

export const getShared=createSelector(getSharedState,(state)=>{
    return state.showLoading
})

export const getError=createSelector(getSharedState,state=>{
    return state.errorMessage
})