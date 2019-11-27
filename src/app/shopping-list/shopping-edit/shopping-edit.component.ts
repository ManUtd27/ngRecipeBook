import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Ingredient} from '../../shared/ingredient';
import {ShoppingListService} from '../shopping-list.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  shoppingEditForm: FormGroup;
  subscription: Subscription;
  editMode = false;
  editItemIndex: number;
  editedItem: Ingredient;
  @Input() ingredientsLength;
  constructor(public fb: FormBuilder, private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.shoppingEditForm = this.fb.group({
      name: [undefined, Validators.required],
      amount: [undefined, Validators.required]
    });
    this.subscription = this.shoppingListService.startedEditing
      .subscribe((index: number) => {
        this.editMode = true;
        this.editItemIndex = index;
        this.editedItem = this.shoppingListService.getIngredient(this.editItemIndex);
        this.shoppingEditForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
      });
  }

  addItem() {
    const { name, amount } = this.shoppingEditForm.value;
    const newIngredient = new Ingredient(name, amount);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editItemIndex, newIngredient);
    } else {
      this.shoppingListService.addIngredient(newIngredient);
    }
    this.shoppingEditForm.reset();
  }

  onClearList() {
    this.shoppingListService.clearIngredients();
    this.shoppingEditForm.reset();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
