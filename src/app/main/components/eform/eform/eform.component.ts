import { UserApiService } from './../../../shared/service/api/user-api.service';
import { group } from '@angular/animations';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
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

  constructor(
    private route: ActivatedRoute,
    private eformApi: EformApiService,
    private fb: FormBuilder,
    private apiGet: ApiAllService,
    private router: Router,
    private toastService: ToastNotificationService,
    private eformBindingService: EventsBindingService,
    private userApiService: UserApiService
  ) { }

  ngOnInit() {
    this.getEFormByURI();
    this.eformBindingService.getEventSave().subscribe((save: boolean) => {
      if (save) {
        this.save();
      }
    })
  }

  private getEFormByURI() {
    this.getURI();
    let patternUrl = new PatternUrl();
    this.eformApi.get(this.component + "/" + patternUrl.eformBuild).subscribe((eform: Eform) => {
      eform = new Eform(eform);
      eform.fields = this.getFieldsWithType(eform);
      this.eformModel = eform;
      this.buildEform();
      this.initHeader();
    });
  }

  private getFieldsWithType(eform: Eform): FormField[] {
    for (let i = 0; i < eform.fields.length; i++) {
      let field: {};
      field = eform.fields[i];
      eform.fields[i] = new FormField(field);
    }
    return eform.fields;
  }

  private getURI() {
    this.route.params.subscribe(params => this.component = params['component']);
  }

  private buildEform(): void {
    // monta os campos do form group dinamicamente
    this.formGroup = this.fb.group({

    });
    let fields = this.eformModel.fields;
    Object.keys(fields).forEach((key) => {
      this.formGroup.addControl(fields[key].id, new FormControl());
    });
    console.log(this.formGroup);

    this.buildGroups();
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


  // private save(component: string, service: any, formGroup: any): void{
  //   if (service.setComponent){
  //     service.setComponent(component);
  //   }
  //   let onSave = this.eformModel.onSave;
  //   service.save(formGroup.value).subscribe(sucess => {
  //     this.createToastNotification(onSave.message);
  //     if (onSave.route){
  //       this.router.navigate([onSave.route]);
  //     }
  //   });
  // }

  private save(): void {
    // Busca o service de forma dinamica. melhorar!
    let service: ServiceApiInterface = this.apiGet.getByString(this.component);
    let onSave = this.eformModel.onSave;
    service.save(this.formGroup.value).subscribe(sucess => {
      this.createToastNotification(new ToastNotification({text: onSave.message}));
          if (onSave.route){
            this.router.navigate([onSave.route]);
          }
    }, error => {

    });
  }

  private createToastNotification(toast: ToastNotification): void {
    this.toastService.create(toast);
    this.toastService.show();
  }

  // CONTROL FIELDS
  // DEPOIS ALTERAR ISSO PARA FAZER NO MODEL DO FIELD
}
