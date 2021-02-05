import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment01',
  templateUrl: './assignment01.component.html',
  styleUrls: ['./assignment01.component.css']
})
export class Assignment01Component implements OnInit {

  assignmentName : string = "Server Managment";
  isRunning : boolean = false;
  serverId: number | string;
  serverStatus: string;
  isServerAdded : boolean = false;

  constructor() {}

  ngOnInit(): void {}

  getServerStatus() {
    return this.isRunning ? "Running..." : "Stopped!";
  }

  toggleServerStatus(){
    this.isRunning = !this.isRunning;
  }

  addOrRemoveServer(){
    this.serverId = this.isServerAdded ? "" : this.serverId;
    this.isServerAdded = !this.isServerAdded;
  }


}
