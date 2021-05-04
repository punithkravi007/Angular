import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated: boolean = false;
  userSubscription: Subscription;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.userSubscription = this.authService.userAuthentication.subscribe(
      (user: User) => {
        this.isAuthenticated = !!user;
      }
    );
  }

  logout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}
