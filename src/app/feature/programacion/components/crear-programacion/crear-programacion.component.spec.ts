import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from 'src/app/core/services/http.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RegistrarProgramacionComponent } from './registrar-programacion.component';
import { ProgramacionService } from '../../shared/service/programacion.service';

describe('RegistrarProgramacionComponent', () => {
  let component: RegistrarProgramacionComponent;
  let fixture: ComponentFixture<RegistrarProgramacionComponent>;
  let programacionService: ProgramacionService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarProgramacionComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [ProgramacionService, HttpService],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarProgramacionComponent);
    component = fixture.componentInstance;
    programacionService = TestBed.inject(ProgramacionService);
    spyOn(programacionService, 'guardar').and.returnValue(
      of(true)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.programacionForm.valid).toBeFalsy();
  });

  it('Registrando programacion', () => {
    expect(component.programacionForm.valid).toBeFalsy();
    component.programacionForm.controls.id.setValue('001');
    component.programacionForm.controls.email.setValue('Programacion test');
    expect(component.programacionForm.valid).toBeTruthy();

    spyOn(window, 'alert').and.callFake(()=>console.log('ejecuto alert'));
    component.crear();

    expect(window.alert).toHaveBeenCalled();

  });
  it('No Registrar programacion', () => {
    expect(component.programacionForm.valid).toBeFalsy();
    component.programacionForm.controls.id.setValue('001');
    expect(component.programacionForm.valid).toBeFalsy();

    spyOn(window, 'alert').and.callFake(()=>console.log('ejecuto alert'));
    component.crear();

    expect(window.alert).not.toHaveBeenCalled();

  });
});
