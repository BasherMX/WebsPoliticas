import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Title } from '@angular/platform-browser';
import AOS from 'aos';


@Component({
  selector: 'app-web-juvenil',
  templateUrl: './web-juvenil.component.html',
  styleUrls: ['./web-juvenil.component.css']
})
export class WebJuvenilComponent implements OnInit{

  description = "Soy una joven con una gran pasión por hacer una diferencia positiva en el mundo. Me considero una persona creativa y curiosa, siempre buscando nuevas formas de aprender y crecer en mi conocimiento. Soy una líder natural, con habilidades para motivar e inspirar a otros a seguir adelante y alcanzar sus metas. Me enorgullezco de ser una persona empática y compasiva, lo que me permite conectarme con las necesidades de los demás y trabajar en equipo para lograr objetivos comunes. Como candidata juvenil, estoy comprometida con representar y defender los intereses de mi generación y de todas las personas en mi comunidad. Mi visión es un mundo más justo y equitativo, donde cada persona tenga la oportunidad de alcanzar su máximo potencial. Con dedicación y perseverancia, estoy segura de que puedo marcar la diferencia que quiero ver en el mundo.";
  descriptionMobile = "Soy una joven con una gran pasión por hacer una diferencia positiva en el mundo. Me considero una persona creativa y curiosa, siempre buscando nuevas formas de aprender y crecer en mi conocimiento. Soy una líder natural, con habilidades para motivar e inspirar a otros a seguir adelante y alcanzar sus metas. Me enorgullezco de ser una persona empática y compasiva, lo que me permite conectarme con las necesidades de los demás y trabajar en equipo para lograr objetivos comunes.";
  width = 0;

  propuestas  = [
    {
      titulo: 'Programa de becas para jóvenes en situación vulnerable',
      descripcion: 'Crear un programa de becas para jóvenes que viven en situación de pobreza, para que puedan continuar sus estudios y tener un mejor futuro.',
      imagen: 'img_propuesta1.png'
    },
    {
      titulo: 'Fomento al deporte entre jóvenes',
      descripcion: 'Crear programas y actividades deportivas para jóvenes en diferentes colonias de la ciudad, con el objetivo de fomentar un estilo de vida saludable y prevenir la delincuencia.',
      imagen: 'img_propuesta2.png'
    },
    {
      titulo: 'Promoción de la cultura local',
      descripcion: 'Organizar eventos culturales en diferentes partes de la ciudad para fomentar el interés de los jóvenes en la cultura local, así como para promover la identidad y el orgullo de la región.',
      imagen: 'img_propuesta3.png'
    },
    {
      titulo: 'Impulso al emprendimiento juvenil',
      descripcion: 'Crear programas de capacitación y financiamiento para jóvenes que deseen iniciar un negocio, con el objetivo de fomentar la innovación y el desarrollo económico en la ciudad.',
      imagen: 'img_propuesta4.png'
    },
    {
      titulo: 'Prevención de la violencia en el noviazgo',
      descripcion: 'Crear campañas de concientización y programas de apoyo para prevenir la violencia en el noviazgo, con el objetivo de promover relaciones saludables y prevenir la violencia de género.',
      imagen: 'img_propuesta5.png'
    }
  ];

  socialMedia = [
    {
      image: 'instagram.png',
      link: 'https://www.instagram.com/'
    },
    {
      image: 'facebook.png',
      link: 'https://www.facebook.com/'
    },
    {
      image: 'whats.png',
      link: 'https://wa.me/+524492777186?text=Hola'
    }
  ]
 
  AboutMeSection = document.querySelector('#ab_me');

  constructor(private titleService: Title){

  }

  ngOnInit() {
    AOS.init();

    this.width = window.innerWidth;
    document.addEventListener('DOMContentLoaded', () => {
      this.AboutMeSection = document.querySelector('#ab_me');
    });

    this.titleService.setTitle('CONOCEME! | Ana Torrez');
  }
  
  scrollToSection() {
    if (this.AboutMeSection != null) {
      this.AboutMeSection.scrollIntoView({ behavior: 'smooth' });
      console.log('hola');
    }
    console.log('adios');
  }
  
  


}
