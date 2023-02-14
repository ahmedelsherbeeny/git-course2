import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from '../components/add-post/add-post.component';
import { EditPostComponent } from '../components/edit-post/edit-post.component';
import { PostsComponent } from '../components/posts/posts.component';

const routes: Routes = [
  {path:'',component:PostsComponent,
  children:[
    {path:'addpost',component:AddPostComponent},
    {path:'editpost/:id',component:EditPostComponent}
  ]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
