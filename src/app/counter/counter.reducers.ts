import { createReducer,on } from "@ngrx/store"
import { _ChangeDevName, _CustomIncrement, _Decrement, _Increment, _Reset } from "./counter.actions";
import { CounterState, initialState } from "./counter.state"


const _counterReducer=createReducer(initialState,

    on(_Increment,(state)=>{

        return {
            ...state,
            counter:state.counter + 1
        }


    }),

    on(_Decrement,(state)=>{

        return {
            ...state,
            counter:state.counter - 1
        }


    }),
    on(_Reset,(state)=>{

        return {
            ...state,
            counter:0
        }


    }),
    on(_CustomIncrement,(state,action)=>{
        return{
            ...state,
            counter:state.counter + action.count
        }
    }),
    on(_ChangeDevName,(state)=>{
        return{
            ...state,
            developerName:"Ahmed Elsherbeeny"
        }
    })

    
    );






export function counterReducer(state:any,action:any){

    return _counterReducer(state,action)

}