import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedIn: boolean = false;
  @Output() loginEvent = new EventEmitter<void>();

  isAuthentic() {
    return this.loggedIn;
  }

  login() {
    this.loggedIn = true;
    this.loginEvent.emit();
  }
  logout() {
    this.loggedIn = false;
    this.loginEvent.emit();
  }
}
