import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from 'src/app/core/services/http.service';
import { ListarProgramacionComponent } from './listar-programacion.component';
import { ProgramacionService } from '@programacion/shared/service/programacion.service';
import { Programacion } from '@programacion/shared/model/programacion';

describe('ListarProgramacionComponent', () => {
  let component: ListarProgramacionComponent;
  let fixture: ComponentFixture<ListarProgramacionComponent>;
  let productoService: ProgramacionService;
  const listaProgramacion: Programacion[]= [{
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
    }];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ListarProgramacionComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [ProgramacionService, HttpService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarProgramacionComponent);
    component = fixture.componentInstance;
    productoService = TestBed.inject(ProgramacionService);
    spyOn(productoService, 'consultar').and.returnValue(
      of(listaProgramacion)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.listaProgramacion.subscribe(resultado => {
      expect(2).toBe(resultado.length);
    });
  });

});
