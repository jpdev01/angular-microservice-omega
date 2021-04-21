import { FrmCadModule } from './../../../../components/frm-cad/frm-cad.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoriesFrmComponent } from './categories-frm.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [CategoriesFrmComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FrmCadModule
  ], exports: [CategoriesFrmComponent]
})
export class CategoriesFrmModule { }
