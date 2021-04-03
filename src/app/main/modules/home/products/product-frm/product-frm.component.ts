import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EntityFrmAbstract } from 'src/app/main/shared/abstract/entity-frm.abstract';
import { EntityFormInterfaceComponent } from 'src/app/main/shared/interface/entity-form.interface';
import { FormField } from 'src/app/main/shared/model/form-field.model';
import { FormGroupSerializer } from 'src/app/main/shared/model/form-group-serializer.model';
import { FormSerializer } from 'src/app/main/shared/model/form-serializer.model';
import { Product } from 'src/app/main/shared/model/product.model';
import { ProductsApiService } from 'src/app/main/shared/service/products-api.service';
import { ToastNotificationService } from 'src/app/main/shared/service/toast-notification.service';
import { PatternUrl } from 'src/app/main/shared/utils/PatternUrl.model';

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
  navbarRule;

  constructor(
    public route: ActivatedRoute, 
    public serviceApi: ProductsApiService, 
    private router: Router, 
    private toastService: ToastNotificationService,
    private fb: FormBuilder) {
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
  }

  public getOnSave(): {onSucess: {}, onError: {}} {
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
    this.serviceApi.getById(id).subscribe((result)=>{
      this.product = result;
      this.initFormBuilder();
    })
  }

  getIdByUrl(): void {
    this.route.params.subscribe(params => this.productId = params['id']);
  }

  initFormBuilder(): void {
    if (!this.product){
      this.product = new Product();
    }

    this.productForm = this.fb.group({
      name: [this.product.name, []],
      password: [this.product.finalValue, []],
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
      categories: [this.product.categories, []],
      provider: [this.product.provider, []]
    });
  }

  public initFormStructure(): void {
    let group = new FormGroupSerializer();

    let formField = new FormField({
      id: "name",
      label: "Nome",
      type: "text"
    });

    group.fields.push(formField);

    this.formModel = new FormSerializer({
      entityName: "Produto",
      groups: [group],
      serviceApi: this.serviceApi,
      onSave: this.getOnSave()
    });
  }


}
