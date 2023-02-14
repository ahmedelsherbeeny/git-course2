import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import { post } from 'src/app/models/posts.model';
import { _editPost } from 'src/app/posts/posts.actions';
import { getPostById, getPosts } from 'src/app/posts/posts.selector';
import { PostState } from 'src/app/posts/posts.state';
import { AppState } from 'src/app/store/App.state';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit,OnDestroy {
  editPostForm!:FormGroup
   post!:post
   unsubscribe$:Subject<boolean>=new Subject()

  constructor(private fb:FormBuilder,
    private store:Store<PostState>,
    public router:Router,private route:ActivatedRoute){

  }
 

  ngOnInit(): void {

    this.route.paramMap.subscribe((params:any)=>{
      let id=params.get('id')

      this.store.select(getPostById,{id}).pipe(takeUntil(this.unsubscribe$)).
      subscribe((data:any)=>{
        this.post=data

      })

     
      this.getformData()


    })
    
   

  


  }
  getformData() {
    this.editPostForm=this.fb.group({
      title: new FormControl(this.post.title,[Validators.required,Validators.minLength(6)]),
      description:new FormControl(this.post.description,[Validators.required,Validators.minLength(10)]) 
    })  }

  onSubmit(){

    if(!this.editPostForm.valid){
      return;
    }else{

      const post:post={
        id:this.post.id,
        title:this.editPostForm.value.title,
        description:this.editPostForm.value.description

      };
      this.store.dispatch(_editPost({post}))

    }
    this.router.navigate(['/posts'])
    this.editPostForm.reset()




  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true)
  }

}
