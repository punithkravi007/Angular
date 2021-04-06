import { Component, OnInit } from "@angular/core";
import { AppService } from "../app.service";
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

  constructor(
    private userService: UserService,
    private appService: AppService
  ) {}

  ngOnInit() {
    this.users = this.userService.getUsersOnStatus("active");
    this.userService.userChangeEvent.subscribe(() => {
      this.users = this.userService.getUsersOnStatus("active");
    });

    this.appService.statusUpdateEvent.subscribe(
      (data: number) => {
        if (data % 2 != 0) {
          console.log("Home Component : ODD : " + data);
        }
      },
      (error) => {
        console.log(error);
      }
    );
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
