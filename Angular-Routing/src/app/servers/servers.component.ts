import { Component, OnInit } from "@angular/core";
import { Server } from "./server.model";
import { ServersService } from "./servers.service";

@Component({
  selector: "app-servers",
  templateUrl: "./servers.component.html",
  styleUrls: ["./servers.component.css"],
})
export class ServersComponent implements OnInit {
  public activeServers: Server[];
  public inActiveServers: Server[];

  constructor(private serversService: ServersService) {}

  ngOnInit() {
    this.activeServers = this.serversService.activeServers;
    this.inActiveServers = this.serversService.inActiveServers;
  }
}
