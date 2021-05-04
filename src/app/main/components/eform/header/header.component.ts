import { UserApiService } from './../../../shared/service/api/user-api.service';
import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { EventsBindingService } from '../events-binding.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() header;

  constructor(
    private api: UserApiService,
    private eformBindingService: EventsBindingService
  ) { }

  ngOnInit() {

  }

  public ok(): void{
    this.eformBindingService.setEventSave(true);
    // if (this.header && this.header.ok && this.header.ok.event){
    //   if (this.header.service && this.header.eform){
    //     this.header.ok.event(this.header.component, this.api, this.header.eform);
    //   } else {
    //     this.header.ok.event(this.header.component);
    //   }
    // } else {
    //   console.log("not save function find");
    // }
  }


}
