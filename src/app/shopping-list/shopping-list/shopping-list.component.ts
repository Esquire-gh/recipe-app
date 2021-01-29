import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../../common/models/ingredient.model'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor() {
    this.ingredients = [
      new Ingredient("Potato", 23),
      new Ingredient("Cassave", 14),
      new Ingredient("Salad", 56),
    ]
  }

  ngOnInit(): void {
  }

}
