import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  isError: boolean = false;
  error: HttpErrorResponse;
  custom_error_message : string;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {}

  onError(error: HttpErrorResponse) {
    if (error != null) {
      this.isError = true;
      this.error = error;
      this.custom_error_message = error["custom_message"]
    }
  }
}
