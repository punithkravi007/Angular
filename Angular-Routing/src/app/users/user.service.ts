import { EventEmitter, Injectable } from "@angular/core";
import { User } from "./user.model";

@Injectable({
  providedIn: "root",
})
export class UserService {
  userId: number = 0;
  users: User[] = [];

  userChangeEvent = new EventEmitter<void>();

  addUser(user: User) {
    user.id = this.userId;
    this.users.push(user);
    this.userId += 1;
    this.userChangeEvent.emit();
  }

  getUsersOnStatus(status: string) {
    if (status === "active")
      return this.users.filter((u) => u.status == "active");
    else return this.users.filter((u) => u.status == "in-active");
  }

  getUserById(id: number) {
    return this.users.find((u) => u.id == id);
  }

  toggleUserStatus(user: User) {
    user = this.users.find((u) => u.id === user.id);
    if (user.status === "active") user.status = "in-active";
    else user.status = "active";
    this.userChangeEvent.emit();
  }
}
