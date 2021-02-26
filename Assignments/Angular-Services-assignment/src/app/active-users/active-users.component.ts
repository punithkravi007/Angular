import { Component, EventEmitter, Input, Output } from "@angular/core";
import { User } from "../model/user";
import { UserService } from "../service/user.service";

@Component({
  selector: "app-active-users",
  templateUrl: "./active-users.component.html",
  styleUrls: ["./active-users.component.css"],
})
export class ActiveUsersComponent {
  @Input() users: User[];

  constructor(private userService: UserService) {}

  onSetToInactive(i: number) {
    this.userService.toggleUserStatus(i, "IN-ACTIVE");
  }
}
