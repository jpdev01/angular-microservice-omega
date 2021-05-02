import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EformComponent } from './eform.component';
import { HeaderModule } from '../header/header.module';
import { PipeModule } from 'src/app/main/shared/pipe/pipe/pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderModule,
    PipeModule
  ],
  declarations: [EformComponent], exports: [EformComponent]
})
export class EformModule { }
