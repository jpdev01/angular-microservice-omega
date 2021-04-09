import { FrmCadModule } from 'src/app/main/components/frm-cad/frm-cad.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { ListEntityModule } from 'src/app/main/components/list-entity/list-entity.module';
import { CategoriesFrmComponent } from './categories-frm/categories-frm.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CategoriesComponent, CategoriesFrmComponent],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    ListEntityModule,
    FormsModule, ReactiveFormsModule, FrmCadModule
  ]
})
export class CategoriesModule { }
