import { authReducer } from "../auth/state/auth.reducer";
import { AUTH_STATE_NAME } from "../auth/state/auth.selector";
import { AuthState } from "../auth/state/auth.state";
import { counterReducer } from "../counter/counter.reducers";
import { CounterState } from "../counter/counter.state";
import { postReducer } from "../posts/posts.reducer";
import { PostState } from "../posts/posts.state";
import { sharedReducer } from "./shared/shared.reducer";
import { SHARED_STATE_NAME } from "./shared/shared.selector";
import { SharedState } from "./shared/shared.state";





export interface AppState{

    [SHARED_STATE_NAME]:SharedState,
    [AUTH_STATE_NAME]:AuthState

    

}

export const appReducers={
    [SHARED_STATE_NAME]:sharedReducer,
    [AUTH_STATE_NAME]:authReducer

}