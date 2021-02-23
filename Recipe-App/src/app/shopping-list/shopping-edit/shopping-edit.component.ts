import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/ingredient/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('ingredientName') name: any;
  @ViewChild('ingredientQuantity') quantity: any;
  @Output() addIngredientEvent = new EventEmitter<Ingredient>();

  constructor() {}

  ngOnInit(): void {}

  addIngredient() {
    const ingredient = new Ingredient(
      this.name.nativeElement.value,
      this.quantity.nativeElement.value
    );
    this.addIngredientEvent.emit(ingredient);
  }
}
