import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListEntityModule } from './../../../../components/list-entity/list-entity.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CategoriesListComponent } from './categories-list.component';
import { ListEntityEformModule } from 'src/app/main/components/list-entity/list-entity-eform/list-entity-eform.module';


@NgModule({
  declarations: [CategoriesListComponent],
  imports: [
    CommonModule,
    ListEntityModule,
    FormsModule,
    ReactiveFormsModule,
    ListEntityEformModule
  ],
  exports: [CategoriesListComponent]
})
export class CategoriesListModule { }
