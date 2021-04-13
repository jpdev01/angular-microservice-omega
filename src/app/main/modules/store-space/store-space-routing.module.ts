import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreSpaceComponent } from './store-space.component';

const routes: Routes = [{ path: '', component: StoreSpaceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreSpaceRoutingModule { }
