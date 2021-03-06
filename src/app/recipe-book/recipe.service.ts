import { Injectable} from '@angular/core';
import {Recipe} from './recipe';
import {Ingredient} from '../shared/ingredient';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeChange = new Subject<Recipe[]>();
  private recipes: Recipe[] = [];
  // private recipes: Recipe[] = [
  //   new Recipe('A test Recipe', 'This is simply a test',
  //     'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
  //     [
  //       new Ingredient('Meat', 1),
  //       new Ingredient('Salad', 3)
  //     ]),
  //   new Recipe('BBQ', 'Summer Time Fun',
  //     'https://www.nps.gov/subjects/camping/images/recipe_1.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
  //     [
  //       new Ingredient('Pork', 2),
  //       new Ingredient('Peppers', 3)
  //     ]),
  //   new Recipe('Dessert', 'For that sweet tooth',
  //     'https://pixnio.com/free-images/2017/05/23/2017-05-23-17-26-29-900x428.jpg',
  //     [
  //       new Ingredient('Milk', 1),
  //       new Ingredient('Flower', 1),
  //       new Ingredient('Eggs', 1)
  //     ]
  //   ),
  //   new Recipe('A test Recipe', 'This is simply a test',
  //     'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
  //     [
  //       new Ingredient('Meat', 1),
  //       new Ingredient('Salad', 3)
  //     ]),
  // ];

  constructor(private shoppingListService: ShoppingListService) {
  }
  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipeChange.next(this.recipes.slice());
  }
  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
  addIngredientsToShoppingList(ingredientsToAdd: Ingredient[]) {
   this.shoppingListService.addIngredients(ingredientsToAdd);
  }
  getRecipe(index: number): Recipe {
    return this.recipes[index];
  }
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChange.next(this.recipes.slice());
  }
  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChange.next(this.recipes.slice());
  }
  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChange.next(this.recipes.slice());
  }
}
