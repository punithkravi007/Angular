import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { AppService } from "./app.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  statusUpdateObservable: Observable<any>;

  constructor(private appService: AppService) {}

  ngOnInit() {
    let count = 0;
    setInterval(() => {
      this.appService.statusUpdateEvent.next(count);
      count++;
    }, 1000);
  }
}
