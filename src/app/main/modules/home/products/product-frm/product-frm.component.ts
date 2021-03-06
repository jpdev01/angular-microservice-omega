import { Category } from 'src/app/main/shared/model/category.model';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EntityFrmAbstract } from 'src/app/main/shared/abstract/entity-frm.abstract';
import { EntityFormInterfaceComponent } from 'src/app/main/shared/interface/entity-form.interface';
import { FormField } from 'src/app/main/shared/model/form-field.model';
import { FormGroupSerializer } from 'src/app/main/shared/model/form-group-serializer.model';
import { FormSerializer } from 'src/app/main/shared/model/form-serializer.model';
import { Mask } from 'src/app/main/shared/model/mask.model';
import { Product } from 'src/app/main/shared/model/product.model';
import { Size } from 'src/app/main/shared/model/size.model';
import { ToastNotificationService } from 'src/app/main/shared/service/toast-notification.service';
import { PatternUrl } from 'src/app/main/shared/utils/PatternUrl.model';
import { FieldFormType } from '../../../../shared/enum/field-form-type.enum';
import {CheckboxInputService } from '../../../../shared/service/form/checkbox-input.service';
import { Provider } from 'src/app/main/shared/model/provider.model';
import { ProductsApiService } from 'src/app/main/shared/service/api/products-api.service';

@Component({
  selector: 'app-product-frm',
  templateUrl: './product-frm.component.html',
  styleUrls: ['./product-frm.component.css']
})
export class ProductFrmComponent extends EntityFrmAbstract implements OnInit, EntityFormInterfaceComponent {
  product: Product;
  productId: number;
  public productForm: FormGroup;
  formModel: FormSerializer;

  constructor(
    public route: ActivatedRoute,
    public serviceApi: ProductsApiService,
    private router: Router,
    private toastService: ToastNotificationService,
    private fb: FormBuilder,
    private checkboxInputService: CheckboxInputService) {
    super(route, serviceApi);
  }

  ngOnInit(): void {
    this.getIdByUrl();
    if (this.productId) {
      console.log("is editing! code user:" + this.productId);
      this.loadEntityInfo(this.productId);
    } else {
      this.initFormBuilder();
    }
    this.initFormStructure();
    this.populateCategoriesArray();

  }

  public getOnSave(): { onSucess: {}, onError: {} } {
    return {
      onSucess: {
        action: () => {
          this.router.navigate(['home/' + new PatternUrl().user]);
        },
        toast: this.toastService.create({
          title: "ok",
          text: "Produto salvo com sucesso!"
        })
      },
      onError: {
        action: () => {
          console.log("Erro ao salvar usuario!");
        },
        toast: this.toastService.create({
          title: "Erro",
          text: "Erro ao salvar produto!"
        })
      }
    }
  }

  public loadEntityInfo(id: number): void {
    this.serviceApi.getById(id).subscribe((result) => {
      this.product = result;
      this.initFormBuilder();
      this.initArrayCategories();
    })
  }

  getIdByUrl(): void {
    this.route.params.subscribe(params => this.productId = params['id']);
  }

  initFormBuilder(): void {
    if (!this.product) {
      this.product = new Product();
    }
    this.product.provider = this.product.provider ? this.product.provider : new Provider();
    this.product.categories = this.product.categories ? this.product.categories : [new Category()];

    this.productForm = this.fb.group({
      name: [this.product.name, []],
      finalValue: [this.product.finalValue, []],
      initialValue: [this.product.initialValue, []],
      description: [this.product.description, []],
      qtde: [this.product.qtde, []],
      color: [this.product.color, []],
      genre: [this.product.genre, []],
      entryDate: [this.product.entryDate, []],
      style: [this.product.style, []],
      size: [this.product.size, []],
      size2: [this.product.size2, []],
      code: [this.product.code, []],
      categories: this.fb.array([]),
      provider: this.fb.group({
        //before is providerId, providerName, etc.
        id: [this.product.provider.id],
        name: [this.product.provider.name],
        description: [this.product.provider.description, []]
      })
    });
  }

  public initFormStructure(): void {
    let group1 = new FormGroupSerializer();

    group1.fields = [
      new FormField({
        id: "name",
        label: "Nome",
        type: FieldFormType.TEXT
      }),
      new FormField({
        id: "code",
        label: "C??digo de barras",
        type: FieldFormType.NUMBER
      }),
      new FormField({
        id: "finalValue",
        label: "Valor",
        mask: new Mask().money,
        type: FieldFormType.TEXT
      }),
      new FormField({
        id: "qtde",
        label: "Quantidade",
        type: FieldFormType.SELECT,
        fields: this.getQtdeProducts()
      }),
      new FormField({
        id: "genre",
        label: "G??nero",
        type: FieldFormType.SELECT,
        fields: ['M', 'F', 'Unissex']
      }),
      new FormField({
        id: "color",
        label: "Cor",
        type: FieldFormType.TEXT
      }),
      new FormField({
        id: "size",
        label: "Tamanho",
        type: FieldFormType.SELECT,
        fields: new Size().size
      }),
      new FormField({
        id: "size2",
        label: "Tamanho",
        type: FieldFormType.SELECT,
        fields: new Size().size2
      })
    ];

    let group2 = new FormGroupSerializer();
    group2.fields = [
      new FormField({
        id: "entryDate",
        label: "Data de entrada",
        type: FieldFormType.DATE
      }),
      new FormField({
        id: "initialValue",
        label: "Valor inicial",
        type: FieldFormType.TEXT,
        mask: new Mask().money
      }),
      new FormField({
        id: "provider",
        label: "Fornecedor",
        type: FieldFormType.LIST,
        formGroupName: 'provider',
        listOptions: '<app-providers-list></app-providers-list>'
      }),
      new FormField({
        id: "categories",
        label: "Categorias",
        type: FieldFormType.LIST,
        formGroupName: 'categories',
        listOptions: '<app-categories-list></app-categories-list>'
      })
    ];


    this.formModel = new FormSerializer({
      entityName: "Produto",
      groups: [group1, group2],
      serviceApi: this.serviceApi,
      onSave: this.getOnSave()
    });
  }

  private getQtdeProducts(): any[] {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  }

  // private getQtdeProducts(): {fields: any[]} {
  //   return {
  //     fields: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  //   };
  // }

  createCategoryFormGroup(category: Category): FormControl {
    if (!category){
      category = new Category();
    }
    return this.fb.control({
      id: category.id,
      name: category.name,
      description: category.description
    });
  }

  addCategoryToFormGroup(category: Category){
    (<FormArray>this.productForm.controls['categories']).push(
      this.createCategoryFormGroup(category)
    );
  }

  populateCategoriesArray(){
    this.checkboxInputService.getOnSelect().subscribe((event) => {
      let categoryId = event.target.value;
      let category = new Category({
        id: categoryId
      });
      this.addCategoryToFormGroup(category);
    });
  }

  initArrayCategories(): void{
    let categories = this.product.categories;
    if (categories){
      categories.forEach((category) => {
        this.addCategoryToFormGroup(category);
      })
    }
  }


}
