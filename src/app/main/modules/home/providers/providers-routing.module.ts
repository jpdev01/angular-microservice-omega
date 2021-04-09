import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProvidersListComponent } from './providers-list/providers-list.component';
import { ProvidersComponent } from './providers.component';
import { ProvidersFrmComponent } from './providers-frm/providers-frm.component';
import {ProvidersListModule} from './providers-list/providers-list.module';

const routes: Routes = [
  {
    path: '', component: ProvidersComponent,
    children: [
      { path: '', component: ProvidersListComponent},
      {path: 'frm', component: ProvidersFrmComponent},
      {path: 'frm/:id', component: ProvidersFrmComponent}
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes), ProvidersListModule],
  exports: [RouterModule]
})
export class ProvidersRoutingModule { }
