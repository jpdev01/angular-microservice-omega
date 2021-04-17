import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellComponent } from './sell.component';
import { InputElementsModule } from '../../../components/form/input-elements/input-elements.module';
import { SelectProductsModule } from '../select-products/select-products.module';

@NgModule({
  declarations: [SellComponent],
  imports: [
    CommonModule,
    SelectProductsModule
  ]
})
export class SellModule { }
