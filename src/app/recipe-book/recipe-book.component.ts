import { Component, OnInit } from '@angular/core';
import {Recipe} from './recipe';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css']
})
export class RecipeBookComponent implements OnInit {

  itemDetail: Recipe;
  constructor() { }

  ngOnInit() {
  }
onSelectedItem(item: Recipe) {
    this.itemDetail = item;
}

}
