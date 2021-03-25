import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ToastNotificationService } from '../../shared/service/toast-notification.service';
declare var $:any;

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
  onSave: any;


  constructor(private router: Router) { }

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
    this.onSave = this.componentInfo.onSave;
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
      (sucess ) => {
        this.createToastNotification();
        this.onSave.onSucess();
      },
      (error) => { console.log (error); }
      );
  }

  load(id: number): void{
    this.serviceApi.getById(id).subscribe(result => {
      this.element = result;
    });
  }

  private createToastNotification(): void {
    let options = {
      text: "oi",
      title: "eae"
    };
    new ToastNotificationService(options);
  }

}
