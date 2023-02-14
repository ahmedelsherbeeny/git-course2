import { Component, Input, OnInit, DoCheck,OnChanges, ChangeDetectionStrategy, SimpleChanges, AfterViewInit, ViewChild, AfterContentInit, AfterContentChecked, AfterViewChecked, OnDestroy } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { TryService } from '../try.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {

@Input()value:string='life cycle in process'
constructor(private t:TryService){
  console.log("constructor called")

}
emittedVal!:string
 
 
 
  ngOnChanges(changes: SimpleChanges): void {
    console.log('onchanges called')
    console.log(changes)
  }
 

  ngOnInit(): void {

     console.log("oninit called only once ")
     
  }
  ngDoCheck(): void {
    console.log("checked for changes")
  }
  ngAfterContentInit(): void {
    console.log("checked for content projected initialization")
  }
  ngAfterContentChecked(): void {
    console.log("checked for content projected every change detection")
  }
 
  ngAfterViewInit(): void {
    console.log("the initial view")
  }
  ngAfterViewChecked(): void {
    console.log("the view has changed")
  }
  ngOnDestroy(): void {
    console.log("the component destroyed")

  }
  submitval(){
    this.t.emitData(this.emittedVal)

  }
 








}
