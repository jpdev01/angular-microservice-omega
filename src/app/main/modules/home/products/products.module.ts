import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { NavbarListModule } from 'src/app/main/components/navbar-list/navbar-list.module';
import { Utils } from 'src/app/main/shared/utils/Utils.model';
import { ProductsApiService } from 'src/app/main/shared/service/api/products-api.service';
import { PipeModule } from 'src/app/main/shared/pipe/pipe/pipe.module';
import { SearchFilterPipe } from 'src/app/main/shared/pipe/search-filter.pipe';
import { ProductListComponent } from './product-list/product-list.component';
import { FrmCadModule } from 'src/app/main/components/frm-cad/frm-cad.module';
import { ListEntityModule } from 'src/app/main/components/list-entity/list-entity.module';
import { EntityInfoModule } from 'src/app/main/components/entity-info/entity-info.module';
import { ProductFrmComponent } from './product-frm/product-frm.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { TreeModule } from '../../../components/tree/tree.module';


@NgModule({
  declarations: [ProductsComponent, ProductFrmComponent, ProductInfoComponent, ProductListComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    NavbarListModule,
    PipeModule,
    FrmCadModule,
    ListEntityModule,
    EntityInfoModule,
    FrmCadModule,
    TreeModule
  ],
  providers: [Utils, ProductsApiService, SearchFilterPipe]
})
export class ProductsModule { }
