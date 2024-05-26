import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExtendidoEuclidesComponent } from './components/extendido-euclides/extendido-euclides.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { AritmeticaModularComponent } from './components/aritmetica-modular/aritmetica-modular.component';
import { InversoAditivoComponent } from './components/inverso-aditivo/inverso-aditivo.component';

@NgModule({
  declarations: [
    AppComponent,
    ExtendidoEuclidesComponent,
    HomeComponent,
    AritmeticaModularComponent,
    InversoAditivoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
