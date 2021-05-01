import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Eform } from './../../../shared/model/form/EForm.model';
import { PatternUrl } from '../../../shared/utils/PatternUrl.model';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EformApiService } from '../../../shared/service/api/eform-api.service';

@Component({
  selector: 'app-eform',
  templateUrl: './eform.component.html',
  styleUrls: ['./eform.component.css']
})
export class EformComponent implements OnInit {
  component: string;
  eformModel: Eform;
  withHeader: boolean;
  formGroup: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private eformApi: EformApiService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.getEFormByURI();
  }

  private getEFormByURI() {
    this.getURI();
    let patternUrl = new PatternUrl();
    this.eformApi.get(this.component + "/" + patternUrl.eformBuild).subscribe(eform => {
      this.eformModel = eform;
      console.log(eform);
      this.buildEform();
    });
  }

  private getURI() {
    this.route.params.subscribe(params => this.component = params['component']);
  }

  private buildEform(): void {
    // monta os campos do form group dinamicamente
    this.formGroup = this.fb.group({

    });
    let fields = this.eformModel.fields;
    Object.keys(fields).forEach((key) => {
      this.formGroup.addControl(fields[key].id, new FormControl());
    });
    console.log(this.formGroup);
  }

}
