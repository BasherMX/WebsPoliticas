import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  botones = [
    {
      text: 'Opcion 1',
      route: 'campañas/opcion1'
    }
  ]

  constructor(private router: Router){}

  goTo(ruta: string){
    this.router.navigateByUrl('/'+ruta);

  }

}
