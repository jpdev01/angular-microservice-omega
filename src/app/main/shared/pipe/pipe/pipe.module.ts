import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFilterPipe } from '../search-filter.pipe';
import { EnumKeyPipe } from '../enum-filter-key.pipe';



@NgModule({
  declarations: [SearchFilterPipe, EnumKeyPipe],
  imports: [
    CommonModule
  ],
  exports: [SearchFilterPipe, EnumKeyPipe]
})
export class PipeModule { }
