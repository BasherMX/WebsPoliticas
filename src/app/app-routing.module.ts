import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { WebInformes1Component } from './menu-principal/Webs-Politicas/web-informes1/web-informes1.component';
import { WebJuvenilComponent } from './menu-principal/WebsJuveniles/web-juvenil/web-juvenil.component';

const routes: Routes = [
  { path: '', component: MenuPrincipalComponent },
  { path: 'WebJuvenil', component: WebJuvenilComponent },
  { path: 'WebInformes1', component: WebInformes1Component },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
