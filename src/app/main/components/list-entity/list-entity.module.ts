import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Utils } from './../../shared/utils/Utils.model';
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
  providers: [Utils],
  exports: [ListEntityComponent]
})
export class ListEntityModule { }
