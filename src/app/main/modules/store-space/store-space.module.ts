import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreSpaceRoutingModule } from './store-space-routing.module';
import { StoreSpaceComponent } from './store-space.component';


@NgModule({
  declarations: [StoreSpaceComponent],
  imports: [
    CommonModule,
    StoreSpaceRoutingModule
  ]
})
export class StoreSpaceModule { }
