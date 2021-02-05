import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css'],
})
export class SuccessAlertComponent {
  
  successMessage : string =  "Hey! This is a success Message"

  constructor(){}


}
