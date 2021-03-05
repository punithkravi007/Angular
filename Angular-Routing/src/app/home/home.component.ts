import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../Auth-service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

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
