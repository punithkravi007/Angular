import { Component, EventEmitter, Input, Output } from "@angular/core";
import { User } from "../model/user";
import { UserService } from "../service/user.service";

@Component({
  selector: "app-inactive-users",
  templateUrl: "./inactive-users.component.html",
  styleUrls: ["./inactive-users.component.css"],
})
export class InactiveUsersComponent {
  @Input() users: User[];

  constructor(private userService: UserService) {}

  onSetToActive(i) {
    this.userService.toggleUserStatus(i, "ACTIVE");
  }
}
