import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is simply a test',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
    new Recipe('BBQ', 'Summer Time Fun',
      'https://www.nps.gov/subjects/camping/images/recipe_1.jpg?maxwidth=1200&maxheight=1200&autorotate=false'),
    new Recipe('Dessert', 'For that sweet tooth',
      'https://pixnio.com/free-images/2017/05/23/2017-05-23-17-26-29-900x428.jpg'
    ),
    new Recipe('A test Recipe', 'This is simply a test',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
  ];

  constructor() {
  }
  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
}
