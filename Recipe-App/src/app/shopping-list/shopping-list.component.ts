import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../ingredient/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {


  ingredientList : Ingredient[] = [
    new Ingredient("Apple", 10),
    new Ingredient("Orange", 20),
    new Ingredient("Carrot", 5),
    new Ingredient("Potato", 12)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
