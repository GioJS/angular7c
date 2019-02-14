import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs';


export class ShoppingListService {
  private ingredients = [new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)];

  startedEditing = new Subject<number>();


  getIngredient(index: number): Ingredient {
    return this.ingredients[index];
  }
}
