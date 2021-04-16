import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellComponent } from './sell/sell.component';
import { SellModule } from './sell/sell.module';
import { StoreComponent } from './store.component';

const routes: Routes = [
  {
    path: '', component: StoreComponent,
    children: [
      { path: '', component: SellComponent }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes), SellModule],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
