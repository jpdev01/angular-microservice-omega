import { Component, Input, OnInit } from '@angular/core'
declare var $: any;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  size = 'xl';
  @Input() modalTitle;
  @Input() id;

  constructor() { }

  ngOnInit(): void {
    console.log(this.modalTitle);

  }

}
