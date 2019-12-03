import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
id: number;
editMode = false;
recipeForm: FormGroup;
  constructor(private route: ActivatedRoute, public fb: FormBuilder, private recipeService: RecipeService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params.id;
        this.editMode = params.id != null;
        this.initForm();
      }
    );
  }
  private initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    const recipeIngredients = new FormArray([]);
    if (this.editMode) {
      const { name, imagePath, description, ingredients } = this.recipeService.getRecipe(this.id);
      recipeName = name;
      recipeImagePath = imagePath;
      recipeDescription = description;
      if (ingredients.length > 0) {
         ingredients.map((ingredient) => {
           recipeIngredients.push(
            new FormGroup({
              name: new FormControl(ingredient.name),
              amount: new FormControl(ingredient.amount)
            })
          );
         });
      }
    }
    this.recipeForm = this.fb.group({
      name: [recipeName, Validators.required],
      imagePath: [recipeImagePath, Validators.required],
      description: [recipeDescription, Validators.required],
      ingredients: recipeIngredients
    });
  }
  get controls() {
    return(this.recipeForm.get('ingredients') as FormArray).controls;
  }

  onSubmit() {

  }
}
