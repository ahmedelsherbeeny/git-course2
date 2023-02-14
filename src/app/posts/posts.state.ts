import { post } from "../models/posts.model";


export interface PostState{
    posts:post[];
}

export const initialState:PostState={

    posts:[
        {id:"1",title:"wether",description:"so cold"},
        {id:"2",title:"currency",description:"dollar in rise"}

    ]

}