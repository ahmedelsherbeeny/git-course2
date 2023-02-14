import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterRoutingModule } from './counter-routing.module';
import { FormsModule } from '@angular/forms';
import { CounterComponent } from '../components/counter/counter.component';
import { CounterOutputComponent } from '../counter-output/counter-output.component';
import { CounterBtnsComponent } from '../counter-btns/counter-btns.component';
import { InputComponent } from '../input/input.component';
import { StoreModule } from '@ngrx/store';
import { COUNTER_STATE_NAME } from './counter.selector';
import { counterReducer } from './counter.reducers';


@NgModule({
  declarations: [
    CounterComponent,
    CounterOutputComponent,
    CounterBtnsComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    CounterRoutingModule,
    FormsModule,
    StoreModule.forFeature(COUNTER_STATE_NAME,counterReducer)
  ],
  exports:[
    CounterComponent,
    CounterOutputComponent,
    CounterBtnsComponent,
    InputComponent

  ]
})
export class CounterModule { }
