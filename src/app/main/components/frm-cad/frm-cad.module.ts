import { PipeModule } from 'src/app/main/shared/pipe/pipe/pipe.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrmCadComponent } from './frm-cad.component';
import { EnumKeyPipe } from '../../shared/pipe/enum-filter-key.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PipeModule
  ],
  declarations: [FrmCadComponent],
  exports: [FrmCadComponent],
  providers: [EnumKeyPipe]
})
export class FrmCadModule { }
