import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-frm-cad',
  templateUrl: './frm-cad.component.html',
  styleUrls: ['./frm-cad.component.css']
})
export class FrmCadComponent implements OnInit {

  @Input() frm: any;
  //@Input('frm') frm;
  @Input() componentInfo: any;
  @Input() formModel;
  service: any;
  element: any;
  labelConfig = {size: ''};


  constructor() { }

  ngOnInit() {
    console.log(this.frm);
    debugger;
    console.log(this.formModel);
    this.initComponentInfo();
    this.initConfig();
    this.configLabelSize();
  }

  initFormValues(): void {

  }

  initComponentInfo(): void {
    this.service = this.componentInfo.service;
  }

  private initConfig(): void {
    this.labelConfig = {size: "col-sm-4"};
  }

  public cancel(): void {
    // this.dialogRef.close();
    this.frm.reset();
  }

  public isEditing(): boolean {
    // return this.formFromEditing;
    return false;
  }

  save(): void {
    this.service.saveUser(this.frm.value).subscribe(
      () => {},
      (error) => { console.log (error); }
      );
  }

  load(id: number): void{
    this.service.getById(id).subscribe(result => {
      this.element = result;
    });
  }

  private configLabelSize(): void {

    let groups = this.formModel.fields;

    groups.forEach(group => {
      group.config.label = "col-md-4";
    });

    for (let i = 0; i <= groups.length; i++) {
      let labelSizeOfGroup;

      if (groups[i].configs.label) {
        labelSizeOfGroup = groups[i].config.label.size;
      }

      let fieldGroupSize;
      for (let posField = 0; posField <= groups.fields.length; posField++) {

      }
    }

  }


}
