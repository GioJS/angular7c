import {Ingredient} from "../shared/ingredient.model";
import {EventEmitter} from '@angular/core';
import {Subject} from "rxjs";


export class ShoppingListService {
  private ingredients = [new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)];

  ingredientsEmitter = new Subject<Ingredient[]>();

  getIngredients() {
    return this.ingredients.slice();
  }


  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsEmitter.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsEmitter.next(this.ingredients.slice());
  }
}
