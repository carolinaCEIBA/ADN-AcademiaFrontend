import { Component, OnInit } from '@angular/core';

import { Aprendiz } from '../../shared/model/aprendiz';
import { AprendizService } from '../../shared/service/aprendiz.service';

@Component({
  selector: 'app-aprendiz',
  templateUrl: './listar-aprendiz.component.html',
  styleUrls: ['./listar-aprendiz.component.css']
})
export class ListarAprendizComponent implements OnInit {

  public listaAprendices: Aprendiz[] = [];

  constructor(protected aprendizService: AprendizService) { }

  ngOnInit() {
    this.aprendizService.consultar().subscribe(
      data=> {this.listaAprendices = data}
    );
  }

}
