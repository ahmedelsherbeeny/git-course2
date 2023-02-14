import { isDevMode, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TruncatePipe } from './truncate.pipe';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { ChangeCocolrDirective } from './change-cocolr.directive';
import { StoreModule } from '@ngrx/store';

import { HomeComponent } from './components/home/home.component';
import { HeadComponent } from './shared/head/head.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {HttpClientModule} from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { sharedReducer } from './store/shared/shared.reducer';
import { appReducers } from './store/App.state';
import { AuthEffects } from './auth/state/auth.effects';



@NgModule({
  declarations: [
    AppComponent,
    TruncatePipe,
    ChildComponent,
    ParentComponent,
    ChangeCocolrDirective,
    
    HomeComponent,
    HeadComponent,
    LoaderComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    EffectsModule.forRoot([AuthEffects]),
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
