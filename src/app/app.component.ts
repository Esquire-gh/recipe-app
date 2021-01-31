import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App Root!!!';
  showRecipeBook: boolean;
  showShoppingList: boolean;

  showFeature(eventData: {feature: string}) {
    switch (eventData.feature) {
      case 'recipe-book':
        this.showRecipeBook = true;
        this.showShoppingList = false;
        break;
      case 'shopping-list':
        this.showShoppingList = true;
        this.showRecipeBook = false;
      default:
        break;
    }

  }
}
