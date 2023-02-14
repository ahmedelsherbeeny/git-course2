import { PropertyRead } from "@angular/compiler";
import { createFeatureSelector,createSelector } from "@ngrx/store";
import { post } from "../models/posts.model";
import { PostState } from "./posts.state";


export const POST_STATE_NAME='posts';
const getPostState=createFeatureSelector<PostState>(POST_STATE_NAME);

export const getPosts=createSelector(getPostState,(state)=>{
    return state.posts;

});


export const getPostById=createSelector(getPostState,(state:PostState,props:any)=>{

    return state.posts.find((post:post)=> post.id===props.id)

});