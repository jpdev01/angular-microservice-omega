import { NavbarService } from 'src/app/main/shared/service/navbar.service';
import { ToastNotificationService } from './../../../../shared/service/toast-notification.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/main/shared/model/user.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { FormField } from '../../../../shared/model/form-field.model';
import { FormSerializer } from '../../../../shared/model/form-serializer.model';
import { InterfaceRule } from 'src/app/main/shared/model/interface-rule.model';
import { UserService } from '../../../../shared/service/user.service';
import { UserApiService } from '../../../../shared/service/user-api.service';
import { Permission } from 'src/app/main/shared/enum/permission.enum';
import { FormGroupSerializer } from 'src/app/main/shared/model/form-group-serializer.model';

@Component({
  selector: 'app-user-frm',
  templateUrl: './user-frm.component.html',
  styleUrls: ['./user-frm.component.css']
})
export class UserFrmComponent implements OnInit {

  userId: number;
  user: User;
  public userForm: FormGroup;
  formModel: FormSerializer;
  navbarRule;
  formFromEditing = false;
  componentInfo: any;

  constructor(private route: ActivatedRoute, public service: UserService, public serviceApi: UserApiService, private fb: FormBuilder, private router: Router, private toastService: ToastNotificationService, private navbarService: NavbarService) {

  }

  ngOnInit(): void {
    this.initComponentInfo();
    this.hideUserNavbar();
    this.getIdByUrl();
    if (this.userId) {
      this.formFromEditing = true;
      this.loadUserInfo(this.userId);
    }
    this.initFormImpl();
    this.initFormValues();
  }

  private loadUserInfo(id: number): void {
    this.serviceApi.getById(id).subscribe((result)=>{
      console.log("resultado da requisicao de usuario:\n" + result);
      this.user = result;
    })
  }

  private initComponentInfo(): void {
    this.componentInfo = {
      name: "user-frm",
      serviceApi: this.serviceApi,
      onSave: {
        onSucess: {
          action: () => {
            this.router.navigate(['home/users']);
          },
          toast: this.toastService.create({
            title: "ok",
            text: "Usuário salvo com sucesso!"
          })
        },
        onError: {
          action: () => {
            console.log("Erro ao salvar usuario!");
          },
          toast: this.toastService.create({
            title: "ok",
            text: "Usuário salvo com sucesso!"
          })
        }
      }
    }
  }

  getIdByUrl(): void {
    this.route.params.subscribe(params => this.userId = params['id']);
  }

  initFormImpl(): void {
    this.initFormBuilder();
  }

  initFormBuilder(): void {
    if (!this.user){
      this.user = new User();
    }
    let valueDefault = "";

    this.userForm = this.fb.group({
      login: [this.user.login, [Validators.required]],
      password: [this.user.password, [Validators.required]],
      createDate: ['2020-08-01T20:00:00', []],
      permission: [this.user.permission, [Validators.required]],
      active: [this.user.active, []],
      customer: [this.user.customer, []]
    });
  }

  private initFormValues(): void {
    // this.formCustom = new FormField();

    let group = new FormGroupSerializer();

    let formField = new FormField({
      id: "login",
      label: "Login",
      type: "text",
      row: "1"
    });

    group.fields.push(formField);

    formField = new FormField({
      id: "password",
      label: "Senha",
      type: "password",
      row: "1"
    });

    group.fields.push(formField);

    formField = new FormField({
      id: "permission",
      label: "Permissao",
      type: "select",
      fields: Permission,
      config: {
        label: {size: "col-md-5"}
      }
    });

    group.fields.push(formField);

    this.formModel = new FormSerializer({
      entityName: "Usuário",
      groups: [group]
    });

  }

  hideUserNavbar() {
    this.navbarService.showNavbar(false);
  }

}
