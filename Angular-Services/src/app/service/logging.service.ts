import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LoggingService {
  logStatus(message: string) {
    console.log(message);
  }
}
