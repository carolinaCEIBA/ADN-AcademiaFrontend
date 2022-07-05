import { Component, OnInit } from '@angular/core';
import { ProgramacionService } from '../../shared/service/programacion.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrar-programacion',
  templateUrl: './registrar-programacion.component.html',
  styleUrls: ['./registrar-programacion.component.css']
})
export class RegistrarProgramacionComponent implements OnInit {

  programacionForm: FormGroup;
  
  constructor(protected programacionServices: ProgramacionService) { }

  ngOnInit() {
    this.construirFormularioProgramacion();
  }

  crear() {
    if(this.programacionForm.valid){
      this.programacionServices.guardar(this.programacionForm.value).subscribe(()=>window.alert('programacion creada'));
    }
  }

  private construirFormularioProgramacion() {
    this.programacionForm = new FormGroup({
      idprogramacion: new FormControl(''),
      clase: new FormControl('', [Validators.required]),
      aprendiz: new FormControl('', [Validators.required]),
      instructor: new FormControl('', [Validators.required]),
      fecha: new FormControl('', [Validators.required]),
      hora: new FormControl('', [Validators.required]),
      asistencia: new FormControl('', [Validators.required])
    });
  }

}
