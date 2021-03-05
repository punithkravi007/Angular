import { EventEmitter, Injectable } from "@angular/core";
import { Server } from "./server.model";

@Injectable({
  providedIn: "root",
})
export class ServersService {
  serverId: number = 0;
  servers: Server[] = [];
  onServerChangeEvent = new EventEmitter<void>();

  addNewServer(server: Server) {
    server.id = this.serverId;
    this.servers.push(server);
    this.serverId += 1;
    this.onServerChangeEvent.emit();
  }

  getActiveServers() {
    return this.servers.filter((server: Server) => {
      return server.status == "active";
    });
  }

  getInActiveServers() {
    return this.servers.filter((server: Server) => {
      return server.status == "in-active";
    });
  }

  getServers(): Server[] {
    return this.servers;
  }

  toggleServerStatus(index: number, status: string) {
    this.servers[index].status = status;
    this.onServerChangeEvent.emit();
  }

  getServerById(index: number) {
    return this.servers.find((server: Server) => {
      return server.id == index;
    });
  }

  updateServerInfo(server: Server) {
    this.servers[server.id] = server;
  }
}
