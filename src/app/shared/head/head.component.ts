import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { _autoLogout } from 'src/app/auth/state/auth.actions';
import { isAuthenticated } from 'src/app/auth/state/auth.selector';
import { AppState } from 'src/app/store/App.state';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  isAuthenticated$!:Observable<boolean>
  constructor(private store:Store<AppState>){}
  ngOnInit(): void {
    this.isAuthenticated$=this.store.select(isAuthenticated)
  }
  onLogout(event:Event){
    event.preventDefault()
    this.store.dispatch(_autoLogout())

  }

}
