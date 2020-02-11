import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TesteThisComponent } from './teste-this/teste-this.component';

@NgModule({
  declarations: [
    AppComponent,
    TesteThisComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
