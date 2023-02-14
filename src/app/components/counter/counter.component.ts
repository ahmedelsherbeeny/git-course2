import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { _ChangeDevName } from 'src/app/counter/counter.actions';
import { getDevName } from 'src/app/counter/counter.selector';
import { CounterState } from 'src/app/counter/counter.state';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit{
  devName$!:Observable<string>

  constructor(private store:Store<CounterState>){}



  ngOnInit(): void {
    this.devName$=this.store.select(getDevName)
 

  }
  changeName(){
    this.store.dispatch(_ChangeDevName())

  }

}
