import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { WebJuvenilComponent } from './menu-principal/WebsJuveniles/web-juvenil/web-juvenil.component';

const routes: Routes = [
  { path: '', component: MenuPrincipalComponent },
  { path: 'WebJuvenil', component: WebJuvenilComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
