import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Account } from "../model/account";
import { AccountService } from "../service/account.service";
import { LoggingService } from "../service/logging.service";

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.css"],
})
export class AccountComponent {
  @Input() account: Account;
  @Input() id: number;

  constructor(private accountService: AccountService) {
    this.accountService.statusChangeEvent.subscribe((status: string) =>
      alert(status)
    );
  }

  onSetTo(status: string) {
    this.accountService.changeAccountStatus(this.id, status);
  }
}
