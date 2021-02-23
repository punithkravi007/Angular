import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-info',
  templateUrl: './recipes-info.component.html',
  styleUrls: ['./recipes-info.component.css']
})
export class RecipesInfoComponent implements OnInit {

  @Input() recipe : any;
  constructor() { }

  ngOnInit(): void {
  }

}
