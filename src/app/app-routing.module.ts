import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListPizzaComponent} from "./pizzas/list-pizza/list-pizza.component";
import {DetailsPizzaComponent} from "./pizzas/details-pizza/details-pizza.component";
import {PageNotFoundComponent} from "./shared/page-not-found/page-not-found.component";
import {PizzaFormComponent} from "./pizzas/pizza-form/pizza-form.component";
import {PizzaEditComponent} from "./pizzas/pizza-edit/pizza-edit.component";

const routes: Routes = [
  {path: 'pizza', component: ListPizzaComponent},
  {path: 'pizza/edit/:id', component: PizzaEditComponent},
  {path: 'pizza/:id', component: DetailsPizzaComponent},
  {path: '', redirectTo: 'pizza', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
