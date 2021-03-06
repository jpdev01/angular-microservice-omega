import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Live } from 'src/app/shared/model/live.model';
import { LiveService } from 'src/app/shared/service/live.service';

@Component({
  selector: 'app-live-list',
  templateUrl: './live-list.component.html',
  styleUrls: ['./live-list.component.css']
})
export class LiveListComponent implements OnInit {

  // listagem de lives que já aconteceram!
  livesPrevious : Live[];
  livesNext: Live[];
  nextLoaded: boolean = false;
  previousLoaded: boolean = false;

  constructor(
    public liveService: LiveService,
    public sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    // inicialização do componente
    this.getLives();
  }

  getLives() {
    // Faz a requisição para a api externa

    //this.liveService.getLivesWithFlag('previous')
    // terá como retorno um observable. Então iremos definir um subscribe que define o que irá acontecer quando esses dados chegarem dessa requisição da api externa.
    this.liveService.getLivesWithFlag('previous').subscribe(data => {
      // data.content pq o ResponsePageable tem o atributo content, que são as lives.
      this.livesPrevious = data.content;

      this.livesPrevious.forEach(live => {
        live.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(live.liveLink);
        // para cada live
        // atribui um valor para o atributo urlSafe
        // monta uma url segura para que se use ela dentro do html e possa imbutir o link do youtube dentro do html.
        // ver o video bonitinho no card.
      });

      this.previousLoaded = true;
    });

    this.liveService.getLivesWithFlag('nex').subscribe(data => {
      this.livesNext = data.content;
      this.livesPrevious.forEach(live => {
        live.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(live.liveLink);
      });
      this.nextLoaded = true;
    });
  }

}
