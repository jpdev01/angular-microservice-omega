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
  serviceApi: any;
  element: any;
  labelConfig = {size: ''};


  constructor() { }

  ngOnInit() {
    console.log(this.frm);
    debugger;
    console.log(this.formModel);
    this.initComponentInfo();
  }

  initFormValues(): void {

  }

  initComponentInfo(): void {
    this.serviceApi = this.componentInfo.serviceApi;
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
    this.serviceApi.save(this.frm.value).subscribe(
      () => {},
      (error) => { console.log (error); }
      );
  }

  load(id: number): void{
    this.serviceApi.getById(id).subscribe(result => {
      this.element = result;
    });
  }

}
