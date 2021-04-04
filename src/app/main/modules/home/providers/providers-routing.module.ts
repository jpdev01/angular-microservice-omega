import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProvidersListComponent } from './providers-list/providers-list.component';
import { ProvidersComponent } from './providers.component';

const routes: Routes = [
  {
    path: '', component: ProvidersComponent,
    children: [
      {path: '', component: ProvidersListComponent}
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProvidersRoutingModule { }
