import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProvidersComponent } from './providers.component';
import { ProvidersFrmComponent } from './providers-frm/providers-frm.component';

const routes: Routes = [
  {
    path: '', component: ProvidersComponent,
    children: [
      {path: 'frm', component: ProvidersFrmComponent},
      {path: 'frm/:id', component: ProvidersFrmComponent}
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProvidersRoutingModule { }
