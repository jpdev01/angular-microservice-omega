import { FormControl, FormGroup } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RadioInputService } from '../../../shared/service/form/radio-input.service';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent implements OnInit {
  @Input() id;
  @Input() name;
  @Input() fieldEntity;
  @Input() eform: FormGroup;

  constructor(private radioInputService: RadioInputService) { }

  ngOnInit() {
    this.radioInputService.setId(this.id);
    this.initOnFrm();
  }

  emitValue($event){
    this.radioInputService.emitSelected($event);
  }

  private initOnFrm(): void{
    this.eform.addControl(this.id, new FormControl(''));
  }

}
