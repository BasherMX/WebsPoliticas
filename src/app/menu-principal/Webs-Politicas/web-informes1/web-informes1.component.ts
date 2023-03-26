import { Component, OnInit } from '@angular/core';
import Aos from 'aos';

@Component({
  selector: 'app-web-informes1',
  templateUrl: './web-informes1.component.html',
  styleUrls: ['./web-informes1.component.css']
})
export class WebInformes1Component implements OnInit {

  ngOnInit(): void {
    Aos.init();
  }


}
