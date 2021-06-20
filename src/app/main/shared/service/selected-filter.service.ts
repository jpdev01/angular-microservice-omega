import { EventEmitter, Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class SelectedFilterService {
    selectTed: any;
    static onSelectEmitter = new EventEmitter<any>();

    constructor() { }
    

    set(selectTed: any): void{
        this.selectTed = selectTed;
        SelectedFilterService.onSelectEmitter.emit(selectTed);
    }

    public get() {
        return SelectedFilterService.onSelectEmitter;
      }
}
