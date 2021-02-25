import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appFontSizeDirective]',
})
export class FontSizeDirectiveDirective implements OnInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    
  }

  @HostListener('mouseenter')
  mouseover(eventData: Event) {
    this.renderer.addClass(this.elementRef.nativeElement, 'custom');
  }

  @HostListener('mouseleave')
  mouseleave(eventData: Event) {
    this.renderer.removeClass(this.elementRef.nativeElement, 'custom');
  }
}
