import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingListRoutingModule } from './shopping-list-routing.module';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import {ClrCommonFormsModule, ClrInputModule} from '@clr/angular';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [ShoppingListComponent, ShoppingEditComponent],
  imports: [
    CommonModule,
    ShoppingListRoutingModule,
    ClrCommonFormsModule,
    ReactiveFormsModule,
    ClrInputModule
  ]
})
export class ShoppingListModule { }
