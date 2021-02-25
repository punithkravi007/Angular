import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AccountService {
  
  accounts = [];

  constructor() {}

  addAccount(name: string, status: string) {
    this.accounts.push({ name: name, status: status });
  }

  changeAccountStatus(id: number, status: string) {
    this.accounts[id].status = status;
  }
}
