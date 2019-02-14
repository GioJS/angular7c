import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import * as ShoppingListActions from '../store/shopping-list.actions';
import * as fromApp from '../../store/app.reducers';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') form: NgForm;
  editMode = false;
  editedItem: Ingredient;
  private subscription: Subscription;

  constructor(private store: Store<fromApp.AppState>) {
  }

  ngOnInit() {
    this.subscription = this.store.select('shoppingList').subscribe((state: fromApp.AppState) => {
      if (state.shoppingState.editedIngredientIndex > -1) {
        this.editedItem = state.shoppingState.editedIngredient;
        this.editMode = true;
        this.form.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
      } else {
        this.editMode = false;
      }
    });
  }

  onNewItem(form: NgForm) {
    if (this.editMode) {
      this.store.dispatch(new ShoppingListActions.UpdateIngredient({
        ingredient: new Ingredient(form.value.name, form.value.amount)
      }));
    } else {
      this.store.dispatch(new ShoppingListActions.AddIngredient(new Ingredient(form.value.name, form.value.amount)));
    }
    this.editMode = false;
    this.form.reset();
  }


  onClear() {
    this.form.reset();
    this.editMode = false;
  }

  onDelete() {
    this.store.dispatch(new ShoppingListActions.DeleteIngredient());
    this.form.reset();
    this.editMode = false;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.store.dispatch(new ShoppingListActions.StopEdit());
  }
}
