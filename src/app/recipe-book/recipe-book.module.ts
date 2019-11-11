import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeBookRoutingModule } from './recipe-book-routing.module';
import { RecipeBookComponent } from './recipe-book.component';


@NgModule({
  declarations: [RecipeBookComponent],
  imports: [
    CommonModule,
    RecipeBookRoutingModule
  ]
})
export class RecipeBookModule { }
