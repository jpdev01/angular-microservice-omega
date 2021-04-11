
import { CustomersApiService } from './../../../../shared/service/customers-api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { NavbarService } from 'src/app/main/shared/service/navbar.service';
import { FormSerializer } from 'src/app/main/shared/model/form-serializer.model';
import { FormField } from 'src/app/main/shared/model/form-field.model';
import { ToastNotificationService } from 'src/app/main/shared/service/toast-notification.service';
import { Size } from 'src/app/main/shared/model/size.model';
import { Mask } from 'src/app/main/shared/model/mask.model';
import { FormGroupSerializer } from 'src/app/main/shared/model/form-group-serializer.model';
import { EntityFrmAbstract } from 'src/app/main/shared/abstract/entity-frm.abstract';
import { ActivatedRoute, Router } from '@angular/router';
import { EntityFormInterfaceComponent } from 'src/app/main/shared/interface/entity-form.interface';
import { Customer } from 'src/app/main/shared/model/customer.model';
import { PatternUrl } from 'src/app/main/shared/utils/PatternUrl.model';
import { Address } from 'src/app/main/shared/model/address.model';
import { FieldFormType } from 'src/app/main/shared/enum/field-form-type.enum';

@Component({
  selector: 'app-customers-frm',
  templateUrl: './customers-frm.component.html',
  styleUrls: ['./customers-frm.component.css']
})
export class CustomersFrmComponent extends EntityFrmAbstract implements OnInit, EntityFormInterfaceComponent {

  public customerForm: FormGroup;
  formModel: FormSerializer;

  customerId: any; customer: Customer;
  constructor(
    private navbarService: NavbarService,
    private fb: FormBuilder,
    public serviceApi: CustomersApiService,
    private toastService: ToastNotificationService,
    public route: ActivatedRoute,
    public router: Router) {
    super(route, serviceApi);
  }

  ngOnInit() {
    this.getIdByUrl();
    this.closeNavBar();
    this.initFormImpl();
    if (this.customerId) {
      this.loadEntityInfo(this.customerId);
    } else {
      this.initFormBuilder();
    }
    this.initFormStructure();
  }

  closeNavBar(): void {
    this.navbarService.showNavbar(false, new PatternUrl().customer);
  }

  getIdByUrl(): void {
    this.route.params.subscribe(params => this.customerId = params['id']);
  }

  public initFormImpl(): void {
    this.initFormBuilder();
    this.initFormStructure();
  }

  public initFormBuilder(): void {
    if (!this.customer){
      this.customer = new Customer();
    }
    let valueDefault = "";
    let emptyRequisities = ['', []];

    let address = this.customer.address;
    if (!address) {
      address = new Address();
    }
    this.customerForm = this.fb.group({
      address: this.fb.group({
        cep: address.cep,
        uf: address.uf,
        publicPlace: address.publicPlace,
        neighborhood: address.neighborhood,
        city: address.city,
        complement: address.complement
      }),

      name: [this.customer.name, [Validators.required]],
      nickname: [this.customer.nickname, [Validators.required]],
      cpf: [this.customer.cpf, [Validators.required]],
      RG: [this.customer.RG, [Validators.required]],
      borndate: this.customer.borndate,
      dataReg: this.customer.dataReg,
      email: this.customer.email,
      fone: this.customer.fone,
      mobile: this.customer.mobile,
      description: this.customer.description,
      size: this.customer.size,
      size2: this.customer.size2,
      office: this.customer.office,
      reference: this.customer.reference
    })

  }

  public initFormStructure(): void {

    let group1 = new FormGroupSerializer();
    let group2 = new FormGroupSerializer();
    let group3 = new FormGroupSerializer();
    let group4 = new FormGroupSerializer();
    let mask = new Mask();

    let formField = new FormField({
      id: "name",
      label: "Nome",
      type: FieldFormType.TEXT,
      row: "1"
    });

    group1.fields.push(formField);

    formField = new FormField({
      id: "nickname",
      label: "Apelido",
      type: FieldFormType.TEXT,
      row: "1"
    });

    group1.fields.push(formField);

    formField = new FormField({
      id: "cpf",
      label: "CPF",
      type: FieldFormType.TEXT,
      row: "1",
      mask: mask.cpf
    });

    group1.fields.push(formField);

    formField = new FormField({
      id: "RG",
      label: "RG",
      type: FieldFormType.TEXT,
      row: "1",
      mask: mask.rg
    });
    group1.fields.push(formField);
    formField = new FormField({
      id: "borndate",
      label: "Data de Nascimento",
      type: FieldFormType.DATE,
      row: "1"
    });
    group1.fields.push(formField);
    formField = new FormField({
      id: "dataReg",
      label: "Data de Registro",
      type: FieldFormType.DATE,
      row: "1"
    });
    group1.fields.push(formField);

    formField = new FormField({
      id: "email",
      label: "E-mail",
      type: FieldFormType.EMAIL,
      row: "1"
    });
    group1.fields.push(formField);

    formField = new FormField({
      id: "fone",
      label: "Telefone",
      type: FieldFormType.TEXT,
      row: "1",
      mask: mask.fone
    });
    group1.fields.push(formField);
    formField = new FormField({
      id: "mobile",
      label: "Celular",
      type: FieldFormType.TEXT,
      mask: mask.fone
    });
    group2.fields.push(formField);

    formField = new FormField({
      id: "size",
      label: "Tamanho",
      type: FieldFormType.SELECT,
      fields: new Size().size,
      row: "1"
    });
    group2.fields.push(formField);
    formField = new FormField({
      id: "size2",
      label: "Tamanho",
      type: FieldFormType.SELECT,
      fields: new Size().size2,
      row: "1"
    });
    group2.fields.push(formField);
    formField = new FormField({
      id: "office",
      label: "Trabalho",
      type: FieldFormType.TEXT,
      row: "1"
    });
    group2.fields.push(formField);
    formField = new FormField({
      id: "description",
      label: "Descrição",
      type: FieldFormType.TEXTAREA,
      row: "1"
    });
    group2.fields.push(formField);

    formField = new FormField({
      id: "address",
      label: "Endereço",
      type: FieldFormType.ADDRESS,
      row: "1"
    });
    group3.fields.push(formField);
    group3.formGroupName = "address";

    formField = new FormField({
      id: "reference",
      label: "Referencia",
      type: FieldFormType.TEXT,
      row: "1"
    });
    group4.fields.push(formField);

    this.formModel = new FormSerializer({
      entityName: "Cliente",
      groups: [group1, group2, group3, group4],
      serviceApi: this.serviceApi,
      onSave: this.getOnSave()
    });

  }

  public getOnSave(): { onSucess: {}, onError: {} } {
    return {
      onSucess: {
        action: () => {
          this.router.navigate(['home/' + new PatternUrl().customer]);
        },
        toast: this.toastService.create({
          title: "ok",
          text: "Cliente salvo com sucesso!"
        })
      },
      onError: {
        action: () => {
          console.log("Erro ao salvar usuario!");
        },
        toast: this.toastService.create({
          title: "ok",
          text: "Erro ao salvar cliente!"
        })
      }
    };
  }

  public loadEntityInfo(id: number): void {
    this.serviceApi.getById(id).subscribe((result)=>{
      this.customer = result;
      this.initFormBuilder();
    })
  }

}
