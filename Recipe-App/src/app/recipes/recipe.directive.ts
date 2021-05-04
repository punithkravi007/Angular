import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRecipe]',
})
export class RecipeDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter')
  selectRecipe(eventData: Event) {
    this.renderer.addClass(this.element.nativeElement, 'selected-recipe');
  }

  @HostListener('mouseleave')
  unSelectedRecipe(eventData: Event) {
    this.renderer.removeClass(this.element.nativeElement, 'selected-recipe');
  }
}
