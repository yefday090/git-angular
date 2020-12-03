import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HolaMundoComponent } from './hola-mundo/hola-mundo.component';
import { SolicitudComponent } from './solicitud/solicitud.component';

@NgModule({
  declarations: [
    AppComponent,
    HolaMundoComponent,
    SolicitudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
