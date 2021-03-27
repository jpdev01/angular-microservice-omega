import { FormField } from './../../shared/model/form-field.model';
import { FormModel } from './../../shared/model/form-model.model';
import { Utils } from 'src/app/main/shared/utils/Utils.model';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ToastNotificationService } from '../../shared/service/toast-notification.service';
import { ToastNotification } from '../../shared/model/toast-notification.model';
import {States } from '../../shared/enum/states.enum';
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
  @Input() formModel: FormModel;
  serviceApi: any;
  element: any;
  labelConfig = {size: ''};


  onSave: any;


  constructor(private router: Router, public toastService: ToastNotificationService, private utils: Utils) { }

  ngOnInit() {
    console.log(this.frm);
    debugger;
    console.log(this.formModel);
    this.initComponentInfo();
    this.initForm();

  }

  initForm(): void {
    this.checkCustomFields();
  }

  initComponentInfo(): void {
    let componentInfo = this.componentInfo;
    this.serviceApi = componentInfo.serviceApi;
    this.onSave = componentInfo.onSave;
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
    let onSave = this.onSave;
    this.serviceApi.save(this.frm.value).subscribe(

      (sucess) => {
        let onSucess = onSave.onSucess;
        this.createToastNotification(onSucess.toast);
        onSucess.action();
      },

      (error) => {
        let onError = onSave.onError;
        this.createToastNotification(onError.toast);
        onError.action();
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

  private checkCustomFields(): void {
    let form = this.formModel;
    let groups = form.fields;

    for (let i = 0; i < groups.length; i++){
      groups[i].forEach(field => {
        if (field.type === "addrress") {
          groups[i] = this.initFieldsAddrress();
        }

      });
    }

  }

  private initFieldsAddrress(): any {
    let group = [];

    let field = new FormField({
      id: "cep",
      label: "CEP",
      type: "text"
    });
    group.push(field);
    field = new FormField({
      id: "uf",
      label: "Estado",
      type: "select",
      fields: States
    });
    group.push(field);
    field = new FormField({
      id: "city",
      label: "Cidade",
      type: "text"
    });
    group.push(field);
    field = new FormField({
      id: "neighborhood",
      label: "Bairro",
      type: "text"
    });
    group.push(field);
    field = new FormField({
      id: "publicPlace",
      label: "Endereço",
      type: "text"
    });
    group.push(field);
    field = new FormField({
      id: "complement",
      label: "Complemento",
      type: "text"
    });
    group.push(field);
    return group;
  }

}
