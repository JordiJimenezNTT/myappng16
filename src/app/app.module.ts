import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CompAComponent } from './components/comp-a.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CompAComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
