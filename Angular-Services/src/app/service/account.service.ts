import { Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable({
  providedIn: "root",
})
export class AccountService {
  accounts = [];

  constructor(private loggingService: LoggingService) {}

  addAccount(name: string, status: string) {
    this.accounts.push({ name: name, status: status });
    this.loggingService.logStatus(`
    New Account is added : 
    Name   : ${name}
    status : ${status}
    `);
  }

  changeAccountStatus(id: number, status: string) {
    this.loggingService.logStatus(`
    Account Status is changed from : ${this.accounts[id].status} to ${status}
    `);
    this.accounts[id].status = status;
  }
}
