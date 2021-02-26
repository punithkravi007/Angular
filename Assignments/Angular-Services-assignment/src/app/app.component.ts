import { Component, OnInit } from "@angular/core";
import { User } from "./model/user";
import { UserService } from "./service/user.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  activeUsers: User[];
  inactiveUsers: User[];
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.activeUsers = this.userService.activeUsers;
    this.inactiveUsers = this.userService.inactiveUsers;
  }
}
