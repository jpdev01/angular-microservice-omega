import { NavbarService } from 'src/app/main/shared/service/navbar.service';
import { ToastNotificationService } from 'src/app/main/shared/service/toast-notification.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryApiService } from './../../../../shared/service/api/category-api.service';
import { Component, Input, OnInit } from '@angular/core';
import { EntityFormInterfaceComponent } from 'src/app/main/shared/interface/entity-form.interface';
import { Category } from 'src/app/main/shared/model/category.model';
import { PatternUrl } from 'src/app/main/shared/utils/PatternUrl.model';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { FormSerializer } from 'src/app/main/shared/model/form-serializer.model';
import { FormGroupSerializer } from 'src/app/main/shared/model/form-group-serializer.model';
import { FormField } from 'src/app/main/shared/model/form-field.model';
import { FieldFormType } from 'src/app/main/shared/enum/field-form-type.enum';

@Component({
  selector: 'app-categories-frm',
  templateUrl: './categories-frm.component.html',
  styleUrls: ['./categories-frm.component.css']
})
export class CategoriesFrmComponent implements OnInit, EntityFormInterfaceComponent {
  @Input() categoryId;
  category: Category;
  public categoryFrm: FormGroup;
  formModel: FormSerializer;

  constructor(private serviceApi: CategoryApiService,
    private router: Router,
    private toastService: ToastNotificationService,
    private route: ActivatedRoute,
    private fb: FormBuilder, private navbarService: NavbarService) { }

  ngOnInit(): void {
    //this.applyInterfaceRule();
    this.getIdByUrl();
    if (this.categoryId) {
      this.loadEntityInfo(this.categoryId);
    } else {
      this.initFormBuilder();
    }
    this.initFormStructure();
  }

  getIdByUrl(): void {
    if (!this.categoryId) {
      this.route.params.subscribe(params => this.categoryId = params['id']);
    }
  }
  loadEntityInfo(id: number): void {
    this.serviceApi.getById(id).subscribe((result) => {
      this.category = result;
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
      type: FieldFormType.TEXTAREA
    });

    group.fields.push(formField);

    this.formModel = new FormSerializer({
      entityName: "Categoria",
      groups: [group],
      serviceApi: this.serviceApi,
      onSave: this.getOnSave(),
      configs: { withHeader: false, hideNavbar: false }
    });
  }
  initFormBuilder(): void {
    if (!this.category) {
      this.category = new Category();
    }

    this.categoryFrm = this.fb.group({
      name: [this.category.name, [Validators.required]],
      description: [this.category.description, [Validators.required]]
    });
  }
  applyInterfaceRule(): void {
    this.navbarService.showNavbar(false);
  }
  getOnSave(): { onSucess: {}, onError: {} } {
    return {
      onSucess: {
        action: () => {
          this.router.navigate(['home/' + new PatternUrl().category]);
        },
        toast: this.toastService.create({
          title: "ok",
          text: "Categoria salva com sucesso!"
        })
      },
      onError: {
        action: () => {
          console.log("Erro ao salvar categoria!");
        },
        toast: this.toastService.create({
          title: "ok",
          text: "Erro ao salvar categoria!"
        })
      }
    }
  }



}
