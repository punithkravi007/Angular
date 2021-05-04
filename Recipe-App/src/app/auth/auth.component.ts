import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, AuthResponse } from './auth.service';
import { User } from './user.model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  @ViewChild('loginForm') loginForm: NgForm;
  message: string;
  isError: boolean = false;
  resposneColor: string;
  isLoading: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  login() {
    this.isLoading = true;
    const userCredentials: User = this.loginForm.value;
    this.authService
      .loginUser(userCredentials.email, userCredentials.password, true)
      .subscribe(
        (response) => {
          console.log(response);
          this.isError = true;
          this.resposneColor = 'lightgreen';
          this.message = 'Successfully Logged In!';
          this.isLoading = false;
        },
        (error) => {
          this.isError = true;
          this.message = error;
          this.isLoading = false;
          this.resposneColor = 'antiquewhite';
        }
      );
  }

  register() {
    this.isLoading = true;
    const userCredentials: User = this.loginForm.value;
    this.authService
      .registerUser(userCredentials.email, userCredentials.password, true)
      .subscribe(
        (response: AuthResponse) => {
          this.isError = true;
          this.resposneColor = 'lightgreen';
          this.message = 'Successfully Registered!';
          this.isLoading = false;
        },
        (error) => {
          this.isError = true;
          this.resposneColor = 'antiquewhite';
          this.message = error;
          this.isLoading = false;
        }
      );
    this.loginForm.reset();
  }
}
