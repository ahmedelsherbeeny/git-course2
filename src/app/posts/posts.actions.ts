import { createAction, props } from "@ngrx/store"
import { post } from "../models/posts.model"

export const ADD_POST_ACTION="[posts page] add post"
export const EDIT_POST_ACTION="[posts page] update post"
export const DELETE_POST_ACTION="[posts page] delete post"



export const _addPost=createAction(ADD_POST_ACTION,props<{post:post}>());
export const _editPost=createAction(EDIT_POST_ACTION,props<{post:post}>());
export const _deletePost=createAction(DELETE_POST_ACTION,props<{id:string}>());