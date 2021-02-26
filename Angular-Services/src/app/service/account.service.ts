import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";
import { Account } from "../model/account";

@Injectable({
  providedIn: "root",
})
export class AccountService {
  accounts = [];
  statusChangeEvent = new EventEmitter<string>();

  constructor(private loggingService: LoggingService) {}

  addAccount(account: Account) {
    this.accounts.push(account);
  }

  changeAccountStatus(id: number, status: string) {
    this.loggingService.logStatus(`
    Account Status is changed from : ${this.accounts[id].status} to ${status}
    `);
    this.accounts[id].status = status;
    this.statusChangeEvent.emit(status);
  }
}
