import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TryService {

  constructor() { }

  dataEmitter=new BehaviorSubject<string>("let, see")

  emitData(value:string){
    this.dataEmitter.next(value)

  }
}
