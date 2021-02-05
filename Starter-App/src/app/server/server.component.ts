import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  
  isRunning : boolean = false;
  serverId: number;
  serverStatus: string = 'Running';

  constructor() {}

  ngOnInit(): void {}

  setServerId(event : Event){
    this.serverId = parseInt((<HTMLInputElement>event.target).value);
  }

  getServerStatus() {
    return this.isRunning ? "Running" : "Stopped";
  }

  toggleServerStatus(){
    this.isRunning = !this.isRunning;
  }
}
