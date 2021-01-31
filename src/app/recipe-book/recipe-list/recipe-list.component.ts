import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeItemSelected: EventEmitter<Recipe> = new EventEmitter()
  recipes: Recipe[];

  constructor() {
    this.recipes = [
      new Recipe("Fufu", "recipe for fufu", "https://www.telegraph.co.uk/content/dam/food-and-drink/2019/01/11/TELEMMGLPICT000185036503_trans_NvBQzQNjv4Bq8m3xuhMyFOjUOkuEnTdW-M-bhHwB87o-r13mliye62g.jpeg?imwidth=1400"),
      new Recipe("Banku", "recipe for Banku", "https://www.telegraph.co.uk/content/dam/food-and-drink/2019/01/11/TELEMMGLPICT000185036503_trans_NvBQzQNjv4Bq8m3xuhMyFOjUOkuEnTdW-M-bhHwB87o-r13mliye62g.jpeg?imwidth=1400"),
      new Recipe("Kenkey", "recipe for Keney", "https://www.telegraph.co.uk/content/dam/food-and-drink/2019/01/11/TELEMMGLPICT000185036503_trans_NvBQzQNjv4Bq8m3xuhMyFOjUOkuEnTdW-M-bhHwB87o-r13mliye62g.jpeg?imwidth=1400"),

    ]
  }

  ngOnInit(): void {
  }

  selectRecipeItemForDisplay(recipe: Recipe) {
    this.recipeItemSelected.emit(recipe)
  }

  addNewRecipe(){
    this.recipes.push(
      new Recipe("Fufu", "recipe for fufu", "https://www.telegraph.co.uk/content/dam/food-and-drink/2019/01/11/TELEMMGLPICT000185036503_trans_NvBQzQNjv4Bq8m3xuhMyFOjUOkuEnTdW-M-bhHwB87o-r13mliye62g.jpeg?imwidth=1400"),
    )
  }

}
