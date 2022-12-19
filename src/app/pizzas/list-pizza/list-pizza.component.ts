import { Component, OnInit } from '@angular/core';
import {Pizza} from "../../Pizza";
import {Router} from "@angular/router";
import {PizzasService} from "../pizzas.service";

@Component({
  selector: 'app-list-pizza',
  templateUrl: './list-pizza.component.html',
  styleUrls: ['./list-pizza.component.scss']
})
export class ListPizzaComponent implements OnInit {
  PIZZAS: Pizza[] | undefined;
  constructor(private route: Router, private pizzaService: PizzasService) { }

  ngOnInit(): void {
    this.PIZZAS= this.pizzaService.getListPizzas();
  }

  selectPizza(selectedPizza: Pizza): void
  {
    const link = ['pizza', selectedPizza.id];
    this.route.navigate(link);
  }
}
