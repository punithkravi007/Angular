import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from "@angular/core";
import { AccountService } from "../service/account.service";
import { LoggingService } from "../service/logging.service";

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
    this.accountService.addAccount(
      this.accountName.nativeElement.value,
      this.accountStatus.nativeElement.value
    );
    this.clearEntry();
  }

  clearEntry() {
    this.accountName.nativeElement.value = "";
    this.accountStatus.nativeElement.selected = "Active";
  }
}
