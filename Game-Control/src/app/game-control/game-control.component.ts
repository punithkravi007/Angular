import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit {
  @Output() startGameEvent = new EventEmitter<number>();

  currentValue: number = 0;
  interval: any;

  constructor() {}

  ngOnInit(): void {}

  startGame() {
    this.interval = setInterval(() => {
      this.startGameEvent.emit(this.currentValue);
      this.currentValue += 1;
    }, 2000);
  }

  endGame() {
    clearInterval(this.interval);
  }
}
