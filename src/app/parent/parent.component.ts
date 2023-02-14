import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TryService } from '../try.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit,OnChanges,DoCheck,
AfterContentInit,AfterContentChecked ,AfterViewInit,AfterViewChecked{
inputText:string=''
destroy:boolean=false


  constructor(private t:TryService){
    console.log("constructor called !!")
    // console.log(this.inputText)

  }
  
 
 
  ngOnChanges(changes: SimpleChanges): void {
    console.log('onchanges is called!!')
    console.log(changes)
  }
 
  ngOnInit(): void {
    // console.log(this.inputText)
    console.log('oninit gets called !!')
    this.t.dataEmitter.subscribe(val=>{
      this.inputText=val
    })
  }
  ngDoCheck(): void {
    console.log('docheck called!!')
  }
  ngAfterContentInit(): void {
    console.log("content init gets called ")
  }
  ngAfterContentChecked(): void {
    console.log('content checked gets called')
  }
  ngAfterViewInit(): void {
console.log('aftervied called !')  }
  ngAfterViewChecked(): void {
    console.log('afterview checked called')
  }
  // sumitVal(input:HTMLInputElement){
  //   this.inputText=input.value;


  // }
  destroyComponent(){
    this.destroy=true
  }


  

}
