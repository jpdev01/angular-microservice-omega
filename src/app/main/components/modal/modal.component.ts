import { ModalService } from './../../shared/service/modal.service';
import { NavbarService } from './../../shared/service/navbar.service';
import { Component, Input, OnInit } from '@angular/core';
import { ModalInfo} from '../../shared/model/modal-info.model';
declare var $: any;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  size = 'modal-xl';
  @Input() modalInfo: ModalInfo;

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
    if (this.modalInfo.size){
      this.size = this.modalInfo.size;
    }
  }

  public submit(){
    let onSave = this.modalInfo.onSave;
    if (onSave){
      onSave();
    }
    this.close();
  }

  public close(){
    this.modalService.toggle();
  }

}
