import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { environment } from 'src/environments/environment';
import { HttpService } from 'src/app/core/services/http.service';
import { HttpResponse } from '@angular/common/http';
import { ProgramacionService } from './programacion.service';

describe('ProgramacionService', () => {
  let httpMock: HttpTestingController;
  let service: ProgramacionService;
  const apiEndpointProgramacionConsulta = `${environment.endpoint}/resumenProgramaciones`;
  const apiEndpointProgramaciones = `${environment.endpoint}/programacion`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProgramacionService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(ProgramacionService);
  });

  it('should be created', () => {
    const programacionService: ProgramacionService = TestBed.inject(ProgramacionService);
    expect(programacionService).toBeTruthy();
  });

  it('deberia listar programaciones', () => {
    const dummyProgramaciones = 
    [{
        clase: 1,
        aprendiz: 1,
        instructor: 1,
        fecha: '2022-07-02',
        hora: '13:36 pm',
        asistencia: 'si'
        }, {
            clase: 1,
            aprendiz: 2,
            instructor: 2,
            fecha: '2022-07-02',
            hora: '13:20 pm',
            asistencia: 'si'
        }]
    ;
    service.consultar().subscribe(programaciones => {
      expect(programaciones.length).toBe(2);
      expect(programaciones).toEqual(dummyProgramaciones);
    });
    const req = httpMock.expectOne(apiEndpointProgramacionConsulta);
    expect(req.request.method).toBe('GET');
    req.flush(dummyProgramaciones);
  });

  it('deberia crear una programacion', () => {
    const dummyProgramacion = {
        clase: 1,
        aprendiz: 2,
        instructor: 2,
        fecha: '2022-07-02',
        hora: '13:20 pm',
        asistencia: 'si'
    };
    service.guardar(dummyProgramacion).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(apiEndpointProgramaciones);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({ body: true }));
  });

});
