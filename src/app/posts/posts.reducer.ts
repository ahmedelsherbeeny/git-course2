import { createReducer, on } from "@ngrx/store";
import { _addPost, _deletePost, _editPost } from "./posts.actions";
import { initialState, PostState } from "./posts.state";

const _postReducer=createReducer(initialState,

    on(_addPost,(state,action)=>{
        let post={...action.post}
        post.id=(state.posts.length + 1).toString()
        return{
            ...state,
            posts:[...state.posts,post]

            
        }

    }),
    on(_editPost,(state,action)=>{
        const updatedPosts = state.posts.map((post) =>{
            return action.post.id === post.id ? action.post:post
        })
        return {
            ...state,
            posts:updatedPosts
        };

    }),
    on(_deletePost,(state,action)=>{
        const undeletedPosts=state.posts.filter(post=>{

            return post.id !== action.id
        })
        return{
            ...state,
            posts:undeletedPosts
        }
    })
    
    
    );

export function postReducer(state:any,action:any){
    return _postReducer(state,action)
}