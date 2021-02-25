import { Component, EventEmitter, Input, Output } from "@angular/core";
import { AccountService } from "../service/account.service";
import { LoggingService } from "../service/logging.service";

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.css"],
})
export class AccountComponent {
  @Input() account: { name: string; status: string };
  @Input() id: number;

  constructor(
    private logging: LoggingService,
    private accountService: AccountService
  ) {}

  onSetTo(status: string) {
    this.accountService.changeAccountStatus(this.id, status);
    this.logging.logStatus(status);
  }
}
