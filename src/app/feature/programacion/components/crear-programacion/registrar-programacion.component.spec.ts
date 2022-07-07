import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from 'src/app/core/services/http.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RegistrarProgramacionComponent } from './registrar-programacion.component';
import { ProgramacionService } from '@programacion/shared/service/programacion.service';


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
    component.programacionForm.controls.clase.setValue(1);
    component.programacionForm.controls.aprendiz.setValue(1);
    component.programacionForm.controls.instructor.setValue(1);
    component.programacionForm.controls.fecha.setValue('2022-07-02');
    component.programacionForm.controls.hora.setValue('13:36 pm');
    component.programacionForm.controls.asistencia.setValue('si');
    expect(component.programacionForm.valid).toBeTruthy();
    expect(component.programacionForm).not.toBeNull();

    spyOn(window, 'alert').and.callFake(()=>console.log('ejecuto alert'));
    component.crear();

    expect(window.alert).toHaveBeenCalled();

  });
  it('No Registrar programacion', () => {
    expect(component.programacionForm.valid).toBeFalsy();
    component.programacionForm.controls.clase.setValue("");
    expect(component.programacionForm.valid).toBeFalsy();

    spyOn(window, 'alert').and.callFake(()=>console.log('ejecuto alert'));
    component.crear();

    expect(window.alert).not.toHaveBeenCalled();

  });
});
