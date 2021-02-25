import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css'],
})
export class StructuralDirectivesComponent implements OnInit {
  numbers: number[] = [1, 2, 3, 4, 5];
  isServerRunning : boolean = false;
  isCollapsed : boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
