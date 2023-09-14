import { Component } from '@angular/core';
import { GifsService } from 'src/app/service/gifs.service';
import { StateService } from 'src/app/service/state.service';
import { Gif } from '../../../interface/gifs.interface';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {
  historyActive: boolean = false;
  historyClose: boolean = false;
  constructor(
    readonly gifsService: GifsService,
    readonly stateService: StateService
  ) { 
    this.stateService.showComponent$.subscribe(
      valor => this.historyActive = valor
    );
    this.stateService.hideComponent$.subscribe(
      valor => this.historyClose = valor
    );
  }
  get gifs(): Gif[] {
    return this.gifsService.resultados;
  }
  copy(link: string): void {
    const textarea = document.createElement('textarea');
    textarea.value = link;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }
}
