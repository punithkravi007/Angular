import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../ingredient/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredientList: any;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredientList = this.shoppingListService.ingredientList;
  }

  ngOnDestroy() {
    console.log('Destroying');
  }
  
}
