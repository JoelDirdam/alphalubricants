import { Component, OnInit, AfterViewInit, ViewChild, HostListener, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurveCanvasComponent } from '../curve-canvas/curve-canvas.component';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { RouterModule, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { TagModule } from 'primeng/tag';
import { PipesModule } from '../pipes/pipes.module';
import { Carousel } from 'primeng/carousel';
import $ from 'jquery';
import { ContactSecComponent } from '../contact/contact-sec/contact-sec.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CurveCanvasComponent, CarouselModule, ButtonModule, RouterModule, TagModule, PipesModule, ContactSecComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('productCarousel') productCarousel!: Carousel;

  carouselItems = [
    {
      content: `
        <div class="flex flex-row items-center">
          <img src="/img/home/home_image1.png" alt="Nuestros Productos" class="w-[63%]">
          <a class="ml-2 md:ml-4 px-4 py-3 bg-blue-900 text-sm md:text-base text-white rounded-xlg hover:bg-blue-700 transition-colors" href="/products">
            Nuestros productos →
          </a>
        </div>
      `
    }
  ];

  products: any[] = [];
  news: any[] = [
    { image: '/img/news/news1.png', title: 'Se parte de nuestro equipo y hazte distribuidor de nuestros productos', description: 'Descripción de la noticia 1' },
    { image: '/img/news/news2.png', title: 'Conoce nuestros centros de distribución', description: 'Descripción de la noticia 2' },
    { image: '/img/news/news3.png', title: '¿Quieres ser parte de nuestro equipo?', description: 'Descripción de la noticia 3' },
    { image: '/img/news/news4.png', title: '¡Gran apertura de nuestra bodega!', description: 'Descripción de la noticia 4' }
  ];
  truncateLength: number = 400;
  autoplayInterval: number | null = 5000;

  responsiveOptions = [
    { breakpoint: '1199px', numVisible: 1, numScroll: 1 },
    { breakpoint: '991px', numVisible: 1, numScroll: 1 },
    { breakpoint: '767px', numVisible: 1, numScroll: 1 }
  ];

  responsiveOptions2 = [
    { breakpoint: '1199px', numVisible: 2, numScroll: 2 },
    { breakpoint: '991px', numVisible: 1, numScroll: 1 },
    { breakpoint: '767px', numVisible: 1, numScroll: 1 }
  ];

  constructor(@Inject(ProductService) private productService: ProductService, private router: Router) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.updateTruncateLength(window.innerWidth);
    if (window.innerWidth < 768) {
      this.news[3]['image'] = '/img/news/news4-rec.png';
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateTruncateLength(event.target.innerWidth);
  }

  updateTruncateLength(width: number) {
    this.truncateLength = width < 768 ? 60 : 400;
  }

  ngAfterViewInit() {
    // Manipulación del DOM con jQuery
    $('.p-ripple').css({
      'background-color': 'white',
    });

    $('.custom-carousel').on('touchstart', (event: any) => {
      const startY = event.touches[0].clientY;
      const startX = event.touches[0].clientX;
      let isVerticalScroll = false;

      const touchMoveHandler = (moveEvent: any) => {
        const currentY = moveEvent.touches[0].clientY;
        const currentX = moveEvent.touches[0].clientX;
        const diffY = currentY - startY;
        const diffX = currentX - startX;

        // Si la diferencia en Y es mayor que en X, significa que el usuario se está desplazando verticalmente
        if (Math.abs(diffY) > Math.abs(diffX)) {
          isVerticalScroll = true;
          // Permitir el desplazamiento vertical
          $(moveEvent.currentTarget).css('overflow-y', 'auto');
        } else {
          // Prevenir el desplazamiento horizontal
          moveEvent.preventDefault();
        }
      };

      const touchEndHandler = (endEvent: any) => {
        if (isVerticalScroll) {
          $(endEvent.currentTarget).css('overflow-y', 'hidden');
        }
        $(endEvent.currentTarget).off('touchmove', touchMoveHandler);
        $(endEvent.currentTarget).off('touchend', touchEndHandler);
      };

      $(event.currentTarget).on('touchmove', touchMoveHandler);
      $(event.currentTarget).on('touchend', touchEndHandler);
    });
  }

  selectProduct(product: any) {
    this.productService.setSelectedProduct(product);
    this.autoplayInterval = null; // Detener el autoplayInterval
    if (this.productCarousel) {
      this.productCarousel.stopAutoplay();
    }
  }

  routeToProducts(product: any, event: Event) {
    event.preventDefault();
    this.productService.setSelectedProduct(product);
    this.router.navigate(['/products']);
  }

  isSelected(product: any) {
    return this.productService.getSelectedProduct() === product;
  }
}
