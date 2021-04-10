import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RadioInputService{
  onSelect = new EventEmitter<any>();
  id = new EventEmitter<any>();

  emitSelected(event){
    this.onSelect.emit(event);
  }

  setId(id){
    this.id.emit(id);
  }

  getRadioEvent(){
    return this.onSelect;
  }

  getId(){
    return this.id;
  }

}
