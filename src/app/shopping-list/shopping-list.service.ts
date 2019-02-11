import {Ingredient} from "../shared/ingredient.model";
import {EventEmitter} from '@angular/core';
import {Subject} from "rxjs";


export class ShoppingListService {
  private ingredients = [new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)];

  ingredientsEmitter = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();


  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number): Ingredient {
    return this.ingredients[index];
  }

  updateIngredient(index: number, ingredient: Ingredient) {
    this.ingredients[index] = ingredient;
    this.ingredientsEmitter.next(this.ingredients.slice());
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsEmitter.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsEmitter.next(this.ingredients.slice());
  }

  deleteItem(editedItemIndex: number) {
    this.ingredients.splice(editedItemIndex, 1);
    this.ingredientsEmitter.next(this.ingredients.slice());
  }
}
