import { ModalService } from './../../../shared/service/modal.service';
import { Component, Input, OnInit } from '@angular/core';
import { ModalInfo } from 'src/app/main/shared/model/modal-info.model';

@Component({
  selector: 'app-select-customer',
  templateUrl: './select-customer.component.html',
  styleUrls: ['./select-customer.component.css']
})
export class SelectCustomerComponent implements OnInit {
  @Input() customer;
  customerName;

  constructor(private modalService: ModalService) { }

  ngOnInit() {
    this.customerName = this.customer ? this.customer.name : '';
  }

  public openModal(field): void{
    this.modalService.setId('modal_customer');
    this.modalService.toggle();
  }

  public getModalInfo(): ModalInfo {
    return new ModalInfo({
      id: 'modal_customer',
      title: "Clientes",
      onSave: () =>{
        //registrar valor no formulario.
      }
    });
  }

  ngDoCheck(){
    if(this.customer){
      this.customerName = this.customer.name;
    }
  }

}
