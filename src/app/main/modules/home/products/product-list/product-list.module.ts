import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ListEntityModule } from "src/app/main/components/list-entity/list-entity.module";
import { PipeModule } from "src/app/main/shared/pipe/pipe/pipe.module";
import { SearchFilterPipe } from "src/app/main/shared/pipe/search-filter.pipe";
import { ProductsApiService } from "src/app/main/shared/service/products-api.service";
import { Utils } from "src/app/main/shared/utils/Utils.model";
import { ProductListComponent } from "./product-list.component";

@NgModule({
  declarations: [ProductListComponent],
  imports: [
    CommonModule,
    PipeModule,
    ListEntityModule
  ],
  providers: [Utils, ProductsApiService, SearchFilterPipe]
})
export class ProductsModule { }
