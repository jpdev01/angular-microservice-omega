import { Component, OnInit } from '@angular/core';
import { TableComponent } from 'src/app/main/components/table/table.component';
import { InterfaceRule } from 'src/app/main/shared/model/interface-rule.model';
import {NavbarService} from 'src/app/main/shared/service/navbar.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  table;
  navbarShow = false;

  constructor(table: TableComponent, private navbarService: NavbarService) {
    this.table = table;
  }

  ngOnInit(): void {
    this.navbarService.interfaceRuleEmitter.subscribe(
      (interfaceRule: InterfaceRule) => {
        if (interfaceRule.element === 'navbar') {
          if (interfaceRule.show == true) {
            this.navbarShow = true;

          } else {
            this.navbarShow = false;
          }
        }
      }
    );
  }

}
