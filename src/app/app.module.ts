import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { CompAComponent } from './components/comp-a.component';
import { appReducers } from './store/app.reducer';
import { environment } from 'src/environment/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CompAComponent,
    StoreModule.forRoot( appReducers ),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production // Restrict extension to log-only (connect to the Devtools Extension in log-only mode. Default is false which enables all extension features)
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
