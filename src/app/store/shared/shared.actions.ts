import { createAction, props } from "@ngrx/store";


export const SET_LOADING_ACTION='[shared state] setting loader';
export const SET_ERROR_ACTION='[shared state] getting error';


export const _setLoading=createAction(SET_LOADING_ACTION,props<{status:boolean}>())
export const _getError=createAction(SET_ERROR_ACTION,props<{errorMessage:string}>())