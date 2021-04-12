import { Component, OnInit, Input } from '@angular/core';
import { CheckboxInputService } from 'src/app/main/shared/service/form/checkbox-input.service';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {
  @Input() fieldEntity;
  @Input() id;
  @Input() name;

  constructor(
    private checkboxInputService: CheckboxInputService
  ) { }

  ngOnInit() {
    this.checkboxInputService.setOnInit(this.id);
  }

  public change(event){
    this.checkboxInputService.onSelect.emit(event);
  }

}
