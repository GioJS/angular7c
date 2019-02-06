import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe[] = [ new Recipe('A test recipe', 'this is a simply test', 'https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco,c_fill,g_auto,w_960/https://storage.googleapis.com/gen-atmedia/3/2018/06/d83512a0fe4e2d338f89ccde0c5de227646921cf.jpeg'),
    new Recipe('A test recipe', 'this is a simply test', 'https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco,c_fill,g_auto,w_960/https://storage.googleapis.com/gen-atmedia/3/2018/06/d83512a0fe4e2d338f89ccde0c5de227646921cf.jpeg')];
  constructor() { }

  ngOnInit() {
  }

}
