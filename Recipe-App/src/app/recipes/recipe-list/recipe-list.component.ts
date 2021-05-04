import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  isLoading: boolean = false;
  @Output() errorEmitter: any = new EventEmitter();

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.recipeService.getRecipes().subscribe(
      (data) => {
        this.recipes = data;
        this.errorEmitter.emit(null);
        this.isLoading = false;
      },
      (error) => {
        let custom_message = 'Check your internet connection.';
        if (error.status == '401') {
          custom_message = 'You are not Authorized';
        }
        error['custom_message'] = 'Cannot Fetch Recipes,' + custom_message;
        this.errorEmitter.emit(error);
        this.isLoading = false;
      }
    );

    this.recipeService.recipesData.subscribe((data) => {
      this.recipes = data;
    });
  }
}
