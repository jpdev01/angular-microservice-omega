import { FormGroupSerializer } from './../../shared/model/form-group-serializer.model';
import { FormField } from './../../shared/model/form-field.model';
import { FormSerializer } from '../../shared/model/form-serializer.model';
import { Utils } from 'src/app/main/shared/utils/Utils.model';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ToastNotificationService } from '../../shared/service/toast-notification.service';
import { ToastNotification } from '../../shared/model/toast-notification.model';
import {States } from '../../shared/enum/states.enum';
import {AddressService} from '../../shared/service/address.service';
import { FormGroup } from '@angular/forms';
import { Mask } from '../../shared/model/mask.model';
declare var $:any;

@Component({
  selector: 'app-frm-cad',
  templateUrl: './frm-cad.component.html',
  styleUrls: ['./frm-cad.component.css']

})
export class FrmCadComponent implements OnInit {

  @Input() frm: FormGroup;
  //@Input('frm') frm;
  @Input() componentInfo: any;
  @Input() formModel: FormSerializer;
  serviceApi: any;
  element: any;
  labelConfig = {size: ''};
  entityName = "";


  onSave: any;


  constructor(private router: Router, public toastService: ToastNotificationService, private utils: Utils, private addressService: AddressService) { }

  ngOnInit() {
    console.log(this.frm);
    debugger;
    console.log(this.formModel);
    this.initComponentInfo();
    this.initForm();
  }

  initForm(): void {
    this.checkCustomFields();
    this.entityName = this.formModel.entityName;
  }

  initComponentInfo(): void {
    let componentInfo = this.componentInfo;
    this.serviceApi = componentInfo.serviceApi || this.formModel.serviceApi;
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
    let groups = form.groups;

    for (let i = 0; i < groups.length; i++){
      groups[i].fields.forEach(field => {
        if (field.type === "address") {
          groups[i] = this.initFieldsaddress();
        }

      });
    }

  }

  private initFieldsaddress(): any {
    let group = new FormGroupSerializer();
    let mask = new Mask();
    let field = new FormField({
      id: "cep",
      label: "CEP",
      type: "text",
      mask: mask.cep,
      onchange: (field)=> this.updateAddressByCep(field)
    });
    group.fields.push(field);
    field = new FormField({
      id: "uf",
      label: "Estado",
      type: "select",
      fields: States
    });
    group.fields.push(field);
    field = new FormField({
      id: "city",
      label: "Cidade",
      type: "text"
    });
    group.fields.push(field);
    field = new FormField({
      id: "neighborhood",
      label: "Bairro",
      type: "text"
    });
    group.fields.push(field);
    field = new FormField({
      id: "publicPlace",
      label: "Endereço",
      type: "text"
    });
    group.fields.push(field);
    field = new FormField({
      id: "complement",
      label: "Complemento",
      type: "text"
    });
    group.fields.push(field);
    group.formGroupName = "address";
    return group;
  }


  public updateAddressByCep(cep: string): void {
    let formGroupName = this.frm.get('address');
    if (formGroupName && cep) {
      this.addressService.getAddressByCep(cep).subscribe(result => {
        formGroupName.get('city').setValue(result.localidade);
        formGroupName.get('uf').setValue(result.uf);
        formGroupName.get('publicPlace').setValue(result.logradouro);
        formGroupName.get('uf').setValue(result.uf);
        formGroupName.get('neighborhood').setValue(result.bairro);
      }, () => { });
    }
  }

  public getEntityTitle(): string {
    let frm = this.frm;
    let title = (frm.get('name') || frm.get('login') || frm.get('title')).value;
    return title;
  }

}
// bairro: "Costa e Silva"
// cep: "89218-640"
// complemento: ""
// ddd: "47"
// gia: ""
// ibge: "4209102"
// localidade: "Joinville"
// logradouro: "Rua Afonso Kieper"
// siafi: "8179"
// uf: "SC"
