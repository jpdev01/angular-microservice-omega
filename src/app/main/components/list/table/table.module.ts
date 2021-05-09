import { PipeModule } from './../../../shared/pipe/pipe/pipe.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';

@NgModule({
  imports: [
    CommonModule,
    PipeModule
  ],
  declarations: [TableComponent], exports: [TableComponent]
})
export class TableModule { }
