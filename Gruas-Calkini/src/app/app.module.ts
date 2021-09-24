import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import {SharedModule} from "./shared/shared.module";

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { VehiculosComponent } from './pages/vehiculos/vehiculos.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    HomeComponent,
    ErrorComponent,
    AgregarComponent,
    VehiculosComponent,
    
  ],
  imports: [
    BrowserModule,
    routing,
    SharedModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
