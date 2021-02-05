import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment02',
  templateUrl: './assignment02.component.html',
  styleUrls: ['./assignment02.component.css']
})
export class Assignment02Component implements OnInit {

  username : string;
  assignmentName : string = "User Managment";

  constructor() { }

  ngOnInit(): void {
  }

  clearUserName(){
    this.username = "";
  }

}
