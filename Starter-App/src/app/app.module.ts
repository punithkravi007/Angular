import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Assignment01Component } from './assignment01/assignment01.component';
import { Assignment02Component } from './assignment02/assignment02.component';
import { Assignment03Component } from './assignment03/assignment03.component';
import { HeaderComponent } from './assignment03/header/header.component';
import { BodyComponent } from './assignment03/body/body.component';
import { CreateServerElementComponent } from './assignment03/body/create-server-element/create-server-element.component';
import { ServerComponent } from './assignment03/body/server/server.component';
import { BlueprintComponent } from './assignment03/body/blueprint/blueprint.component';

@NgModule({
  declarations: [
    AppComponent,
    Assignment01Component,
    Assignment02Component,
    Assignment03Component,
    HeaderComponent,
    BodyComponent,
    CreateServerElementComponent,
    ServerComponent,
    BlueprintComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
