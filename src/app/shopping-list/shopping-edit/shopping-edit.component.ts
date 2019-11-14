import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Ingredient} from '../../shared/ingredient';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  shoppingEditForm: FormGroup;
  @Output() addListItem: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();
  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    this.shoppingEditForm = this.fb.group({
      name: [undefined, Validators.required],
      amount: [undefined, Validators.required]
    });
  }

  addItem() {
    const { name, amount } = this.shoppingEditForm.value;
    this.addListItem.emit(new Ingredient(name, amount));
    this.shoppingEditForm.reset();
  }
}
