
import { NavbarService } from '../../../../shared/service/navbar.service';
import { ToastNotificationService } from './../../../../shared/service/toast-notification.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../../../shared/model/user.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { FormField } from '../../../../shared/model/form-field.model';
import { FormSerializer } from '../../../../shared/model/form-serializer.model';
import { InterfaceRule } from '../../../../shared/model/interface-rule.model';
import { UserService } from '../../../../shared/service/user.service';
import { UserApiService } from '../../../../shared/service/api/user-api.service';
import { Permission } from '../../../../shared/enum/permission.enum';
import { FormGroupSerializer } from '../../../../shared/model/form-group-serializer.model';
import { PatternUrl } from '../../../../shared/utils/PatternUrl.model';
import { EntityFrmAbstract } from '../../../../shared/abstract/entity-frm.abstract';
import { EntityFormInterfaceComponent } from '../../../../shared/interface/entity-form.interface';
import { FieldFormType } from '../../../../shared/enum/field-form-type.enum';
import {Eform} from '../../../../shared/model/form/EForm.model';

@Component({
  selector: 'app-user-frm',
  templateUrl: './user-frm.component.html',
  styleUrls: ['./user-frm.component.css']
})
export class UserFrmComponent extends EntityFrmAbstract implements OnInit, EntityFormInterfaceComponent {

  userId: number;
  user: User;
  public userForm: FormGroup;
  formModel: FormSerializer;
  navbarRule;

  constructor(public route: ActivatedRoute,
    public service: UserService,
    public serviceApi: UserApiService,
    private fb: FormBuilder,
    public router: Router,
    private toastService: ToastNotificationService,
    private navbarService: NavbarService) {
      super(route, serviceApi);
  }

  ngOnInit(): void {
    this.serviceApi.getForm(new User()).subscribe((result: Eform) => console.log(result));
    this.applyInterfaceRule();
    this.getIdByUrl();
    if (this.userId) {
      console.log("is editing! code user:" + this.userId);
      this.loadEntityInfo(this.userId);
    } else {
      this.initFormBuilder();
    }
    this.initFormStructure();
  }

  public loadEntityInfo(id: number): void {
    this.serviceApi.getById(id).subscribe((result)=>{
      this.user = result;
      this.initFormBuilder();
    })
  }

  // public getOnSave(): {onSucess: {}, onError: {}} {
  //   return {
  //       onSucess: {
  //         action: () => {
  //           this.router.navigate(['home/' + new PatternUrl().user]);
  //         },
  //         toast: this.toastService.create({
  //           title: "ok",
  //           text: "Usu??rio salvo com sucesso!"
  //         })
  //       },
  //       onError: {
  //         action: () => {
  //           console.log("Erro ao salvar usuario!");
  //         },
  //         toast: this.toastService.create({
  //           title: "ok",
  //           text: "Usu??rio salvo com sucesso!"
  //         })
  //       }
  //   }
  // }

  // getIdByUrl(): void {
  //   this.route.params.subscribe(params => this.userId = params['id']);
  // }

  initFormBuilder(): void {
    if (!this.user){
      this.user = new User();
    }

    this.userForm = this.fb.group({
      login: [this.user.login, [Validators.required]],
      password: [this.user.password, [Validators.required]],
      createDate: ['2020-08-01T20:00:00', []],
      permission: [this.user.permission, [Validators.required]],
      active: [this.user.active, []],
      customer: [this.user.customer, []]
    });
  }

  public initFormStructure(): void {
    let group = new FormGroupSerializer();

    let formField = new FormField({
      id: "login",
      label: "Login",
      type: FieldFormType.TEXT,
      row: "1"
    });

    group.fields.push(formField);

    formField = new FormField({
      id: "password",
      label: "Senha",
      type: FieldFormType.PASSWORD,
      row: "1"
    });

    group.fields.push(formField);

    formField = new FormField({
      id: "permission",
      label: "Permissao",
      type: FieldFormType.SELECT,
      fields: Permission,
      config: {
        label: {size: "col-md-5"}
      }
    });

    group.fields.push(formField);

    this.formModel = new FormSerializer({
      entityName: "Usu??rio",
      groups: [group],
      serviceApi: this.serviceApi
    });
  }

  applyInterfaceRule() {
    this.navbarService.showNavbar(false);
  }

}
