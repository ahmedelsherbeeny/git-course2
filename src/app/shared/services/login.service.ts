import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { AuthResponseData } from 'src/app/models/AuthResponseData.model';
import { USER } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  timeOutInterval:any
    

  constructor(private http:HttpClient) {


   }

   login(email:string,password:string):Observable<AuthResponseData>{
    return this.http.
    post<AuthResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebaseConfig.apiKey}`,
    {email,password,returnSecureToken:true})
   }

   signup(email:string,password:string):Observable<AuthResponseData>{
    return this.http.post<AuthResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebaseConfig.apiKey}`,
    {email,password,returnSecureToken:true})
   }



   formatUser(data:AuthResponseData){
    
    const expirationDate=new Date((+new Date().getTime()) + +data.expiresIn)
    
    const user=new USER(data.email,data.idToken,data.localId,expirationDate)
    return user;
   }


   runTimeOutInterval(user:USER){
    const timeNow=new Date().getTime()
    const expireDate=user.expireDate.getTime()
    
    const timeInterval=expireDate-timeNow
    

    this.timeOutInterval=setTimeout(() => {
      //log out functionality
      
    }, timeInterval);

   }

   saveUserInLocalStorage(user:USER){
    localStorage.setItem('userData',JSON.stringify(user))
    this.runTimeOutInterval(user)
  
   }


   getUserFromLocalStorage(){
    const user=JSON.parse(localStorage.getItem('userData')!)
    if(user){
      const expirationDate=new Date(user.expirationDate)
      let ourUser=new USER(user.email,user.token,user.localId,expirationDate)
      this.runTimeOutInterval(ourUser)
      return user

    }
    return null

   }

   getErrorMessage(message:string){
    switch(message){
      case 'EMAIL_NOT_FOUND':
        return "Email Not Found";

      case 'INVALID_PASSWORD':
        return 'Invalid Password' ;
      case 'EMAIL_EXISTS':
          return "Email already Exists"
        
      default:
        return 'Unknown Error try again later'  
    }
   }

   autoLogout(){
    localStorage.removeItem('userData')
    if(this.timeOutInterval){
      clearTimeout(this.timeOutInterval)
      this.timeOutInterval=null

    }
   
   }


}
