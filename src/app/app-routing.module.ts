import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrarAprendizComponent } from '@aprendiz/components/crear-aprendiz/registrar-aprendiz.component';
import { ListarAprendizComponent } from '@aprendiz/components/listar-aprendiz/listar-aprendiz.component';
import { SecurityGuard } from '@core/guard/security.guard';
import { HomeComponent } from '@home/home.component';
import { ListarProgramacionComponent } from '@programacion/components/listar-programacion/listar-programacion.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [SecurityGuard]  },
  { path: 'producto', loadChildren: () => import('@producto/producto.module').then(mod => mod.ProductoModule) },
  { path: 'programacion', component: ListarProgramacionComponent},
  { path: 'aprendices', component: ListarAprendizComponent },
  { path: 'registroap', component: RegistrarAprendizComponent},
  { path: 'registropr', loadChildren: () => import('./feature/programacion/programacion.module').then(mod => mod.ProgramacionModule) },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
