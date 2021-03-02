import { Component, OnChanges, OnInit } from "@angular/core";
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
    this.activeServers = this.serversService.getActiveServers();
    this.inActiveServers = this.serversService.getInActiveServers();
    
    this.serversService.onServerChangeEvent.subscribe(() => {
      this.activeServers = this.serversService.getActiveServers();
      this.inActiveServers = this.serversService.getInActiveServers();
    });
  }
}
