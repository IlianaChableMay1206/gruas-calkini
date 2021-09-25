// IMPORTS NECESARIOS
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AgregarvehiculoComponent } from "./modulos/agregarvehiculo/agregarvehiculo.component";

//IMPORTAR COMPONENTES
import { AgregarComponent } from "./pages/agregar/agregar.component";
import { ChoferesComponent } from "./pages/choferes/choferes.component";
import { GruasComponent } from "./pages/gruas/gruas.component";
import { VehiculosComponent } from "./pages/vehiculos/vehiculos.component";


//DEFINIR RUTAS
const appRoutes: Routes = [
    { path: '', component: AgregarComponent },
    { path: 'vehiculos', component: VehiculosComponent },
    { path: 'gruas', component: GruasComponent },
    { path: 'choferes', component: ChoferesComponent },
    { path: 'agregarvehiculo', component: AgregarvehiculoComponent }
    
];

//EXPORTAR CONFIGURACIÓN
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
