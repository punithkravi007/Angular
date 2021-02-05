import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Assignment01Component } from './assignment01/assignment01.component';
import { Assignment02Component } from './assignment02/assignment02.component';

@NgModule({
  declarations: [
    AppComponent,
    Assignment01Component,
    Assignment02Component
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
