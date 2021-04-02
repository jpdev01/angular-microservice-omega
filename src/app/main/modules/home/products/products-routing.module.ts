import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { SearchFilterPipe } from '../../../shared/pipe/search-filter.pipe';
import { CommonModule } from '@angular/common';
import { ProductFrmComponent } from './product-frm/product-frm.component';

const routes: Routes = [
  {
    path: '', component: ProductsComponent,
    children: [
      { path: '', component: ProductListComponent },
      { path: 'info/:id', component: ProductInfoComponent },
      { path: 'frm', component: ProductFrmComponent },
      { path: 'frm/:id', component: ProductFrmComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
