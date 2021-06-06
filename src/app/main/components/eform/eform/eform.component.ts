import { CheckboxInputService } from './../../../shared/service/form/checkbox-input.service';
import { RadioInputService } from './../../../shared/service/form/radio-input.service';
import { UserApiService } from './../../../shared/service/api/user-api.service';
import { group } from '@angular/animations';
import { FormGroup, FormBuilder, FormControl, AbstractControl, FormArray } from '@angular/forms';
import { Eform } from './../../../shared/model/form/EForm.model';
import { PatternUrl } from '../../../shared/utils/PatternUrl.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EformApiService } from '../../../shared/service/api/eform-api.service';
import { FormField } from 'src/app/main/shared/model/form-field.model';
import { ApiAllService } from '../../../shared/service/api/apiAll.service';
import { ToastNotification } from 'src/app/main/shared/model/toast-notification.model';
import { ToastNotificationService } from 'src/app/main/shared/service/toast-notification.service';
import { EventsBindingService } from '../events-binding.service';
import { ServiceApiInterface } from 'src/app/main/shared/interface/service-api.interface';
import { ModalInfo } from 'src/app/main/shared/model/modal-info.model';
import { ModalService } from '../../../shared/service/modal.service';

@Component({
  selector: 'app-eform',
  templateUrl: './eform.component.html',
  styleUrls: ['./eform.component.css']
})
export class EformComponent implements OnInit {
  component: string;
  eformModel: Eform;
  withHeader: boolean;
  formGroup: FormGroup;
  public header: any;
  entityId: number;
  entity: any;

  constructor(
    private route: ActivatedRoute,
    private eformApi: EformApiService,
    private fb: FormBuilder,
    private apiGet: ApiAllService,
    private router: Router,
    private toastService: ToastNotificationService,
    private eformBindingService: EventsBindingService,
    private userApiService: UserApiService,
    private modalService: ModalService,
    private radioInputService: RadioInputService,
    private checkboxInputService: CheckboxInputService
  ) { }

  ngOnInit() {
    this.getEFormByURI();
    this.eformBindingService.getEventSave().subscribe((save: boolean) => {
      if (save) {
        this.save();
      }
    })
    this.getSpecialInputs();
  }

  private getEFormByURI() {
    this.getURI();
    let patternUrl = new PatternUrl();

    this.eformApi.get(this.component + "/" + patternUrl.eformBuild).subscribe((eform: Eform) => {
      this.buildEform(eform);
    });
    if (this.entityId) {
      let service: ServiceApiInterface = this.apiGet.getByString(this.component);
      service.getById(this.entityId).subscribe((entity) => {
        this.entity = entity;
        if (this.formGroup) {
          // caso o formulario seja carregado antes da entidade, ele atualiza os campos do formulario.
          this.updateEformValues();
        }
      })

    }

  }

  private buildEform(eform) {
    eform = new Eform(eform);
    eform.fields = this.getFieldsWithType(eform);
    this.eformModel = eform;
    this.buildEformImpl();
    this.initHeader();
  }

  private getFieldsWithType(eform: Eform): FormField[] {
    for (let i = 0; i < eform.fields.length; i++) {
      let field: {};
      field = eform.fields[i];
      if (field) {
        eform.fields[i] = new FormField(field);
      } else {
        console.log("field not found!");
        eform.fields.splice(i, 1);
      }
    }
    return eform.fields;
  }

  private updateEformValues(): void {
    let obj = this.entity;

    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        let entityValue = obj[key];
        let field = this.formGroup.controls[key];
        if (field) {
          this.formGroup.controls[key].setValue(entityValue);
        }
      }
    }

    this.formGroup.controls
  }

  private getURI() {
    this.route.params.subscribe(params => this.component = params['component']);
    this.route.params.subscribe(params => this.entityId = params['id']);
  }

  private buildEformImpl(): void {
    this.formGroup = this.getFormGroup();

    this.buildGroups();
  }

  private getFormGroup(): FormGroup {
    let formGroup = this.fb.group({

    });
    let fields = this.eformModel.fields;
    Object.keys(fields).forEach((key) => {
      let field = fields[key];
      let fieldName = field.id;
      let fieldValue = '';
      if (this.entity) {
        fieldValue = this.entity[fieldName];
      }
      if (field.instance) {

        if (field.listType === "MANY") {
          formGroup.addControl(fieldName, this.getFormGroupByField(field.instance, true));
        } else {
          formGroup.addControl(fieldName, this.getFormGroupByField(field.instance, false));
        }
      } else {
        formGroup.addControl(fieldName, new FormControl(fieldValue));
      }
    });
    return formGroup;
  }

  private getFormGroupByField(subField, isArray: boolean): AbstractControl {
    let fieldWithFormGroup: FormGroup = this.fb.group({});
    Object.keys(subField).forEach((key) => {
      let fieldValue = subField[key];
      fieldWithFormGroup.addControl(key, new FormControl(fieldValue));
    });
    if (isArray) {
      let formArray: FormArray = this.fb.array([]);
      return formArray;
    }
    return fieldWithFormGroup;
  }

  private addControlToArrayForm(nameControl: string): FormGroup {
    let fieldForm;
    let arrayForm = this.formGroup.controls[nameControl];
    if (!arrayForm) {
      nameControl = this.safeControlName(nameControl);
      arrayForm = this.formGroup.controls[nameControl];
    }
    if (arrayForm instanceof FormArray) {
      this.eformModel.fields.forEach((currentValue, index) => {
        if (currentValue.id === nameControl) {
          fieldForm = this.getFormGroupByField(currentValue.instance, false);
        }
      });
    } else {
      console.log("is not array form!");
    }
    return fieldForm;
  }

  private buildGroups(): void {
    // FIXME isso aqui faz ele tratar em grupos (vertical) os fields.
    // melhorar isso!
    let groups: {
      fields: any;
    }[];
    groups = [];
    let fields = this.eformModel.fields;

    for (let fieldIndex = 0; fieldIndex < fields.length; fieldIndex++) {
      let field = fields[fieldIndex];
      let groupIndex = fields[fieldIndex].group;

      if (!groups[groupIndex]) {
        groups[groupIndex] = { fields: [] };
        //groups.push({fields: []});
        groups[groupIndex].fields = [];
      }

      groups[groupIndex].fields.push(field);
    }
    this.eformModel.groups = groups;
    console.log(this.eformModel);
  }

  private initHeader(): void {
    // remover
    this.header = {
      component: this.component,
      service: this.apiGet.getByString(this.component),
      eform: this.formGroup,
      ok: {
        event: this.save,
        onSave: this.eformModel.onSave,
        onError: this.eformModel.onSaveError
      }
    }
  }

  private save(): void {
    // Busca o service de forma dinamica. melhorar!
    let service: ServiceApiInterface = this.apiGet.getByString(this.component);
    let onSave = this.eformModel.onSave;
    service.save(this.formGroup.value).subscribe(sucess => {
      this.createToastNotification(new ToastNotification({ text: onSave.message }));
      if (onSave.route) {
        this.router.navigate([onSave.route]);
      }
    }, error => {

    });
  }

  private createToastNotification(toast: ToastNotification): void {
    this.toastService.create(toast);
    this.toastService.show();
  }

  // MELHORAR ISSO.
  public getModalInfo(field): ModalInfo {
    return new ModalInfo({
      id: 'modal_' + field.id,
      title: field.label,
      onSave: () => {
        //registrar valor no formulario.
      }
    });
  }

  public openModal(field): void {
    this.modalService.setId('modal_' + field.id);
    this.modalService.toggle();
  }

  private getSpecialInputs(): void {
    this.radioInputService.getRadioEvent().subscribe((event) => {
      let value = event.target.value;
      let name = event.target.name;
      let control = this.formGroup.controls[name];
      if (control) {
        if (control instanceof FormGroup) {
          let formGroupControls = control.controls;
          if (formGroupControls) {
            if (formGroupControls["id"]) {
              formGroupControls["id"].setValue(value);
            }
          }
        } else {
          control.setValue(value);
        }
      }
    });
    this.checkboxInputService.getOnSelect().subscribe(event => {
      let name = event.target.name;
      let value = event.target.value;
      let control = this.formGroup.controls[name];
      if (!control) {
        control = this.getControlByPluralName(name);
      }


      if (event.target.checked) {


        if (control instanceof FormControl) {
          control.setValue(value);
        } else if (control instanceof FormArray) {
          control.push(this.addControlToArrayForm(name));
          let newControl = control.controls[control.controls.length - 1];
          if (newControl instanceof FormGroup) {
            newControl.controls["id"].setValue(value);
          }
        }
      } else {
        // se nao estiver checado
        if(control instanceof FormArray){
          // acha o indice do elemento a ser removido
          control.controls.forEach((element, index) => {
            if(element.value.id === value){
              (control as FormArray).removeAt(index);
            }
          })
        }
      }

    });
  }

  private getControlByPluralName(name: string) {
    if (name === "category") {
      return this.formGroup.controls[this.safeControlName(name)];
    }
  }

  private safeControlName(name: string) {
    if (name === "category") {
      return "categories";
    }
  }
}
