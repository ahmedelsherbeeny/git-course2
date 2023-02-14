import { createReducer, on } from "@ngrx/store";
import { _getError, _setLoading } from "./shared.actions";
import { initialState } from "./shared.state";

const _sharedReducer=createReducer(initialState,
    on(_setLoading,(state,action)=>{
        return{
            ...state,
            showLoading:action.status
        }
    }),
    on(_getError,(state,action)=>{
        return{
            ...state,
            errorMessage:action.errorMessage

        }
    })
    
    )


export function sharedReducer(state:any,action:any){
    return _sharedReducer(state,action);
}