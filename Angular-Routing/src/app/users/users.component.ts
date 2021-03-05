import { Component, OnInit } from "@angular/core";
import { User } from "./user.model";
import { UserService } from "./user.service";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"],
})
export class UsersComponent implements OnInit {
  users: User[];

  name: string;
  role: string;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.getUsersOnStatus("active");
    this.userService.userChangeEvent.subscribe(() => {
      this.users = this.userService.getUsersOnStatus("active");
    });
  }

  addUser() {
    this.userService.addUser(new User(this.name, this.role, "active"));
  }

  getActiveUsers() {
    this.users = this.userService.getUsersOnStatus("active");
  }

  getInActiveUsers() {
    this.users = this.userService.getUsersOnStatus("in-active");
  }
}
