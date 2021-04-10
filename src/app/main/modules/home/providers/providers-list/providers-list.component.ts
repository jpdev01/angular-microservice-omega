import { Router } from '@angular/router';
import { EntityListAbstract } from 'src/app/main/shared/abstract/entity-list.abstract';
import { Provider } from './../../../../shared/model/provider.model';
import { EntityListInterfaceComponent } from 'src/app/main/shared/interface/entity-list.interface';
import { Component, Input, OnInit } from '@angular/core';
import { EntityListSerialize } from 'src/app/main/shared/serialize/entity-list-serialize.model';
import { ProviderApiService } from 'src/app/main/shared/service/api/provider-api.service';
import { NavbarService } from 'src/app/main/shared/service/navbar.service';
import { PatternUrl } from 'src/app/main/shared/utils/PatternUrl.model';

@Component({
  selector: 'app-providers-list',
  templateUrl: './providers-list.component.html',
  styleUrls: ['./providers-list.component.css']
})
export class ProvidersListComponent extends EntityListAbstract implements OnInit, EntityListInterfaceComponent {
  public providers: Provider[];
  filter = "";
  listData: EntityListSerialize;
  @Input() config;

  constructor(public serviceApi: ProviderApiService, public navbarService: NavbarService, private router: Router) {
    super(serviceApi, navbarService);
  }

  ngOnInit(): void {
    this.openSecondNavbar();
    this.initListData();
    this.getFilter();
  }


  getEntityList(): any[] {
    throw new Error('Method not implemented.');
  }
  openSecondNavbar(): void {
    super.openSecondNavbar();
  }
  getFilter(): void {
    this.filter = super.getFilter();
  }
  redirectToInfo(id: number): void {
    this.router.navigate(['home/provider/info', id]);
  }
  initListData(): void {
    let tableInfo = {
      header: ["Nome", "Descrição"],
      row: ["name", "description"]
    };

    this.listData = new EntityListSerialize({
      entity: super.getEntityList(),
      tableStructure: tableInfo,
      infoUrl: new PatternUrl().provider
    });
  }

}
