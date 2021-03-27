import { PipeModule } from './../../shared/pipe/pipe/pipe.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEntityComponent } from './list-entity.component';

@NgModule({
  imports: [
    CommonModule,
    PipeModule
  ],
  declarations: [ListEntityComponent],
  exports: [ListEntityComponent]
})
export class ListEntityModule { }
