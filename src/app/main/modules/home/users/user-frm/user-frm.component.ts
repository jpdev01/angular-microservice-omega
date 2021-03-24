
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/main/shared/model/user.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { FormField } from '../../../../shared/model/form-field.model';
import { FormModel } from '../../../../shared/model/form-model.model';
import { InterfaceRule } from 'src/app/main/shared/model/interface-rule.model';
import { UserService } from '../../../../shared/service/user.service';
import { UserApiService } from '../../../../shared/service/user-api.service';
import { Permission } from 'src/app/main/shared/enum/permission.enum';

@Component({
  selector: 'app-user-frm',
  templateUrl: './user-frm.component.html',
  styleUrls: ['./user-frm.component.css']
})
export class UserFrmComponent implements OnInit {

  userId: number;
  user: User;
  public userForm: FormGroup;
  formModel: FormModel;
  navbarRule;
  formFromEditing = false;
  componentInfo: any;

  constructor(private route: ActivatedRoute, public service: UserService, public serviceApi: UserApiService, private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.initComponentInfo();
    this.hideUserNavbar();
    this.getIdByUrl();
    if (this.userId) {
      this.formFromEditing = true;
      // this.loadUserInfo(this.userId);
    }
    this.initFormImpl();
    this.initFormValues();
  }

  private initComponentInfo(): void {
    this.componentInfo = { name: "user-frm", serviceApi: this.serviceApi };
  }

  getIdByUrl(): void {
    this.route.params.subscribe(params => this.userId = params['id']);
  }

  initFormImpl(): void {
    this.initFormBuilder();
  }

  initFormBuilder(): void {
    let valueDefault = "";

    this.userForm = this.fb.group({
      login: [valueDefault, [Validators.required]],
      password: [valueDefault, [Validators.required]],
      createDate: ['2020-08-01T20:00:00', []],
      permission: ['', [Validators.required]],
      active: ['', []],
      customer: ['', []]
    });
  }

  private initFormValues(): void {
    // this.formCustom = new FormField();

    let groups = [];

    let formField = new FormField({
      id: "login",
      label: "Login",
      type: "text",
      row: "1"
    });

    groups.push(formField);

    formField = new FormField({
      id: "password",
      label: "Senha",
      type: "password",
      row: "1"
    });

    groups.push(formField);

    formField = new FormField({
      id: "permission",
      label: "Permissao",
      type: "select",
      fields: Permission,
      config: {
        label: {size: "col-md-5"}
      }
    });

    groups.push(formField);

    this.formModel = new FormModel({
      fields: [groups]
    });





  }

  hideUserNavbar() {
    this.service.hideUserNavbar();
  }

}
