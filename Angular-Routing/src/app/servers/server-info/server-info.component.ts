import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Server } from "../server.model";
import { ServersService } from "../servers.service";

@Component({
  selector: "app-server-info",
  templateUrl: "./server-info.component.html",
  styleUrls: ["./server-info.component.css"],
})
export class ServerInfoComponent implements OnInit {
  server: Server;
  isActive: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private serverService: ServersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((request: Params) => {
      let id = parseInt(request["id"]);
      let serverStatus = request["status"];
      this.server = this.serverService.getServerById(id, serverStatus);
      if (!this.server) {
        this.router.navigate(["servers"]);
      }
      this.isActive = serverStatus === "Active" ? true : false;
    });
  }
}
