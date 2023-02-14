import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store, StoreModule } from '@ngrx/store';
import { AppState } from 'src/app/store/App.state';
import { _setLoading } from 'src/app/store/shared/shared.actions';
import { _startLogin } from '../../state/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  logInForm!:FormGroup


  constructor( private fb: FormBuilder, private router:Router,private store:Store<any>) { 
  }
  ngOnInit(): void {
    this.logInForm = this.fb.group({
      email:  ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  
  submitLogin(){
    const email=this.logInForm.value.email;
    const password=this.logInForm.value.password;
    
    this.store.dispatch(_setLoading({status:true}))
    this.store.dispatch(_startLogin({email,password}))

  }

}
