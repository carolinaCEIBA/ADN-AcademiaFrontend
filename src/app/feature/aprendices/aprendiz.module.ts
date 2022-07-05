import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { RegistrarAprendizComponent } from './components/crear-aprendiz/registrar-aprendiz.component';
import { AprendizRoutingModule } from './aprendiz-routing.module';
import { AprendizService } from './shared/service/aprendiz.service';
import { ListarAprendizComponent } from './components/listar-aprendiz/listar-aprendiz.component';
import { AprendizComponent } from './components/apendiz/aprendiz.component';


@NgModule({
  declarations: [
    RegistrarAprendizComponent,
    ListarAprendizComponent,
    AprendizComponent
  ],
  imports: [
    AprendizRoutingModule,
    SharedModule
  ],
  providers: [AprendizService]
})
export class AprendizModule { }