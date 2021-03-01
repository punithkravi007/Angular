import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Server } from "../server.model";
import { ServersService } from "../servers.service";

@Component({
  selector: "app-create-servers",
  templateUrl: "./create-servers.component.html",
  styleUrls: ["./create-servers.component.css"],
})
export class CreateServersComponent implements OnInit, OnDestroy {
  @ViewChild("serverName") serverName: ElementRef;
  @ViewChild("serverDescription") serverDescription: ElementRef;

  constructor(
    private serverService: ServersService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  ngOnDestroy() {
    console.log("Server Component is Destroyed");
  }

  addNewServer() {
    this.serverService.addNewServer(
      new Server(
        this.serverName.nativeElement.value,
        this.serverDescription.nativeElement.value
      )
    );
  }

  reloadServers() {
    this.router.navigate(["/servers"], { relativeTo: this.route });
  }
}
