import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AgregarComponent } from './agregar/agregar.component';
import { VehiculosComponent } from './vehiculos/vehiculos.component';
import { GruasComponent } from './gruas/gruas.component';
import { ChoferesComponent } from './choferes/choferes.component';






@NgModule({
  declarations: [
    AgregarComponent,
    VehiculosComponent,
    GruasComponent,
    ChoferesComponent,
  ],
  exports:[
    AgregarComponent,
    VehiculosComponent,
    GruasComponent,
    ChoferesComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PagesModule { }
