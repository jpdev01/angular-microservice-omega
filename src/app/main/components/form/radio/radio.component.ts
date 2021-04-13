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
  checked = false;

  constructor(private radioInputService: RadioInputService) { }

  ngOnInit() {
    this.radioInputService.setId(this.name);
    this.initOnFrm();
  }

  emitValue($event){
    this.radioInputService.emitSelected($event);
  }

  private initOnFrm(): void{
    let selected = this.eform.get(this.id);
    if (selected){
      // existe na entidade.
      this.checked = true;
    } else {
      this.eform.addControl(this.id, new FormControl(''));
    }
  }

}
