import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Aprendiz } from '../model/aprendiz';


@Injectable()
export class AprendizService {

  constructor(protected http: HttpService) { }

  public consultar() {
    return this.http.doGet<Aprendiz[]>(`${environment.endpoint}/resumenAprendices`)
    .pipe(map((response: any) => response.data as Aprendiz[]));
  }

  public guardar(aprendiz: Aprendiz) {
    return this.http.doPost<Aprendiz, boolean>(`${environment.endpoint}/aprendiz`, aprendiz);
  }

}


