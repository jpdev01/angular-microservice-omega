import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreSpaceRoutingModule } from './store-space-routing.module';
import { StoreSpaceComponent } from './store-space.component';
import { TextFieldModule } from '../../components/form/text-field/text-field.module';


@NgModule({
  declarations: [StoreSpaceComponent],
  imports: [
    CommonModule,
    StoreSpaceRoutingModule,
    TextFieldModule
  ]
})
export class StoreSpaceModule { }
