import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShoppingListComponent} from './shopping-list.component';
import {ShoppingEditComponent} from './shopping-edit/shopping-edit.component';
import {ShoppingListRouterModule} from './shopping-list-router.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations:[
    ShoppingListComponent,
    ShoppingEditComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ShoppingListRouterModule
  ]
})
export class ShoppingListModule {}
