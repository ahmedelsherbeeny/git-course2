import { USER } from "src/app/models/user.model"

export interface AuthState{

    user:USER | null

}


export const initialState={
    user:null
    
}