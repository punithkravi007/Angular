import { Component, Input, OnInit } from "@angular/core";
import { Server } from "../server.model";
import { ServersService } from "../servers.service";

@Component({
  selector: "app-active-servers",
  templateUrl: "./active-servers.component.html",
  styleUrls: ["./active-servers.component.css"],
})
export class ActiveServersComponent implements OnInit {
  @Input("activeServers") servers: Server[];
  constructor(private serverService: ServersService) {}

  ngOnInit(): void {}

  showDescription(i: number) {
    console.log(i);
  }

  stopServer(i: number) {
    this.serverService.toggleServerStatus(i, "Active");
  }
}
