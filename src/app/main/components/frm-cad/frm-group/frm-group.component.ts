import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-frm-group',
  templateUrl: './frm-group.component.html',
  styleUrls: ['./frm-group.component.css']
})
export class FrmGroupComponent implements OnInit {

  @Input() group;
  constructor() { }

  ngOnInit() {
    // inutilizavel -> futura feature.
  }

}
