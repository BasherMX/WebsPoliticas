import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent {

  botones = [
    {
      text: 'Juveniles',
      route: 'WebJuvenil'
    },
    {
      text: 'Informe de Actividades',
      route: 'WebInformes1'
    },
    {
      text: 'Campañas Políticas',
      route: 'campañas'
    }
  ]

  constructor(private router: Router){

  }


  goTo(ruta: string){
    this.router.navigateByUrl('/'+ruta);

  }

}
