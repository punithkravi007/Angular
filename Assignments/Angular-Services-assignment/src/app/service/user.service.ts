import { Injectable } from "@angular/core";
import { User } from "../model/user";

@Injectable({
  providedIn: "root",
})
export class UserService {
  activeUsers: User[] = [];
  inactiveUsers: User[] = [];

  addUser(user: User) {
    this.activeUsers.push(user);
  }

  toggleUserStatus(id: number, status: string) {
    if (status === "ACTIVE") {
      let user = this.inactiveUsers[id];
      this.inactiveUsers.splice(id, 1);
      this.activeUsers.push(user);
    } else {
      let user = this.activeUsers[id];
      this.activeUsers.splice(id, 1);
      this.inactiveUsers.push(user);
    }
  }
}
