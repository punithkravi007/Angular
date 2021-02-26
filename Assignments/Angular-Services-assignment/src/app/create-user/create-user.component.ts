import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { User } from "../model/user";
import { UserService } from "../service/user.service";

@Component({
  selector: "app-create-user",
  templateUrl: "./create-user.component.html",
  styleUrls: ["./create-user.component.css"],
})
export class CreateUserComponent implements OnInit {
  @ViewChild("userName") userName: ElementRef;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  addUser() {
    this.userService.addUser(new User(this.userName.nativeElement.value));
  }
}
