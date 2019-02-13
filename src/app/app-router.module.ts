import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ErrorPageComponent} from './error-page/error-page.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'},
  {path: '**', component: ErrorPageComponent, data: {message: 'Page not found'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouterModule {
}
