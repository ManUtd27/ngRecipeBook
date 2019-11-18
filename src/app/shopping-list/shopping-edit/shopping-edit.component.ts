import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Ingredient} from '../../shared/ingredient';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  shoppingEditForm: FormGroup;
  @Input() ingredientsLength;
  constructor(public fb: FormBuilder, private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.shoppingEditForm = this.fb.group({
      name: [undefined, Validators.required],
      amount: [undefined, Validators.required]
    });
  }

  addItem() {
    const { name, amount } = this.shoppingEditForm.value;
    this.shoppingListService.addIngredient(new Ingredient(name, amount));
    this.shoppingEditForm.reset();
  }

  onClearList() {
    this.shoppingListService.clearIngredients();
    this.shoppingEditForm.reset();
  }
}
