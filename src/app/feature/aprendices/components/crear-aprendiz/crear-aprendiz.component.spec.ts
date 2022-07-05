import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from 'src/app/core/services/http.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RegistrarAprendizComponent } from './registrar-aprendiz.component';
import { AprendizService } from '../../shared/service/aprendiz.service';

describe('RegistrarAprendizComponent', () => {
  let component: RegistrarAprendizComponent;
  let fixture: ComponentFixture<RegistrarAprendizComponent>;
  let aprendizService: AprendizService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarAprendizComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [AprendizService, HttpService],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarAprendizComponent);
    component = fixture.componentInstance;
    aprendizService = TestBed.inject(AprendizService);
    spyOn(aprendizService, 'guardar').and.returnValue(
      of(true)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.aprendizForm.valid).toBeFalsy();
  });

  it('Registrando aprendiz', () => {
    expect(component.aprendizForm.valid).toBeFalsy();
    component.aprendizForm.controls.id.setValue('001');
    component.aprendizForm.controls.email.setValue('aprendiz test');
    expect(component.aprendizForm.valid).toBeTruthy();

    spyOn(window, 'alert').and.callFake(()=>console.log('ejecuto alert'));
    component.crear();

    expect(window.alert).toHaveBeenCalled();

  });
  it('No Registrar aprendiz', () => {
    expect(component.aprendizForm.valid).toBeFalsy();
    component.aprendizForm.controls.id.setValue('001');
    expect(component.aprendizForm.valid).toBeFalsy();

    spyOn(window, 'alert').and.callFake(()=>console.log('ejecuto alert'));
    component.crear();

    expect(window.alert).not.toHaveBeenCalled();

  });
});
