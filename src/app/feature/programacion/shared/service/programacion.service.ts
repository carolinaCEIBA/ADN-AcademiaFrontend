import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Programacion } from '../model/programacion';


@Injectable()
export class ProgramacionService {

  constructor(protected http: HttpService) { }

  public consultar() {
    return this.http.doGet<Programacion[]>(`${environment.endpoint}/resumenProgramaciones`)
  }

  public guardar(programacion: Programacion) {
    return this.http.doPost<Programacion, boolean>(`${environment.endpoint}/programacion`, programacion);
  }

}
