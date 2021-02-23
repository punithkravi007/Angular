import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../ingredient/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredientList: Ingredient[] = [];

  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(){
    console.log("Destroying");
    
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredientList.push(ingredient);
  }
}
