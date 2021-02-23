import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BackgroundColorCustomDirective } from './directives/background-color-directive';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { FontSizeDirectiveDirective } from './directives/font-size-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    StructuralDirectivesComponent,
    BackgroundColorCustomDirective,
    FontSizeDirectiveDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
