import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CheckboxInputService } from 'src/app/main/shared/service/form/checkbox-input.service';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {
  @Input() id;
  @Input() name;
  @Input() fieldEntity;
  checked = false;

  constructor(private checkboxInputService: CheckboxInputService) { }

  ngOnInit() {
  }

  emitValue($event){
    this.checkboxInputService.setOnSelect($event);
  }
}
