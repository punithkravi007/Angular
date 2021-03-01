import { Injectable } from "@angular/core";
import { Server } from "./server.model";

@Injectable({
  providedIn: "root",
})
export class ServersService {
  activeServers: Server[] = [];
  inActiveServers: Server[] = [];

  addNewServer(server: Server) {
    this.activeServers.push(server);
  }

  getServerById(id: number, serverStatus: string) {
    if (serverStatus === "Active")
      return this.activeServers[id];
    else return this.inActiveServers[id];
  }

  toggleServerStatus(index: number, currentStatus: string) {
    if (currentStatus === "Active") {
      let server: Server = this.activeServers[index];
      this.activeServers.splice(index, 1);
      this.inActiveServers.push(server);
      console.log(server);
      console.log(this.inActiveServers);
    } else {
      let server: Server = this.inActiveServers[index];
      this.inActiveServers.splice(index, 1);
      this.activeServers.push(server);
    }
  }
}
