import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesFrmComponent } from './categories-frm/categories-frm.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { CategoriesComponent } from './categories.component';

const routes: Routes = [
  {
    path: '', component: CategoriesComponent,
    children: [
      { path: '', component: CategoriesListComponent },
      { path: 'frm', component: CategoriesFrmComponent },
      { path: 'frm/:id', component: CategoriesFrmComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
