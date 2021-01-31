import { Component, ElementRef, OnInit, Output, ViewChild,EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/common/models/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('itemName') itemName: ElementRef;
  @ViewChild('itemAmount') itemAmount: ElementRef;
  @Output() newIngredientAdded: EventEmitter<Ingredient> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    let shoppingListItem: Ingredient = new Ingredient(
      this.itemName.nativeElement.value, 
      this.itemAmount.nativeElement.value
    )
    this.newIngredientAdded.emit(shoppingListItem)
  }

}
