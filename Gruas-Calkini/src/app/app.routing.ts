// IMPORTS NECESARIOS
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";


//IMPORTAR COMPONENTES
import { AgregarComponent } from "./pages/agregar/agregar.component";
import { ChoferesComponent } from "./pages/choferes/choferes.component";
import { GruasComponent } from "./pages/gruas/gruas.component";
import { VehiculosComponent } from "./pages/vehiculos/vehiculos.component";
import { AgregarvehiculoComponent } from "./modulos/agregarvehiculo/agregarvehiculo.component";
import { EditarvehiculoComponent } from "./modulos/editarvehiculo/editarvehiculo.component";
import { EditargruaComponent } from "./modulos/editargrua/editargrua.component";
import { EditarchoferComponent } from "./modulos/editarchofer/editarchofer.component";
import { AgregargruaComponent } from "./modulos/agregargrua/agregargrua.component";
import { AgregarchoferComponent } from "./modulos/agregarchofer/agregarchofer.component";

//DEFINIR RUTAS
const appRoutes: Routes = [
    { path: '', component: AgregarComponent },
    { path: 'vehiculos', component: VehiculosComponent },
    { path: 'gruas', component: GruasComponent },
    { path: 'choferes', component: ChoferesComponent },
    { path: 'agregarvehiculo', component: AgregarvehiculoComponent },
    { path: 'agregargrua', component: AgregargruaComponent },
    { path: 'agregarchofer', component: AgregarchoferComponent },
    { path: 'editarvehiculo', component: EditarvehiculoComponent },
    { path: 'editargrua', component: EditargruaComponent },
    { path: 'editarchofer', component: EditarchoferComponent }
    
];

//EXPORTAR CONFIGURACIÓN
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
