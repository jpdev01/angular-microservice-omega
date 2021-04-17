import { FormField } from './../../../shared/model/form-field.model';
import { ProductsApiService } from './../../../shared/service/products-api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EntityListSerialize } from './../../../shared/serialize/entity-list-serialize.model';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/main/shared/model/product.model';
import { FieldFormType } from 'src/app/main/shared/enum/field-form-type.enum';
import { CookieService} from 'ngx-cookie-service';
import { config } from 'rxjs';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {

  constructor(){

  }

  ngOnInit(){

  }
}

