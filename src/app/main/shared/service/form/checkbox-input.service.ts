import { EventEmitter, Injectable } from '@angular/core';
declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class CheckboxInputService{
  onSelect = new EventEmitter<any>();

  getAllInHtml(){
    return $("input:checkbox");
  }

  getOnSelect(){
    return this.onSelect;
  }

  setOnSelect(event){
    this.onSelect.emit(event);
  }


}
