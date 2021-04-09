import { PatternUrl } from './../../../../shared/utils/PatternUrl.model';
import { EntityFormInterfaceComponent } from '../../../../shared/interface/entity-form.interface';
import { NavbarService } from './../../../../shared/service/navbar.service';
import { ToastNotificationService } from './../../../../shared/service/toast-notification.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormSerializer } from './../../../../shared/model/form-serializer.model';
import { Provider } from './../../../../shared/model/provider.model';
import { Component, OnInit } from '@angular/core';


import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProviderApiService } from '../../../../shared/service/api/provider-api.service';
import { FormGroupSerializer } from '../../../../shared/model/form-group-serializer.model';
import { FormField } from '../../../../shared/model/form-field.model';
import { FieldFormType } from 'src/app/main/shared/enum/field-form-type.enum';

@Component({
  selector: 'app-providers-frm',
  templateUrl: './providers-frm.component.html',
  styleUrls: ['./providers-frm.component.css']
})
export class ProvidersFrmComponent implements OnInit, EntityFormInterfaceComponent {
  providerId: number;
  provider: Provider;
  public providerFrm: FormGroup;
  formModel: FormSerializer;
  navbarRule;

  constructor(public route: ActivatedRoute,
    public serviceApi: ProviderApiService,
    private fb: FormBuilder,
    public router: Router,
    private toastService: ToastNotificationService,
    private navbarService: NavbarService) {

  }
  getIdByUrl(): void {
    this.route.params.subscribe(params => this.providerId = params['id']);
  }
  loadEntityInfo(id: number): void {
    this.serviceApi.getById(id).subscribe((result)=>{
      this.provider = result;
      this.initFormBuilder();
    })
  }
  initFormStructure(): void {
    let group = new FormGroupSerializer();

    let formField = new FormField({
      id: "name",
      label: "Nome",
      type: FieldFormType.TEXT
    });

    group.fields.push(formField);

    formField = new FormField({
      id: "description",
      label: "Descrição",
      type: FieldFormType.TEXT
    });

    group.fields.push(formField);

    this.formModel = new FormSerializer({
      entityName: "Fornecedor",
      groups: [group],
      serviceApi: this.serviceApi,
      onSave: this.getOnSave()
    });
  }
  initFormBuilder(): void {
    if (!this.provider){
      this.provider = new Provider();
    }

    this.providerFrm = this.fb.group({
      name: [this.provider.name, [Validators.required]],
      description: [this.provider.description, [Validators.required]]
    });
  }
  applyInterfaceRule(): void {
    //throw new Error('Method not implemented.');
  }
  public getOnSave(): {onSucess: {}, onError: {}} {
    return {
        onSucess: {
          action: () => {
            this.router.navigate(['home/' + new PatternUrl().provider]);
          },
          toast: this.toastService.create({
            title: "ok",
            text: "Fornecedor salvo com sucesso!"
          })
        },
        onError: {
          action: () => {
            console.log("Erro ao salvar fornecedor!");
          },
          toast: this.toastService.create({
            title: "ok",
            text: "Fornecedor salvo com sucesso!"
          })
        }
    }
  }

  ngOnInit(): void {
    this.applyInterfaceRule();
    this.getIdByUrl();
    if (this.providerId) {
      this.loadEntityInfo(this.providerId);
    } else {
      this.initFormBuilder();
    }
    this.initFormStructure();
  }

}
