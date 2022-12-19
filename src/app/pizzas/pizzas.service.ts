import { Injectable } from '@angular/core';
import {Pizza} from "../Pizza";
import {LIST_PIZZAS} from "../shared/list.pizza";

@Injectable({
  providedIn: 'root'
})
export class PizzasService {

  constructor() { }

  /**
  * Récupérer la liste des pizzas
  */
   getListPizzas(): Pizza[] {
    return LIST_PIZZAS;
  }
  /**
  * Retourne une pizza à partir de l'identifiant passé en paraamètre
  *@param id
   */
  getSinglePizza(id: number): Pizza | undefined{
    return this.getListPizzas().find(pizza => pizza.id === id);
  }

  getPizzaIngredients(): string[] {
    return ['S. tomate', 'v. kebab', 'roquette', 'piments','miel', 'C. fraîche', 'v. hachée', 'S.barbecue', 'champignons',
      'merguez', 'mozzarella', 'oignons'];
  }
}
