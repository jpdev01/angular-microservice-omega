import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { ListEntityModule } from 'src/app/main/components/list-entity/list-entity.module';


@NgModule({
  declarations: [CategoriesComponent, CategoriesListComponent],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    ListEntityModule
  ]
})
export class CategoriesModule { }
