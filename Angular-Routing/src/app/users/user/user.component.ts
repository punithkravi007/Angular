import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { User } from "../user.model";
import { UserService } from "../user.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
})
export class UserComponent implements OnInit {
  user: User;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((request: Params) => {
      this.user = this.userService.getUserById(+request["id"]);
    });
  }

  deactivateUser() {
    this.userService.toggleUserStatus(this.user);
  }

  activateUser() {
    this.userService.toggleUserStatus(this.user);
  }
}
