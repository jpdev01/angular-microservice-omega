import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RadioInputService{
  onSelect = new EventEmitter<any>();

  emitSelected(event){
    this.onSelect.emit(event);
  }

  getRadioEvent(){
    return this.onSelect;
  }

}
