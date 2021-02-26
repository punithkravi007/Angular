import { Component, OnInit } from "@angular/core";
import { AccountService } from "./service/account.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  accounts: { name: string; status: string }[];

  constructor(private accountService: AccountService) {
    this.accountService.statusChangeEvent.subscribe((status: string) => {
      console.log(status);
    });
  }

  ngOnInit() {
    this.accounts = this.accountService.accounts;
  }
}
