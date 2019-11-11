import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeBookRoutingModule } from './recipe-book-routing.module';
import { RecipeBookComponent } from './recipe-book.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import {ClrDropdownModule} from '@clr/angular';


@NgModule({
  declarations: [RecipeBookComponent, RecipeListComponent, RecipeDetailComponent, RecipeItemComponent],
  imports: [
    CommonModule,
    RecipeBookRoutingModule,
    ClrDropdownModule
  ]
})
export class RecipeBookModule { }
