import {Component, Input, OnInit} from '@angular/core';
import {Pizza} from "../../Pizza";
import {Router} from "@angular/router";
import {PizzasService} from "../pizzas.service";

@Component({
  selector: 'app-pizza-form',
  templateUrl: './pizza-form.component.html',
  styleUrls: ['./pizza-form.component.scss']
})
export class PizzaFormComponent implements OnInit {
  ingredients: string[] | undefined;
  @Input() pizza: Pizza | undefined; // Propriété d'entrée

  constructor(private router: Router, private pizzaService: PizzasService) { }

  ngOnInit(): void {
    this.ingredients = this.pizzaService.getPizzaIngredients();
  }

  HasIngredient(ingredient: string): boolean {
    const index = this.pizza?.compositions?.indexOf(ingredient);
    // return (index !== -1)? true : false;
    return (index !== -1);
  }

  selectIngredient($event: any, ingredient: string): void {
    const checked = $event.target.checked;
    if (checked) {
      this.pizza?.compositions?.push(ingredient);
    } else {
      const index = this.pizza?.compositions?.indexOf(ingredient);
      if (index && index > -1) {
        this.pizza?.compositions?.splice(index, 1);
      }
    }
  }

  onSubmit(): void {
    console.log('Submit Form !');
    const link = ['/pizza', this.pizza?.id];
    this.router.navigate(link);
  }
}
