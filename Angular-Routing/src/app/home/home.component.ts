import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { AppService } from "../app.service";
import { AuthService } from "../Auth-service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit, OnDestroy {
  statusUpdateSubscription: Subscription;
  constructor(
    private router: Router,
    private authService: AuthService,
    private appService: AppService
  ) {}

  ngOnInit(): void {
    this.statusUpdateSubscription = this.appService.statusUpdateEvent.subscribe(
      (data: number) => {
        if (data % 2 == 0) {
          console.log("Home Component : EVEN : " + data);
        }
      }
    );
  }

  ngOnDestroy() {
    this.statusUpdateSubscription.unsubscribe();
  }

  navigateToServers() {
    this.router.navigate(["servers"]);
  }

  login(): void {
    this.authService.login();
  }
  logout(): void {
    this.authService.logout();
  }
}
