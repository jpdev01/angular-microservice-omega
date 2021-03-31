import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityInfoComponent } from './entity-info.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EntityInfoComponent],
  exports: [EntityInfoComponent]
})
export class EntityInfoModule { }
