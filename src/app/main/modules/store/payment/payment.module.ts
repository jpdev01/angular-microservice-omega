import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './payment.component';
import { CardModule } from '../card/card.module';

@NgModule({
  imports: [
    CommonModule,
    CardModule
  ],
  declarations: [PaymentComponent], exports:[PaymentComponent]
})
export class PaymentModule { }
