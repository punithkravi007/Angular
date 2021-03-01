import { Component, Input, OnChanges, OnInit } from "@angular/core";
import { Server } from "../server.model";
import { ServersService } from "../servers.service";

@Component({
  selector: "app-inactive-servers",
  templateUrl: "./inactive-servers.component.html",
  styleUrls: ["./inactive-servers.component.css"],
})
export class InactiveServersComponent implements OnInit {
  @Input("inActiveServers") servers: Server[];
  constructor(private serverService: ServersService) {}

  ngOnInit(): void {}

  startServer(i: number) {
    this.serverService.toggleServerStatus(i, "In-Active");
  }
}
