import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

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

  @ViewChild('serverElementDescription') serverElementDescription : ElementRef;

  constructor() {}

  ngOnInit(): void {}

  addServer(
    serverElementName: HTMLInputElement,
  ) {
    this.createServerEvent.emit({
      serverName: serverElementName.value,
      serverDescription: this.serverElementDescription.nativeElement.value,
    });
  }

  addBlueprint(
    serverElementName: HTMLInputElement,
  ) {
    this.createBlueprintEvent.emit({
      blueprintName: serverElementName.value,
      blueprintDescription: this.serverElementDescription.nativeElement.value,
    });
  }
}
