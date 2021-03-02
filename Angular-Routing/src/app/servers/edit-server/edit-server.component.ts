import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Server } from "../server.model";
import { ServersService } from "../servers.service";

@Component({
  selector: "app-edit-server",
  templateUrl: "./edit-server.component.html",
  styleUrls: ["./edit-server.component.css"],
})
export class EditServerComponent implements OnInit {
  server: Server;

  constructor(
    private route: ActivatedRoute,
    private serverService: ServersService,
    private router : Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((request: Params) => {
      let serverId = parseInt(request["id"]);
      this.server = this.serverService.getServerById(serverId);
    });
  }

  updateServerInfo() {
    this.serverService.updateServerInfo(this.server);
    this.router.navigate(["servers", this.server.id]);
  }
}
