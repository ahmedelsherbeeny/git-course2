import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect } from "@ngrx/effects";
import { ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { catchError, exhaustMap, map, mergeMap, tap } from "rxjs/operators";
import { LoginService } from "src/app/shared/services/login.service";
import { _getError, _setLoading } from "src/app/store/shared/shared.actions";
import { SharedState } from "src/app/store/shared/shared.state";
import { _autoLogin, _autoLogout, _loginSuccess, _signupSuccess, _startLogin, _startSignup } from "./auth.actions";


@Injectable()
export class AuthEffects{

    constructor(private actions$:Actions,
        private logService:LoginService,
        private store:Store<SharedState>,
        private router:Router
        ){}

        signup$=createEffect(()=>{
            return this.actions$.pipe(ofType(_startSignup),exhaustMap((action:any)=>{
                return this.logService.signup(action.email,action.password).pipe(
                    map((data:any)=>{
                        this.store.dispatch(_setLoading({status:false}))
                        this.store.dispatch(_getError({errorMessage:''}))
                        const user=this.logService.formatUser(data)

                        return _signupSuccess({user,redirect:true})
                    }),
                    catchError((error)=>{
                        this.store.dispatch(_setLoading({status:false}))

                    
                        const err=this.logService.getErrorMessage(error.error.error.message)
    
                        return of(_getError({errorMessage:err}));
                    })
                )

            }))

        })

    login$ = createEffect(
        ()=>{
        return  this.actions$.pipe(ofType(_startLogin),exhaustMap((action:any)=>{
            return this.logService.login(action.email,action.password).pipe(
                map((data)=>{
                    this.store.dispatch(_setLoading({status:false}))
                    this.store.dispatch(_getError({errorMessage:''}))
                    const user=this.logService.formatUser(data)
                    this.logService.saveUserInLocalStorage(user)

                    return _loginSuccess({user,redirect:true})
                }),

                catchError((error) => {
                    this.store.dispatch(_setLoading({status:false}))

                    
                    const err=this.logService.getErrorMessage(error.error.error.message)

                    return of(_getError({errorMessage:err}));


                }
                    
                )
            )
        }))
    })


    navigateAfterLogin$=createEffect(
        () => {
       return this.actions$.pipe(ofType(...[_loginSuccess,_signupSuccess]),tap((action)=>{

        if(action.redirect){
            this.router.navigate(['/'])


        }
        }))

    },{dispatch:false})

  


    autoLogin$=createEffect(()=>{
        return this.actions$.pipe(ofType(_autoLogin),mergeMap((action)=>{
            const user=this.logService.getUserFromLocalStorage()
            return of(_loginSuccess({user,redirect:false}))
            

        }))
    })

    autoLogout$=createEffect(()=>{
        return this.actions$.pipe(ofType(_autoLogout),map((action)=>{
            this.logService.autoLogout()
            this.router.navigate(['auth'])
        }))

    },{dispatch:false})

}