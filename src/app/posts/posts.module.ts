import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { AddPostComponent } from '../components/add-post/add-post.component';
import { EditPostComponent } from '../components/edit-post/edit-post.component';
import { PostsComponent } from '../components/posts/posts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { POST_STATE_NAME } from './posts.selector';
import { postReducer } from './posts.reducer';


@NgModule({
  declarations: [
    PostsComponent,
    AddPostComponent,
    EditPostComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature(POST_STATE_NAME,postReducer)
  ],
  exports:[
    PostsComponent,
    AddPostComponent,
    EditPostComponent
  ]
})
export class PostsModule { }
