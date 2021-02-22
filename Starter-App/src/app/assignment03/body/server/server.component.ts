import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  @Input('serverElement') server: {
    serverName: string;
    serverDescription: string;
  };

  constructor() {
    console.log('Constructor is called!');
  }

  ngOnInit(): void {
    console.log(
      `ngOnInit() is called! -
      This is called soon after the constructor is invoked i.e as soon as the component is instantiated`
    );
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges() is called!');
    console.log(changes);
  }

  ngDoCheck() {
    console.log('ngDoCheck() is called!');
  }

  ngAfterContentInit() {}
  
  ngAfterContentChecked() {}

  ngAfterViewChecked() {}

  ngAfterViewInit() {}

  ngOnDestroy(){}
}
