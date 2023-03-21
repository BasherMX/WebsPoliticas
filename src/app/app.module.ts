import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebJuvenilComponent } from './menu-principal/WebsJuveniles/web-juvenil/web-juvenil.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { WebJuvenil2Component } from './menu-principal/WebsJuveniles/web-juvenil2/web-juvenil2.component';

@NgModule({
  declarations: [
    AppComponent,
    WebJuvenilComponent,
    MenuPrincipalComponent,
    WebJuvenil2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
