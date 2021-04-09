import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListEntityModule } from './../../../../components/list-entity/list-entity.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CategoriesListComponent } from './categories-list.component';


@NgModule({
  declarations: [CategoriesListComponent],
  imports: [
    CommonModule,
    ListEntityModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [CategoriesListComponent]
})
export class CategoriesListModule { }
