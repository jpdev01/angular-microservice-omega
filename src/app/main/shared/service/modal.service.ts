import { Injectable } from '@angular/core';
declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  modalId = "onroadModal";

  constructor() { }

  public toggle(): void {
    $('#'+this.modalId).modal('toggle');
  }
}
