import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { CurveCanvasComponent } from '../curve-canvas/curve-canvas.component';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { RouterModule, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Inject } from '@angular/core';
import { TagModule } from 'primeng/tag';
import { PipesModule } from '../pipes/pipes.module';
import { Carousel } from 'primeng/carousel';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CurveCanvasComponent, CarouselModule, ButtonModule, RouterModule, TagModule, PipesModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('productCarousel') productCarousel!: Carousel;

  carouselItems = [
    {
      content: `
        <div class="flex flex-row items-center">
          <img src="/img/home/home_image1.png" alt="Nuestros Productos" class="w-[63%]">
          <a class="ml-4 px-4 py-3 bg-blue-900 text-white rounded-xlg hover:bg-blue-700 transition-colors" href="/products">
            Nuestros productos →
          </a>
        </div>
      `
    }
  ];

  products: any[] = [];
  autoplayInterval: number | null = 5000;

  responsiveOptions = [
    {
      breakpoint: '1199px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '991px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '767px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  responsiveOptions2 = [
    {
      breakpoint: '1199px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '991px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '767px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  constructor(
    @Inject(ProductService) private productService: ProductService, 
    private router: Router,
    private viewportsScroller: ViewportScroller
  ) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  selectProduct(product: any) {
    this.productService.setSelectedProduct(product);
    this.autoplayInterval = null; // Detener el autoplayInterval
    if (this.productCarousel) {
      this.productCarousel.stopAutoplay();
    }
  }

  routeToProducts(product: any, event: Event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
    this.productService.setSelectedProduct(product);
    this.router.navigate(['/products']);
    this.viewportsScroller.scrollToPosition([0, 0]);
  }

  isSelected(product: any) {
    return this.productService.getSelectedProduct() === product;
  }
}
