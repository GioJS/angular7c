import * as AppActions from './app.actions';

import * as fromShoppingList from '../shopping-list/store/shopping-list.reducers';
import * as fromAuth from '../auth/store/auth.reducers';
import {ActionReducerMap} from '@ngrx/store';
import {Action} from '@ngrx/store';

export interface AppState {
  shoppingState: fromShoppingList.State;
  auth: fromAuth.State;
}

export const reducers: ActionReducerMap<AppState> = {
  shoppingState: fromShoppingList.shoppingListReducers,
  auth: fromAuth.authReducers
};
