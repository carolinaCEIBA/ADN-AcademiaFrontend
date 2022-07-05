import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { RegistrarProgramacionComponent } from './components/crear-programacion/registrar-programacion.component';
import { ListarProgramacionComponent } from './components/listar-programacion/listar-programacion.component';
import { ProgramacionRoutingModule } from './programacion-routing.module';
import { ProgramacionService } from './shared/service/programacion.service';
import { ProgramacionComponent } from './components/programacion/programacion.component';


@NgModule({
  declarations: [
    ListarProgramacionComponent,
    RegistrarProgramacionComponent,
    ProgramacionComponent
  ],
  imports: [
    ProgramacionRoutingModule,
    SharedModule
  ],
  providers: [ProgramacionService]
})
export class ProgramacionModule { }
