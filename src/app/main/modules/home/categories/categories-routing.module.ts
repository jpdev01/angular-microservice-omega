import { CategoriesInfoComponent } from './categories-info/categories-info.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProvidersListModule } from '../providers/providers-list/providers-list.module';
import { CategoriesFrmComponent } from './categories-frm/categories-frm.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { CategoriesComponent } from './categories.component';
import {CategoriesListModule} from './categories-list/categories-list.module';

const routes: Routes = [
  {
    path: '', component: CategoriesComponent,
    children: [
      { path: '', component: CategoriesListComponent },
      { path: 'info/:id', component: CategoriesInfoComponent },
      { path: 'frm', component: CategoriesFrmComponent },
      { path: 'frm/:id', component: CategoriesFrmComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), CategoriesListModule],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
