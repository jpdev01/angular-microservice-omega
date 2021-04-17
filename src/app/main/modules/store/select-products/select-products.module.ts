import { ListEntityModule } from './../../../components/list-entity/list-entity.module';
import { InputElementsModule } from './../../../components/form/input-elements/input-elements.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectProductsComponent } from './select-products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    InputElementsModule, FormsModule, ReactiveFormsModule, ListEntityModule
  ],
  declarations: [SelectProductsComponent], exports: [SelectProductsComponent]
})
export class SelectProductsModule { }
