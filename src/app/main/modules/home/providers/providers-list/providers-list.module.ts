import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListEntityModule } from './../../../../components/list-entity/list-entity.module';
import { ListEntityEformModule } from './../../../../components/list-entity/list-entity-eform/list-entity-eform.module';
import { CommonModule } from '@angular/common';
import { ProvidersListComponent } from './providers-list.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [ProvidersListComponent],
  imports: [
    CommonModule,
    ListEntityModule,
    FormsModule,
    ReactiveFormsModule,
    ListEntityEformModule
  ],
  exports: [ProvidersListComponent]
})
export class ProvidersListModule { }
