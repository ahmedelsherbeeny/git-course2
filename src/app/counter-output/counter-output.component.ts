import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import { getCounter } from '../counter/counter.selector';
import { CounterState } from '../counter/counter.state';
import { AppState } from '../store/App.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit {

  counter:number=0
  // $unsubscribe:Subject<boolean>=new Subject()
  counter$!:Observable<number>

  constructor(private store:Store<CounterState>){
    console.log(store);
    

   
  }

  ngOnInit(): void {
    this.counter$=this.store.select(getCounter)
  }


  // ngOnDestroy(): void {
  //   this.$unsubscribe.next(true)
  // }

}
