import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from './agregar/agregar.component';
import { VehiculosComponent } from './vehiculos/vehiculos.component';
import { GruasComponent } from './gruas/gruas.component';
import { ChoferesComponent } from './choferes/choferes.component';



@NgModule({
  declarations: [
    AgregarComponent,
    VehiculosComponent,
    GruasComponent,
    ChoferesComponent
  ],
  exports:[
    AgregarComponent,
    VehiculosComponent,
    GruasComponent,
    ChoferesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
