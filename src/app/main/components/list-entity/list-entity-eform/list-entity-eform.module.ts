import { ListEntityModule } from './../list-entity.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEntityEformComponent } from './list-entity-eform.component';

@NgModule({
  imports: [
    CommonModule,
    ListEntityModule
  ],
  declarations: [ListEntityEformComponent], exports: [ListEntityEformComponent]
})
export class ListEntityEformModule { }
