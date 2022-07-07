import { Component, OnInit } from '@angular/core';
import { Programacion } from '@programacion/shared/model/programacion';
import { ProgramacionService } from '@programacion/shared/service/programacion.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-programacion',
  templateUrl: './listar-programacion.component.html',
  styleUrls: ['./listar-programacion.component.css']
})
export class ListarProgramacionComponent implements OnInit {

  public listaProgramacion: Observable<Programacion[]>;

  constructor(protected programacionService: ProgramacionService) { }

  ngOnInit(): void {
    this.listaProgramacion = this.programacionService.consultar();
  }

}
