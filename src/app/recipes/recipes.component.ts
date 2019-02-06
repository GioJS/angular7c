import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipeDetails: { name: string; description: string; ingredients: Ingredient[] };
  constructor() { }

  ngOnInit() {
  }

  onReceiveDetails($event) {
    this.recipeDetails =  $event;
  }
}
