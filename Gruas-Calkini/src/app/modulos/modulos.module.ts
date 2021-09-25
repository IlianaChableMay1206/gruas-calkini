import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarvehiculoComponent } from './agregarvehiculo/agregarvehiculo.component';



@NgModule({
  declarations: [
    AgregarvehiculoComponent
  ],

  exports:[
    AgregarvehiculoComponent
  ],

  imports: [
    CommonModule
  ]
})
export class ModulosModule { }
