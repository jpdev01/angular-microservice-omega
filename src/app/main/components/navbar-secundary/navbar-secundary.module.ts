import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarSecundaryComponent } from './navbar-secundary.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [NavbarSecundaryComponent],
  exports: [NavbarSecundaryComponent]
})
export class NavbarSecundaryModule { }
