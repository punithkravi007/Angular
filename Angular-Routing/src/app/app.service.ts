import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AppService {
  statusUpdateEvent: Subject<any> = new Subject<any>();
}
