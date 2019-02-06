import {Component, Input, OnInit} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipeDetails: Recipe;
  constructor() { }

  ngOnInit() {
  }
}
