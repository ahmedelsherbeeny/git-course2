import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { _Decrement, _Increment, _Reset } from '../counter/counter.actions';
import { CounterState } from '../counter/counter.state';
import { AppState } from '../store/App.state';

@Component({
  selector: 'app-counter-btns',
  templateUrl: './counter-btns.component.html',
  styleUrls: ['./counter-btns.component.css']
})
export class CounterBtnsComponent implements OnInit {
  constructor(private store:Store<AppState>){

  }
  ngOnInit(): void {
  }


  increment(){
    this.store.dispatch(_Increment())

  }

  decrement(){
    this.store.dispatch(_Decrement())


  }
  reset(){
    this.store.dispatch(_Reset())


  }

}
