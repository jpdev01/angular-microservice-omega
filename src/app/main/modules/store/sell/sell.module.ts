import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellComponent } from './sell.component';
import { InputElementsModule } from '../../../components/form/input-elements/input-elements.module';
import { ListEntityModule } from 'src/app/main/components/list-entity/list-entity.module';

@NgModule({
  declarations: [SellComponent],
  imports: [
    CommonModule,
    InputElementsModule, FormsModule, ReactiveFormsModule, ListEntityModule
  ]
})
export class SellModule { }
