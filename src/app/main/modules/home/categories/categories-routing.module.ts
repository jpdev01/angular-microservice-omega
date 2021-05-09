import { CategoriesInfoComponent } from './categories-info/categories-info.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesFrmComponent } from './categories-frm/categories-frm.component';
import { CategoriesComponent } from './categories.component';
import { CategoriesFrmModule } from './categories-frm/categories-frm.module';

const routes: Routes = [
  {
    path: '', component: CategoriesComponent,
    children: [
      { path: 'info/:id', component: CategoriesInfoComponent },
      { path: 'frm', component: CategoriesFrmComponent },
      { path: 'frm/:id', component: CategoriesFrmComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), CategoriesFrmModule],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
