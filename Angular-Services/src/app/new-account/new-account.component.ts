import { Component, ElementRef, ViewChild } from "@angular/core";
import { AccountService } from "../service/account.service";
import { Account } from "../model/account";

@Component({
  selector: "app-new-account",
  templateUrl: "./new-account.component.html",
  styleUrls: ["./new-account.component.css"],
})
export class NewAccountComponent {
  @ViewChild("accountName") accountName: ElementRef;
  @ViewChild("status") accountStatus: ElementRef;

  constructor(private accountService: AccountService) {}

  onCreateAccount() {
    const account = new Account(
      this.accountName.nativeElement.value,
      this.accountStatus.nativeElement.value
    );
    this.accountService.addAccount(account);
    this.clearEntry();
  }

  clearEntry() {
    this.accountName.nativeElement.value = "";
    this.accountStatus.nativeElement.selected = "Active";
  }
}
