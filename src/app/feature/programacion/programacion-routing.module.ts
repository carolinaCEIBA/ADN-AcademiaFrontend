import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrarProgramacionComponent } from './components/crear-programacion/registrar-programacion.component';
import { ListarProgramacionComponent } from './components/listar-programacion/listar-programacion.component';


const routes: Routes = [
  {
    path: '',
    component: RegistrarProgramacionComponent,
    children: [
      {
        path: 'crear',
        component: RegistrarProgramacionComponent
      },
      {
        path: 'listar',
        component: ListarProgramacionComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramacionRoutingModule { }
