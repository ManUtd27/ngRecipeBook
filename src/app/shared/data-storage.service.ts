import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RecipeService} from '../recipe-book/recipe.service';
import {Recipe} from '../recipe-book/recipe';
import {exhaustMap, map, take, tap} from 'rxjs/operators';
import {AuthService} from '../dashboard/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: HttpClient,
              private recipeService: RecipeService,
              private authService: AuthService) { }
  storeRecipes() {
    const recipes: Recipe[] = this.recipeService.getRecipes();
    this.http.put<Recipe[]>('https://ng-recipe-book-cf67b.firebaseio.com/recipes.json', recipes )
        .subscribe( response => console.log('Storing Recipes: ', response));
  }
  fetchRecipes() {
    return this.http.get<Recipe[]>(`https://ng-recipe-book-cf67b.firebaseio.com/recipes.json`).pipe(
      map( recipes => {
        return recipes.map( recipe => {
          return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []};
        });
      }),
      tap( recipes => {
        console.log('Getting Recipes: ', recipes);
        this.recipeService.setRecipes(recipes);
      })
    ); }
}
