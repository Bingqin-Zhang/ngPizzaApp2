import { Component, OnInit } from '@angular/core';
import {PizzasService} from "../pizzas.service";
import {ActivatedRoute} from "@angular/router";
import {Pizza} from "../../Pizza";

@Component({
  selector: 'app-pizza-edit',
  templateUrl: './pizza-edit.component.html',
  styleUrls: ['./pizza-edit.component.scss']
})
export class PizzaEditComponent implements OnInit {
  singlePizza: Pizza | undefined;

  constructor(private route: ActivatedRoute, private pizzaService: PizzasService) { }

  ngOnInit(): void {
    const retrievedIdFormURL = +this.route.snapshot.params['id'];
    this.singlePizza = this.pizzaService.getSinglePizza(retrievedIdFormURL);
    console.log('Vous avez selectionné: ', this.singlePizza);
  }

}
