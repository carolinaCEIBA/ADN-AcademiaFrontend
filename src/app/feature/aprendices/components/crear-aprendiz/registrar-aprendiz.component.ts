import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { AprendizService } from '../../shared/service/aprendiz.service';


@Component({
  selector: 'app-registrar-aprendiz',
  templateUrl: './registrar-aprendiz.component.html',
  styleUrls: ['./registrar-aprendiz.component.css']
})
export class RegistrarAprendizComponent implements OnInit {

  aprendizForm: FormGroup;
  
  constructor(protected aprendizServices: AprendizService) { }

  ngOnInit() {
    this.construirFormularioAprendiz();
  }

  crear() {
    if(this.aprendizForm.valid){
      this.aprendizServices.guardar(this.aprendizForm.value).subscribe(()=>window.alert('aprendiz creado'));
    }
  }

  private construirFormularioAprendiz() {
    this.aprendizForm = new FormGroup({
      id: new FormControl(''),
      nombre: new FormControl(''),
      apellido: new FormControl(''),
      tipodoc: new FormControl(''),
      documento: new FormControl(''),
      eps: new FormControl(''),
      categoria: new FormControl(''),
      valorcurso: new FormControl(''),
      abono: new FormControl('')

    });
  }
}



