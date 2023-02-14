import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AUTO_LOGIN, _autoLogin } from './auth/state/auth.actions';
import { isAuthenticated } from './auth/state/auth.selector';
import { _ChangeDevName } from './counter/counter.actions';
import { getDevName } from './counter/counter.selector';
import { CounterState } from './counter/counter.state';
import { AppState } from './store/App.state';
import { getError, getShared } from './store/shared/shared.selector';
import { SharedState } from './store/shared/shared.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  title = 'ang-practise';
  data = "This is an example component of two way data binding.";
  startDate = new Date();
  aryDates:any[] = [];
  arrtoshow:any[]=[]
  value:string=''
  countnum:number=0
  showLoading$!:Observable<boolean>
  errorMessage$!:Observable<string>
  

constructor(private store:Store<AppState>){

}




  ngOnInit(): void {
    this.showLoading$=this.store.select(getShared)
    this.errorMessage$=this.store.select(getError)
    this.store.dispatch(_autoLogin())


  }

  
  submitval(inputVal:HTMLInputElement){
    this.value=inputVal.value

  }

  registerForm(userForm:NgForm){
    console.log(userForm.value)

  }


//   increaseDates() {
//     this.arrtoshow=[]
//     let daysToAdd=7


//     for (var i = 0; i <= daysToAdd; i++) {
//         var currentDate = new Date();
//         currentDate.setMonth(this.startDate.getMonth())
//         currentDate.setFullYear(this.startDate.getFullYear())
//         currentDate.setDate(this.startDate.getDate() + i);

//         this.aryDates.push(this.DayAsString(currentDate.getDay()) + ", " + currentDate.getDate() + " " + this.MonthAsString(currentDate.getMonth()) + " " + currentDate.getFullYear());
//     }

//     let newD= new Date(this.aryDates[this.aryDates.length-1])


//  this.startDate=newD
//  this.arrtoshow=this.aryDates.slice(this.aryDates.length-8,this.aryDates.length)

//   }


//   decreaseDates(){
//     this.arrtoshow=[]


//     let daysToDecrease=7


//     for (var i = 0; i <= daysToDecrease; i++) {
//       var currentDate = new Date();
//       currentDate.setMonth(this.startDate.getMonth())
//       currentDate.setFullYear(this.startDate.getFullYear())
//       currentDate.setDate(this.startDate.getDate() - i);
//         this.aryDates.push(this.DayAsString(currentDate.getDay()) + ", " + currentDate.getDate() + " " + this.MonthAsString(currentDate.getMonth()) + " " + currentDate.getFullYear());
//     }

//     let newD= new Date(this.aryDates[this.aryDates.length-1])

//  this.startDate=newD
//  this.arrtoshow=this.aryDates.slice(this.aryDates.length-8,this.aryDates.length)

//   }

// MonthAsString(monthIndex:any) {
//     var d = new Date();
//     var month = new Array();
//     month[0] = "January";
//     month[1] = "February";
//     month[2] = "March";
//     month[3] = "April";
//     month[4] = "May";
//     month[5] = "June";
//     month[6] = "July";
//     month[7] = "August";
//     month[8] = "September";
//     month[9] = "October";
//     month[10] = "November";
//     month[11] = "December";

//     return month[monthIndex];
// }

// DayAsString(dayIndex:any) {
//     var weekdays = new Array(7);
//     weekdays[0] = "Sunday";
//     weekdays[1] = "Monday";
//     weekdays[2] = "Tuesday";
//     weekdays[3] = "Wednesday";
//     weekdays[4] = "Thursday";
//     weekdays[5] = "Friday";
//     weekdays[6] = "Saturday";

//     return weekdays[dayIndex];
// }


}
