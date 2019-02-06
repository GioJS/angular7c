import {Ingredient} from "../shared/ingredient.model";
import {EventEmitter} from '@angular/core';


export class ShoppingListService {
  private ingredients = [new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)];

  ingredientsEmitter = new EventEmitter<void>();

  getIngredients() {
    return this.ingredients.slice();
  }


  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsEmitter.emit();
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsEmitter.emit();
  }
}
