import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular-Template-Driven-Form';
  @ViewChild('signupForm') signupForm: NgForm;
  user: {
    firstName: string;
    lastName: string;
    password: string;
    confirmPassword: string;
    address: {
      address: string;
      city: string;
      state: string;
      country: string;
    };
  } = {
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
    address: {
      address: '',
      city: '',
      state: '',
      country: '',
    },
  };

  signUpUser() {
    console.log(this.user);
    console.log(this.signupForm);
  }
}
