import { LiveService } from '../../../../main/shared/service/live.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import * as moment from 'moment';

@Component({
  selector: 'app-live-form-dialog',
  templateUrl: './live-form-dialog.component.html',
  styleUrls: ['./live-form-dialog.component.css']
})
export class LiveFormDialogComponent implements OnInit {

  public liveForm: FormGroup;

  constructor(
    private rest: LiveService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<LiveFormDialogComponent>
  ) { }

  ngOnInit(): void {
    // nosso formulário
    this.liveForm = this.fb.group({
      liveName: ['', [Validators.required]],
      // o formulario é composto pelo campo liveName, seu default é vazio e é obrigatório.
      channelName: ['', [Validators.required]],
      liveLink: ['', [Validators.required]],
      liveDate: ['2020-08-01T20:00:00', [Validators.required]],
      liveTime: ['', [Validators.required]]
    });
  }

  cancel(): void {
    this.dialogRef.close();
    this.liveForm.reset();
  }

  createLive(): void {

    //formatacao de data no padrao do banco

    // transformar em utc
    let formatedDate: moment.Moment = moment.utc(this.liveForm.value.liveDate).local();

    //inserir o novo valor
    let formatDate: string = "YYYY-MM-DD";

    //padrao que o banco quer receber
    this.liveForm.value.liveDate = formatedDate.format(formatDate) + "T" + this.liveForm.value.liveTime;


    this.rest.saveLive(this.liveForm.value).subscribe(result =>{});
    // chama o service e envia a modal como parametro.
    // subscribe define o que será feito depois que a requisição for feita
    this.cancel();
    // fechar a modal
    this.liveForm.reset();
    // resetar o formulario

    // ao final do createLive
    //reload na pagina para carregar a nova live.
    window.location.reload();
  }
}
