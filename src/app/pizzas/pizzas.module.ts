import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListPizzaComponent} from "./list-pizza/list-pizza.component";
import {DetailsPizzaComponent} from "./details-pizza/details-pizza.component";
import {BorderCardDirective} from "../shared/directives/border-card.directive";
import {PizzaIngredientColorPipe} from "../shared/pipes/pizza-ingredient-color.pipe";
import { PizzaFormComponent } from './pizza-form/pizza-form.component';
import {FormsModule} from "@angular/forms";
import { PizzaEditComponent } from './pizza-edit/pizza-edit.component';



@NgModule({
  declarations: [
    ListPizzaComponent,
    BorderCardDirective,
    PizzaIngredientColorPipe,
    DetailsPizzaComponent,
    PizzaFormComponent,
    PizzaEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PizzasModule { }
