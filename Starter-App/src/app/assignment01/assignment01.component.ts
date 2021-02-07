import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment01',
  templateUrl: './assignment01.component.html',
  styleUrls: ['./assignment01.component.css'],
})
export class Assignment01Component implements OnInit {
  assignmentName: string = 'Server Managment';
  servers: any = [];
  serverId: number | string;
  serverPort : number | string;
  serverDescription : string;

  constructor() {}

  ngOnInit(): void {}

  Server = function (id: number | string, isRunning: boolean, port : number|string, description : string) {
    this.id = id;
    this.isRunning = isRunning;
    this.port = port;
    this.description = description;

    this.getServerStatus = () => {
      return this.isRunning ? 'Running...' : 'Stopped';
    };

    this.toggleServerStatus = () => {
      this.isRunning = !this.isRunning;
    };
  };

  addServer() {
    let server: any = new this.Server(this.serverId, false, this.serverPort, this.serverDescription);
    this.servers.push(server);
    this.serverId = '';
  }
}
