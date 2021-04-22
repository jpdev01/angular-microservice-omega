import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  eventSave = new EventEmitter<boolean>();

  constructor() { }

  setEventSave(){
    this.eventSave.emit(true);
  }

  getEventOnsave(){
    return this.eventSave;
  }


}
