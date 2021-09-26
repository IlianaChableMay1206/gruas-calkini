import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import {SharedModule} from "./shared/shared.module";

import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { ModulosModule } from './modulos/modulos.module';



@NgModule({
  declarations: [
    AppComponent,
    
    
  ],
  imports: [
    BrowserModule,
    routing,
    SharedModule,
    PagesModule,
    ModulosModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
