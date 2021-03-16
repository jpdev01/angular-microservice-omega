import { UserService } from './../../../shared/service/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/main/shared/model/user.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import {FormField} from '../../../shared/model/form-field.model';
import {FormGroupCustom} from '../../../shared/model/form-group.model';
import {FormModel} from '../../../shared/model/form-model.model';

@Component({
  selector: 'app-user-frm',
  templateUrl: './user-frm.component.html',
  styleUrls: ['./user-frm.component.css']
})
export class UserFrmComponent implements OnInit {

  userId: number;
  user: User;
  public userForm: FormGroup;
  formCustom: FormModel;

  constructor(private route: ActivatedRoute, private service: UserService, private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.getIdByUrl();
    if (this.userId) {
      this.loadUserInfo(this.userId);
    }
    this.initFormImpl();
    debugger;
  }

  loadUserInfo(id: number): void{
    this.service.getUser(id).subscribe(result => {
      this.user = result[0];
    });
  }

  getIdByUrl(): void{
    this.route.params.subscribe(params => this.userId = params['id']);
  }

  initFormImpl():void {
    this.initFormBuilder();
  }

  initFormBuilder():void {
    let valueDefault = "";

    this.userForm = this.fb.group({
      userLogin: [valueDefault, [Validators.required]],
      userPassword: [valueDefault, [Validators.required]],
      createDate: ['2020-08-01T20:00:00', [Validators.required]],
      permission: ['', [Validators.required]],
      customer: ['', [Validators.required]]
    });
  }

  initFormValues(): void {

  }



  cancel(): void {
    // this.dialogRef.close();
    this.userForm.reset();
  }
}
