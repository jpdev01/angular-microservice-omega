import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  @Input() eform: FormGroup;
  checked = false;

  constructor(
    private checkboxInputService: CheckboxInputService
  ) { }

  ngOnInit() {
    this.checkboxInputService.setOnInit(this.id);
    this.initOnFrm();
  }

  public change(event){
    this.checkboxInputService.onSelect.emit(event);
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
