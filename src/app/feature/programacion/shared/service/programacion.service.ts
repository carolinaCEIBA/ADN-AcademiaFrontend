import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Programacion } from '../model/programacion';


@Injectable()
export class ProgramacionService {

  constructor(protected http: HttpService) { }

  public consultar() {
    return this.http.doGet<Programacion[]>(`${environment.endpoint}/resumenProgramaciones`)
    .pipe(map((response: any) => response.data as Programacion[]));
  }

  public guardar(programacion: Programacion) {
    return this.http.doPost<Programacion, boolean>(`${environment.endpoint}/programacion`, programacion);
  }

}
