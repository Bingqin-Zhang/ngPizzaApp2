import { Component, OnInit } from '@angular/core';
import {Pizza} from "../../Pizza";
import {ActivatedRoute, Router} from "@angular/router";
import {PizzasService} from "../pizzas.service";

@Component({
  selector: 'app-details-pizza',
  templateUrl: './details-pizza.component.html',
  styleUrls: ['./details-pizza.component.scss']
})
export class DetailsPizzaComponent implements OnInit {
  pizzaToDisplayed: Pizza | undefined;
  listOfPizzas: Pizza[] | undefined;

  constructor(private router: Router, private route: ActivatedRoute, private pizzaService: PizzasService) { }

  ngOnInit(): void {
    // Récuperer le paramètre de la route associé à notre composant
    // Snapshot: récupérer le paramètre de manière asynchrone
    const retrievedIdFormURL = +this.route.snapshot.params['id'];
    this.listOfPizzas = this.pizzaService.getListPizzas();

    // Trouver la pizza dont l'identifiant correspond à celui
    // récupérée depuis l'URL
    this.pizzaToDisplayed = this.pizzaService.getSinglePizza(retrievedIdFormURL)

    //this.pizzaToDisplayed = this.listOfPizzas.find(pizza => pizza.id === retrievedIdFormURL)

    /*this.listOfPizzas.forEach(pizza => {
      if(pizza.id === retrievedIdFormURL){
         this.pizzaToDisplayed = pizza;
       }
    })*/
    console.log('pizzaToDisplay: ', this.pizzaToDisplayed)
  }

  // Revenir à la liste des pizzas après avoir consulté les détails d'une pizza
  goBack(): void
  {
    this.router.navigate(['/pizza']);
  }

  editPizza(pizzaToEdit: Pizza): void
  {
    const link = ['pizza/edit', pizzaToEdit.id];
    this.router.navigate(link);
  }

  deletePizza(selectedPizza: Pizza): void
  {
    const link = ['pizza', selectedPizza.id];
  }
}
