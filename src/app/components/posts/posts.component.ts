import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { post } from 'src/app/models/posts.model';
import { _deletePost } from 'src/app/posts/posts.actions';
import { getPosts } from 'src/app/posts/posts.selector';
import { PostState } from 'src/app/posts/posts.state';
import { AppState } from 'src/app/store/App.state';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts$!:Observable<post[]>
  oldData!:post


  constructor(private store:Store<PostState>,public router:Router){
    
  }
  ngOnInit(): void {
    this.posts$=this.store.select(getPosts)
  }
  editPost(postId:any){
   

    this.router.navigate([`/posts/editpost/${postId}`])


  }
  deletePost(id:any){
    if(confirm('Are U sure U want to delete this post?')){
      this.store.dispatch(_deletePost({id}))


    }


  }

}
