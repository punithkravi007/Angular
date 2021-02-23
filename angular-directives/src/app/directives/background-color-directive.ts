import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[customBackgroundColor]',
})
export class BackgroundColorCustomDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
    this.elementRef.nativeElement.style.padding = '10px';
    this.elementRef.nativeElement.style.color = 'white';
  }
}
