import { EventEmitter, Injectable } from '@angular/core';
import { ModalInfo } from '../model/modal-info.model';
declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  modalId = "onroadModal";
  modalEmitter = new EventEmitter<ModalInfo>();

  constructor() { }

  public toggle(): void {
    $('#' + this.modalId).modal('toggle');
  }

  public setId(id: string) {
    this.modalId = id;
  }

  public instance(modal: ModalInfo) {
    this.modalEmitter.emit(modal);
  }

  getInstance() {
    return this.modalEmitter;
  }
}
