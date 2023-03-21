import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebJuvenilComponent } from './web-juvenil/web-juvenil.component';

const routes: Routes = [
  { path: '', component: WebJuvenilComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
