import { Component, OnChanges, OnInit } from "@angular/core";
import { Server } from "./server.model";
import { ServersService } from "./servers.service";

@Component({
  selector: "app-servers",
  templateUrl: "./servers.component.html",
  styleUrls: ["./servers.component.css"],
})
export class ServersComponent implements OnInit {
  public servers: Server[] = [];
  public activeServers: Server[];
  public inActiveServers: Server[];

  constructor(private serversService: ServersService) {}

  ngOnInit() {
    this.servers = this.serversService.getServers();

    this.serversService.onServerChangeEvent.subscribe(() => {
      this.servers = this.serversService.getServers();
    });
  }
}
