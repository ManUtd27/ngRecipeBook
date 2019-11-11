import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  shoppingEditForm: FormGroup;
  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    this.shoppingEditForm = this.fb.group({
      name: [undefined, Validators.required],
      amount: [undefined, Validators.required]
    });
  }

  addItem() {
    alert(JSON.stringify(this.shoppingEditForm.value));
    this.shoppingEditForm.reset();
  }
}
