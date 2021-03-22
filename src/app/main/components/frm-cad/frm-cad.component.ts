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

    this.formModel.fields.forEach(group => {
      group.labelSize = "col-md-4";
    });

    this.formModel.fields.forEach((group) => {

      group.forEach(field => {
        let actualLabelSize = field.options.label.size;
        if (actualLabelSize) {
          let sizeOfField = actualLabelSize.substring(0, actualLabelSize.length - 1);
          if (group.labelSize) {
            if (sizeOfField > group.labelSize) {
              group.labelSize = sizeOfField;
            }
          } else {
            group.labelSize = sizeOfField;
          }


        }
      });


    });

  }

}
