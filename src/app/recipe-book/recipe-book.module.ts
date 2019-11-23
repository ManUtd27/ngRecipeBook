import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeBookRoutingModule } from './recipe-book-routing.module';
import { RecipeBookComponent } from './recipe-book.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import {ClrDropdownModule} from '@clr/angular';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';


@NgModule({
  declarations: [RecipeBookComponent, RecipeListComponent, RecipeDetailComponent, RecipeItemComponent, RecipeStartComponent],
  imports: [
    CommonModule,
    RecipeBookRoutingModule,
    ClrDropdownModule,
    ScrollingModule
  ]
})
export class RecipeBookModule { }
