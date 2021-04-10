import { Component, Input, OnInit } from '@angular/core';
import { ModalInfo} from '../../shared/model/modal-info.model';
declare var $: any;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  size = 'xl';
  @Input() modalInfo: ModalInfo;

  constructor() { }

  ngOnInit(): void {

  }

  public submit(){
    let onSave = this.modalInfo.onSave;
    onSave();
  }

}
