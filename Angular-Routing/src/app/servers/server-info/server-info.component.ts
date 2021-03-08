import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Data, Params, Router } from "@angular/router";
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
    this.route.data.subscribe((request: Data) => {
      this.server = request["server"];
      console.log(this.server);
      this.isActive = this.server.status === "active" ? true : false;
    });
  }
}
