import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ExtendidoEuclidesComponent } from './components/extendido-euclides/extendido-euclides.component';
import { HomeComponent } from './components/home/home.component';
import { AritmeticaModularComponent } from './components/aritmetica-modular/aritmetica-modular.component';
import { InversoAditivoComponent } from './components/inverso-aditivo/inverso-aditivo.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'extendido-euclides',
    component: ExtendidoEuclidesComponent
  },
  {
    path:'aritmetica-modular',
    component: AritmeticaModularComponent
  },
  {
    path: 'inverso-aditivo',
    component: InversoAditivoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
