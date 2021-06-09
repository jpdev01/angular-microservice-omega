import { TreeModule } from './../../tree/tree.module';
import { TableModule } from '../table/table.module';
import { HeaderModule } from '../header/header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { PipeModule } from 'src/app/main/shared/pipe/pipe/pipe.module';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    TableModule,
    TreeModule
  ],
  declarations: [ListComponent], exports: [ListComponent]
})
export class ListModule { }
