import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { post } from 'src/app/models/posts.model';
import { _addPost } from 'src/app/posts/posts.actions';
import { PostState } from 'src/app/posts/posts.state';
import { AppState } from 'src/app/store/App.state';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  postForm!:FormGroup;
  id!:any
  route!:string
  editForm:boolean=false

  constructor(private fb:FormBuilder,
    private store:Store<PostState>,
    public router:Router){

  }
  ngOnInit(): void {
  

    this.postForm=this.fb.group({
      title: new FormControl(null,[Validators.required,Validators.minLength(6)]),
      description:new FormControl(null,[Validators.required,Validators.minLength(10)]) 
    })


  }

  onSubmit(){
    if(!this.postForm.valid){
      return;
    }else{

      const post:post={
        title:this.postForm.value.title,
        description:this.postForm.value.description

      };
      this.store.dispatch(_addPost({post}))



    }
    this.postForm.reset()

  }


}


