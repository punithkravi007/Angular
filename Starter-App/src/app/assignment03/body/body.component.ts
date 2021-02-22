import { 
Component, 
OnChanges, 
OnInit
} from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit{
  serverList = [];
  blueprintList = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  addServer(event: { serverName: string; serverDescription: string }) {
    this.serverList.push({
      serverName: event.serverName,
      serverDescription: event.serverDescription,
    });
  }

  addBlueprint(event: { blueprintName: string; blueprintDescription: string }) {
    this.blueprintList.push({
      serverName: event.blueprintName,
      serverDescription: event.blueprintDescription,
    });
  }
}
