import { createAction, props } from "@ngrx/store";
import { USER } from "src/app/models/user.model";
import { USERSIGNDATA } from "src/app/models/userData";



export const SIGNUP_START='[auth page] sign up start'
export const SIGNUP_SUCCESS='[auth page] signup success';
export const SIGNUP_FAIL='[auth page] signup fail'



export const LOGIN_START='[auth page] login start';
export const LOGIN_SUCCESS='[auth page] login success';
export const LOGIN_FAIL='[auth page] login fail'

export const AUTO_LOGIN='[auth page] auto login'

export const AUTO_LOGOUT='[auth page] auto logout'



export const  _startLogin=createAction(LOGIN_START, props<USERSIGNDATA>());
export const  _loginSuccess=createAction(LOGIN_SUCCESS,props<{user:USER,redirect:boolean}>());
export const  _loginFail=createAction(LOGIN_FAIL);


export const  _startSignup=createAction(SIGNUP_START, props<USERSIGNDATA>());
export const  _signupSuccess=createAction(SIGNUP_SUCCESS,props<{user:USER,redirect:boolean}>());
export const  _signupFail=createAction(SIGNUP_FAIL);


export const  _autoLogin=createAction(AUTO_LOGIN)

export const  _autoLogout=createAction(AUTO_LOGOUT)