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
  eformLink: string;
  eform: Eform;

  constructor(
    private route: ActivatedRoute,
    private eformApi: EformApiService
  ) { }

  ngOnInit() {
    this.getEFormByURI();
  }

  private getEFormByURI(){
    this.getURI();
    let patternUrl = new PatternUrl();
    this.eformApi.get(this.eformLink + "/" + patternUrl.eformBuild).subscribe(eform => {
      this.eform = eform;
    })
  }

  private getURI(){
    this.route.params.subscribe(params => this.eformLink = params['eformLink']);
  }

}
