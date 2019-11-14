import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [];
  constructor() { }

  ngOnInit() {
  }

  addToShoppingList(item: Ingredient) {
    this.ingredients.push(item);
  }

  onClearList() {
    this.ingredients = [];
  }
}
