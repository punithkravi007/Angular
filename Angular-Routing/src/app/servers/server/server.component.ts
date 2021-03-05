import { Component, Input, OnInit } from "@angular/core";
import { Server } from "../server.model";
import { ServersService } from "../servers.service";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styleUrls: ["./server.component.css"],
})
export class ServerComponent implements OnInit {
  @Input() server: Server;
  constructor(private serverService: ServersService) {}

  ngOnInit(): void {}

  toggleServerStatus() {
    if (this.server.status === "active") {
      console.log(this.server.status);
      this.serverService.toggleServerStatus(this.server.id, "in-active");
    } else this.serverService.toggleServerStatus(this.server.id, "active");
  }
}
