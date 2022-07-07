import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from 'src/app/core/services/http.service';
import { ListarAprendizComponent } from './listar-aprendiz.component';
import { Aprendiz } from '@aprendiz/shared/model/aprendiz';
import { AprendizService } from '@aprendiz/shared/service/aprendiz.service';

describe('ListarAprendizComponent', () => {
  let component: ListarAprendizComponent;
  let fixture: ComponentFixture<ListarAprendizComponent>;
  let aprendizService: AprendizService;
  const listaAprendices: Aprendiz[] = [{
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
    valorcurso: 1500000.0,
    abono: 750000.0
  }];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ListarAprendizComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [AprendizService, HttpService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarAprendizComponent);
    component = fixture.componentInstance;
    aprendizService = TestBed.inject(AprendizService);
    spyOn(aprendizService, 'consultar').and.returnValue(
      of(listaAprendices)
    );
    fixture.detectChanges();
  });

});
