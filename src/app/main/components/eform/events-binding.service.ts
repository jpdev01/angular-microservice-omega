import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsBindingService {
  eventSave = new EventEmitter<boolean>();

  constructor() { }

  getEventSave(){
    return this.eventSave;
  }

  setEventSave(save: boolean){
    this.eventSave.emit(save);
  }

}
