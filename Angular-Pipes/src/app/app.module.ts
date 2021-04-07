import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ShortenPipe } from './shorten.pipe';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';
import { FilterServersPipe } from './filter-servers.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ShortenPipe,
    ExponentialStrengthPipe,
    FilterServersPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
