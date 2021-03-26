import { Utils } from 'src/app/main/shared/utils/Utils.model';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ToastNotificationService } from '../../shared/service/toast-notification.service';
import { ToastNotification } from '../../shared/model/toast-notification.model';
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
  toastOnSucess: ToastNotification;
  toastOnError: ToastNotification;


  constructor(private router: Router, public toastService: ToastNotificationService, private utils: Utils) { }

  ngOnInit() {
    console.log(this.frm);
    debugger;
    console.log(this.formModel);
    this.initComponentInfo();
  }

  initFormValues(): void {

  }

  initComponentInfo(): void {
    let componentInfo = this.componentInfo;
    this.serviceApi = componentInfo.serviceApi;
    this.onSave = componentInfo.onSave;
    this.toastOnSucess = componentInfo.toastOnSucess;
    this.toastOnError = componentInfo.toastOnError;
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
        this.createToastNotification(this.toastOnSucess);
        this.onSave.onSucess();
      },
      (error) => {
        this.createToastNotification(this.toastOnSucess);
       }
      );
  }

  load(id: number): void{
    this.serviceApi.getById(id).subscribe(result => {
      this.element = result;
    });
  }

  private createToastNotification(toast: ToastNotification): void {
    this.toastService.create(toast);
    this.toastService.show();
  }

}
