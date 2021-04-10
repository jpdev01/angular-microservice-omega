import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RadioInputService } from '../../../shared/service/form/radio-input.service';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent implements OnInit {
  @Input() id;
  @Input() fieldEntity;

  constructor(private radioInputService: RadioInputService) { }

  ngOnInit() {
    this.radioInputService.setId(this.id);
  }

  emitValue($event){
    this.radioInputService.emitSelected($event);
  }

}
