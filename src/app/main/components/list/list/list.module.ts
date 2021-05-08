import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { PipeModule } from 'src/app/main/shared/pipe/pipe/pipe.module';

@NgModule({
  imports: [
    CommonModule,
    PipeModule
  ],
  declarations: [ListComponent], exports: [ListComponent]
})
export class ListModule { }
