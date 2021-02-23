import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() toggleScreenEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  toggleScreen(feature: string) {
    this.toggleScreenEvent.emit(feature);
  }
}
