import { PatternUrl } from './../../shared/utils/PatternUrl.model';
import { NavbarService } from './../../shared/service/navbar.service';
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
import { ModalService } from '../../shared/service/modal.service';
import { FieldFormType } from '../../shared/enum/field-form-type.enum';
import { ModalInfo } from '../../shared/model/modal-info.model';
import { RadioInputService } from '../../shared/service/form/radio-input.service';
declare var $:any;

@Component({
  selector: 'app-frm-cad',
  templateUrl: './frm-cad.component.html',
  styleUrls: ['./frm-cad.component.css']

})
export class FrmCadComponent implements OnInit {

  @Input() frm: FormGroup;
  //@Input('frm') frm;
  @Input() formModel: FormSerializer;
  serviceApi: any;
  element: any;
  labelConfig = {size: ''};
  entityName = "";
  onSave: any;


  constructor(
    private router: Router,
    public toastService: ToastNotificationService,
    private utils: Utils,
    private addressService: AddressService,
    private modalService: ModalService,
    private radioInputService: RadioInputService,
    private navbarService: NavbarService
    ) { }

  ngOnInit() {
    this.getInfo();
    this.initForm();
    this.initEvents();
    this.hideNavbar();
  }

  getInfo(){
    this.onSave = this.formModel.onSave;
    this.serviceApi = this.formModel.serviceApi;
  }

  initForm(): void {
    this.checkCustomFields();
    this.entityName = this.formModel.entityName;
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
        if (field.type === FieldFormType.ADDRESS) {
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
      type: FieldFormType.TEXT,
      mask: mask.cep,
      onchange: (field)=> this.updateAddressByCep(field)
    });
    group.fields.push(field);
    field = new FormField({
      id: "uf",
      label: "Estado",
      type: FieldFormType.SELECT,
      fields: States
    });
    group.fields.push(field);
    field = new FormField({
      id: "city",
      label: "Cidade",
      type: FieldFormType.TEXT
    });
    group.fields.push(field);
    field = new FormField({
      id: "neighborhood",
      label: "Bairro",
      type: FieldFormType.TEXT
    });
    group.fields.push(field);
    field = new FormField({
      id: "publicPlace",
      label: "Endereço",
      type: FieldFormType.TEXT
    });
    group.fields.push(field);
    field = new FormField({
      id: "complement",
      label: "Complemento",
      type: FieldFormType.TEXT
    });
    group.fields.push(field);
    group.formGroupName = "address";
    return group;
  }


  public updateAddressByCep(cep: string): void {
    let addressForm = this.frm.get('address');
    if (addressForm && cep) {
      this.addressService.getAddressByCep(cep).subscribe(result => {
        addressForm.get('city').setValue(result.localidade);
        addressForm.get('uf').setValue(result.uf);
        addressForm.get('publicPlace').setValue(result.logradouro);
        addressForm.get('uf').setValue(result.uf);
        addressForm.get('neighborhood').setValue(result.bairro);
      }, () => { });
    }
  }

  public getEntityTitle(): string {
    let frm = this.frm;
    if(frm){
      let title = (frm.get('name') || frm.get('login') || frm.get('title')).value;
      return title;
    }
    return "";
  }

  public openModal(field): void{
    this.modalService.setId('modal_'+field.id);
    this.modalService.toggle();
  }

  public getModalInfo(field): ModalInfo {
    return new ModalInfo({
      id: 'modal_' + field.id,
      title: field.label,
      onSave: () =>{
        //registrar valor no formulario.
      }
    });
  }

  private formControlRadioInput;
  private initEvents(){
    this.radioInputService.getRadioEvent().subscribe((event) => {
      if (this.formControlRadioInput){
        let formControl = this.frm.get(this.formControlRadioInput);
        let value = event.target.value;
        if (formControl instanceof FormGroup) {
          if(this.canIsNumber(value)){
            //set by id
            formControl.get('id').setValue(value);
          }
        }
        else {
          formControl.setValue(event.target.value);
        }
      }
    });
    this.radioInputService.getId().subscribe((id) => {
      this.formControlRadioInput = id;
    });
  }

  canIsNumber(value: any){
    return !isNaN(value);
  }

  private hideNavbar(){
    this.navbarService.showNavbar(false);
  }

}
