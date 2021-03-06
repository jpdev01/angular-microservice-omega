import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Utils } from './../../shared/utils/Utils.model';
import { PipeModule } from './../../shared/pipe/pipe/pipe.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEntityComponent } from './list-entity.component';
import { RadioModule } from '../form/radio/radio.module';
import { CheckboxModule } from '../form/checkbox/checkbox.module';

@NgModule({
  imports: [
    CommonModule,
    PipeModule,
    RadioModule,
    CheckboxModule
  ],
  declarations: [ListEntityComponent],
  providers: [Utils],
  exports: [ListEntityComponent]
})
export class ListEntityModule { }
