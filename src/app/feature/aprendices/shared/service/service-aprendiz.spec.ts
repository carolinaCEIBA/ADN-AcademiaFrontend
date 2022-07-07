import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { environment } from 'src/environments/environment';
import { HttpService } from 'src/app/core/services/http.service';
import { HttpResponse } from '@angular/common/http';
import { AprendizService } from './aprendiz.service';

describe('AprendizService', () => {
  let httpMock: HttpTestingController;
  let service: AprendizService;
  const apiEndpointAprendizConsulta = `${environment.endpoint}/resumenAprendices`;
  const apiEndpointAprendices = `${environment.endpoint}/aprendiz`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AprendizService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(AprendizService);
  });

  it('should be created', () => {
    const aprendizService: AprendizService = TestBed.inject(AprendizService);
    expect(aprendizService).toBeTruthy();
  });

  it('deberia listar aprendices', () => {
    const dummyAprendices = 
      [{
        id: 1,
        nombre: 'carolina',
        apellido: 'fonseca',
        tipodoc: 'CC',
        documento: '1000791524',
        eps: 'Sura',
        categoria: 'B1',
        valorcurso: 1200000.0,
        abono: 500000.0
      },{
        id: 2,
        nombre: 'daniel',
        apellido: 'santana',
        tipodoc: 'CC',
        documento: '1000791224',
        eps: 'Sanitas',
        categoria: 'C1',
        valorcurso: 1500000,
        abono: 750000
      }]
    ;
    service.consultar().subscribe(aprendices => {
      expect(aprendices.length).toBe(2);
      expect(aprendices).toEqual(dummyAprendices);
    });
    const req = httpMock.expectOne(apiEndpointAprendizConsulta);
    expect(req.request.method).toBe('GET');
    req.flush(dummyAprendices);
  });

  it('deberia crear un aprendiz', () => {
    const dummyAprendiz = {
        id: 1,
        nombre: 'carolina',
        apellido: 'fonseca',
        tipodoc: 'CC',
        documento: '1000791524',
        eps: 'Sura',
        categoria: 'B1',
        valorcurso: 1200000,
        abono: 500000
      };
    service.guardar(dummyAprendiz).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(apiEndpointAprendices);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({ body: true }));
  });

});
