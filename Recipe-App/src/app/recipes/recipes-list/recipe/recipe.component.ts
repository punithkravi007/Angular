import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
})
export class RecipeComponent implements OnInit {
  @Input() recipe: any;
  @Output() displayRecipieEvent = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  showRecipieDetails() {
    this.displayRecipieEvent.emit();
  }
}
