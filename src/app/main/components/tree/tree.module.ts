import { FrmCadModule } from './../frm-cad/frm-cad.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from './../modal/modal.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeComponent } from './tree.component';
import { CategoriesFrmModule } from '../../modules/home/categories/categories-frm/categories-frm.module';

@NgModule({
  imports: [
    CommonModule,
    ModalModule,
    FormsModule,
    ReactiveFormsModule,
    CategoriesFrmModule
  ],
  declarations: [TreeComponent], exports: [TreeComponent]
})
export class TreeModule { }
