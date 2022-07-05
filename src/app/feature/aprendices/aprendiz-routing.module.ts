import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AprendizComponent } from './components/apendiz/aprendiz.component';
import { RegistrarAprendizComponent } from './components/crear-aprendiz/registrar-aprendiz.component';
import { ListarAprendizComponent } from './components/listar-aprendiz/listar-aprendiz.component';


const routes: Routes = [
  {
    path: '',
    component: AprendizComponent,
    children: [
      {
        path: 'crear',
        component: RegistrarAprendizComponent
      },
      {
        path: 'listar',
        component: ListarAprendizComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AprendizRoutingModule { }