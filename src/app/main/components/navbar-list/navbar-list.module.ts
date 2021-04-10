import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarListComponent } from './navbar-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [NavbarListComponent],
  exports: [NavbarListComponent]
})
export class NavbarListModule { }
