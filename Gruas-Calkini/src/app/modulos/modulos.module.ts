import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarvehiculoComponent } from './agregarvehiculo/agregarvehiculo.component';
import { EditarvehiculoComponent } from './editarvehiculo/editarvehiculo.component';
import { EditargruaComponent } from './editargrua/editargrua.component';
import { AgregargruaComponent } from './agregargrua/agregargrua.component';
import { AgregarchoferComponent } from './agregarchofer/agregarchofer.component';
import { EditarchoferComponent } from './editarchofer/editarchofer.component';



@NgModule({
  declarations: [
    AgregarvehiculoComponent,
    EditarvehiculoComponent,
    EditargruaComponent,
    AgregargruaComponent,
    AgregarchoferComponent,
    EditarchoferComponent
  ],

  exports:[
    AgregarvehiculoComponent,
    EditarvehiculoComponent,
    EditargruaComponent,
    AgregargruaComponent,
    AgregarchoferComponent,
    EditarchoferComponent
  ],

  imports: [
    CommonModule
  ]
})
export class ModulosModule { }
