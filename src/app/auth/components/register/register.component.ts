import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/App.state';
import { _setLoading } from 'src/app/store/shared/shared.actions';
import { _startSignup } from '../../state/auth.actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  signUpForm!:FormGroup

  constructor(private fb:FormBuilder,private store:Store<AppState>){


  }
  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      email:  ['', Validators.required],
      password: ['', Validators.required]
    }) 
   }


  submitsignUp(){
    const email=this.signUpForm.value.email;
    const password=this.signUpForm.value.password;
    this.store.dispatch(_setLoading({status:true}))
    this.store.dispatch(_startSignup({email,password}))

  }

}
