import { CheckboxModule } from './../../form/checkbox/checkbox.module';
import { RadioModule } from './../../form/radio/radio.module';
import { PipeModule } from './../../../shared/pipe/pipe/pipe.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';

@NgModule({
  imports: [
    CommonModule,
    PipeModule,
    RadioModule,
    CheckboxModule
  ],
  declarations: [TableComponent], exports: [TableComponent]
})
export class TableModule { }
