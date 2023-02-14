import { createReducer, on } from "@ngrx/store"
import { _autoLogout, _loginSuccess, _signupSuccess } from "./auth.actions";
import { initialState } from "./auth.state"

const _authReducer=createReducer(initialState,

    on(_loginSuccess,(state:any,action:any)=>{
        
        return{
            ...state,
            user:action.user
        };
    }),
    on(_signupSuccess,(state:any,action:any)=>{
        return {
            ...state,
            user:action.user
        }

    }),

    on(_autoLogout,(state:any,action:any)=>{
        return{
            ...state,
            user:null

        }
    })
    )

export function authReducer(state:any,action:any){
    return _authReducer(state,action);
}