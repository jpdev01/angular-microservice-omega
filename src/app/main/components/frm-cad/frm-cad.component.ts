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
  service: any;

  constructor() { }

  ngOnInit() {
    console.log(this.frm);
    this.initComponentInfo();
  }

  initFormValues(): void {

  }

  initComponentInfo(): void {
    this.service = this.componentInfo.service;
  }

  cancel(): void {
    // this.dialogRef.close();
    this.frm.reset();
  }

  isEditing(): boolean {
    // return this.formFromEditing;
    return false;
  }

  save(): void {
    this.service.saveUser(this.frm.value).subscribe(
      () => {},
      (error) => { console.log (error); }
      );
  }

}
