import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-server-element',
  templateUrl: './create-server-element.component.html',
  styleUrls: ['./create-server-element.component.css'],
})
export class CreateServerElementComponent implements OnInit {
  @Output() createServerEvent = new EventEmitter<{
    serverName: string;
    serverDescription: string;
  }>();

  @Output() createBlueprintEvent = new EventEmitter<{
    blueprintName: string;
    blueprintDescription: string;
  }>();

  serverElementName: string;
  serverElementDescription: string;

  constructor() {}

  ngOnInit(): void {}
  addServer() {
    this.createServerEvent.emit({
      serverName: this.serverElementName,
      serverDescription: this.serverElementDescription,
    });
  }

  addBlueprint() {
    this.createBlueprintEvent.emit({
      blueprintName: this.serverElementName,
      blueprintDescription: this.serverElementDescription,
    });
  }
}
