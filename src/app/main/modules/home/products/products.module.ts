import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { NavbarSecundaryComponent } from 'src/app/main/components/navbar-secundary/navbar-secundary.component';
import { NavbarSecundaryModule } from 'src/app/main/components/navbar-secundary/navbar-secundary.module';
import { Utils } from 'src/app/main/shared/utils/Utils.model';
import { ProductsApiService } from 'src/app/main/shared/service/products-api.service';
import { PipeModule } from 'src/app/main/shared/pipe/pipe/pipe.module';
import { SearchFilterPipe } from 'src/app/main/shared/pipe/search-filter.pipe';
import { ProductListComponent } from './product-list/product-list.component';
import { FrmCadModule } from 'src/app/main/components/frm-cad/frm-cad.module';
import { ListEntityModule } from 'src/app/main/components/list-entity/list-entity.module';
import { EntityInfoModule } from 'src/app/main/components/entity-info/entity-info.module';
import { ProductFrmComponent } from './product-frm/product-frm.component';
import { ProductInfoComponent } from './product-info/product-info.component';


@NgModule({
  declarations: [ProductsComponent, ProductFrmComponent, ProductInfoComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    NavbarSecundaryModule,
    PipeModule,
    FrmCadModule,
    ListEntityModule,
    EntityInfoModule,
    FrmCadModule
  ],
  providers: [Utils, NavbarSecundaryComponent, ProductsApiService, SearchFilterPipe]
})
export class ProductsModule { }
