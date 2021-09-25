// IMPORTS NECESARIOS
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//IMPORTAR COMPONENTES
import { LoginComponent } from "./components/login/login.component";
import { RegistroComponent } from "./components/registro/registro.component";
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';


//DEFINIR RUTAS
const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'inicio', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegistroComponent },
    { path: '**', component: ErrorComponent },
];

//EXPORTAR CONFIGURACIÓN
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
