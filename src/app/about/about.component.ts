import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ContactSecComponent } from '../contact/contact-sec/contact-sec.component';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ContactSecComponent, CarouselModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  aboutItems = [
    {
      image: '/img/about/mision.png',
      title: 'Misión',
      description: 'Nuestra misión es brindar productos lubricantes de alta calidad que mejoren el rendimiento y la durabilidad de los motores, ofreciendo a nuestros clientes la tranquilidad de saber que sus vehículos y equipos están protegidos con lo mejor.'
    },
    {
      image: '/img/about/vision.png',
      title: 'Visión',
      description: 'Ser la marca líder en aceites y lubricantes, reconocida por nuestra innovación, calidad y compromiso con la satisfacción del cliente.'
    },
    {
      image: '/img/about/valores.png',
      title: 'Valores',
      description: 'Calidad: Altos estándares de calidad en todos nuestros productos. Innovación: Tecnología desarrollada para soluciones avanzadas para las necesidades de nuestros clientes. Sostenibilidad: Estamos comprometidos con prácticas sostenibles que minimicen nuestro impacto ambiental.'
    }
  ];

  autoplayInterval: number | null = 5000;

  ngOnInit() {
    // cualquier lógica adicional que necesites
  }

  ngAfterViewInit() {
    // Manipulación del DOM con jQuery
    //console.log($('.p-ripple'));
    $('.p-ripple').css({
      'background-color': 'white',
    });
    $('.p-ripple').css({
      'background-color': 'white',
    });
  }
}
