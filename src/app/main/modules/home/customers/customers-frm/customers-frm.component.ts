import { CustomersApiService } from './../../../../shared/service/customers-api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { NavbarService } from 'src/app/main/shared/service/navbar.service';
import { FormSerializer } from 'src/app/main/shared/model/form-serializer.model';
import { FormField } from 'src/app/main/shared/model/form-field.model';
import { ToastNotificationService } from 'src/app/main/shared/service/toast-notification.service';
import { Size } from 'src/app/main/shared/model/size.model';
import {Mask} from 'src/app/main/shared/model/mask.model';
import { FormGroupSerializer } from 'src/app/main/shared/model/form-group-serializer.model';

@Component({
  selector: 'app-customers-frm',
  templateUrl: './customers-frm.component.html',
  styleUrls: ['./customers-frm.component.css']
})
export class CustomersFrmComponent implements OnInit {

  public userForm: FormGroup;
  formModel: FormSerializer;
  componentInfo: any;

  constructor(private navbarService: NavbarService, private fb: FormBuilder, public serviceApi: CustomersApiService, private toastService: ToastNotificationService) { }

  ngOnInit() {
    this.closeNavBar();
    this.initFormImpl();
  }

  closeNavBar(): void {
    this.navbarService.showNavbar(false);
  }

  getIdByUrl(): void {
    // this.route.params.subscribe(params => this.userId = params['id']);
  }

  private initFormImpl(): void {
    this.initFormBuilder();
    this.initFormValues();
    this.initComponentInfo();
  }

  private initFormBuilder(): void {
    let valueDefault = "";
    let emptyRequisities = ['', []];

    this.userForm = this.fb.group({
      address: this.fb.group({
        cep: emptyRequisities,
        uf: emptyRequisities,
        publicPlace: emptyRequisities,
        neighborhood: emptyRequisities,
        city: emptyRequisities,
        complement: emptyRequisities
      }),

      name: [valueDefault, [Validators.required]],
      nickname: [valueDefault, [Validators.required]],
      cpf: [valueDefault, [Validators.required]],
      RG: ['', [Validators.required]],
      borndate: emptyRequisities,
      dataReg: emptyRequisities,
      email: emptyRequisities,
      fone: emptyRequisities,
      mobile: emptyRequisities,
      description: emptyRequisities,
      size: emptyRequisities,
      size2: emptyRequisities,
      office: emptyRequisities,
      reference: emptyRequisities
      //address: emptyRequisities,
    })

  }

  private initFormValues(): void {

    let group1 = new FormGroupSerializer();
    let group2 = new FormGroupSerializer();
    let group3 = new FormGroupSerializer();
    let group4 = new FormGroupSerializer();
    let mask = new Mask();

    let formField = new FormField({
      id: "name",
      label: "Nome",
      type: "text",
      row: "1"
    });

    group1.fields.push(formField);

    formField = new FormField({
      id: "nickname",
      label: "Apelido",
      type: "text",
      row: "1"
    });

    group1.fields.push(formField);

    formField = new FormField({
      id: "cpf",
      label: "CPF",
      type: "text",
      row: "1",
      mask: mask.cpf
    });

    group1.fields.push(formField);

    formField = new FormField({
      id: "RG",
      label: "RG",
      type: "text",
      row: "1",
      mask: mask.rg
    });
    group1.fields.push(formField);
    formField = new FormField({
      id: "borndate",
      label: "Data de Nascimento",
      type: "date",
      row: "1"
    });
    group1.fields.push(formField);
    formField = new FormField({
      id: "dataReg",
      label: "Data de Registro",
      type: "date",
      row: "1"
    });
    group1.fields.push(formField);

    formField = new FormField({
      id: "email",
      label: "E-mail",
      type: "email",
      row: "1"
    });
    group1.fields.push(formField);

    formField = new FormField({
      id: "fone",
      label: "Telefone",
      type: "text",
      row: "1",
      mask: mask.fone
    });
    group1.fields.push(formField);
    formField = new FormField({
      id: "mobile",
      label: "Celular",
      type: "text",
      mask: mask.fone
    });
    group2.fields.push(formField);

    formField = new FormField({
      id: "size",
      label: "Tamanho",
      type: "select",
      fields: new Size().size,
      row: "1"
    });
    group2.fields.push(formField);
    formField = new FormField({
      id: "size2",
      label: "Tamanho",
      type: "select",
      fields: new Size().size2,
      row: "1"
    });
    group2.fields.push(formField);
    formField = new FormField({
      id: "office",
      label: "Trabalho",
      type: "select",
      row: "1"
    });
    group2.fields.push(formField);
    formField = new FormField({
      id: "description",
      label: "Descrição",
      type: "textarea",
      row: "1"
    });
    group2.fields.push(formField);

    formField = new FormField({
      id: "address",
      label: "Endereço",
      type: "address",
      row: "1"
    });
    group3.fields.push(formField);
    group3.formGroupName = "address";

    formField = new FormField({
      id: "reference",
      label: "Referencia",
      type: "text",
      row: "1"
    });
    group4.fields.push(formField);

    this.formModel = new FormSerializer({
      entityName: "Cliente",
      groups: [group1, group2, group3, group4],
      serviceApi: this.serviceApi
    });

  }

  private initComponentInfo(): void {
    this.componentInfo = {
      name: "user-frm",
      serviceApi: this.serviceApi,
      onSave: {
        onSucess: {
          action: () => {
            // this.router.navigate(['home/users']);
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
      }
    }
  }

}
