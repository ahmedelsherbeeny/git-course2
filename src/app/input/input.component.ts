import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { _CustomIncrement } from '../counter/counter.actions';
import { CounterState } from '../counter/counter.state';
import { AppState } from '../store/App.state';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  value!:number

  constructor(private store:Store<CounterState>){

  }
  ngOnInit(): void {

  }



  add(){
    this.store.dispatch(_CustomIncrement({count:+this.value}))

  }

}
