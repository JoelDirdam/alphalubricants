import { Component, AfterViewInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import $ from 'jquery';
import 'slick-carousel';

@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  imports: [CommonModule]
})
export class ProductsComponent implements AfterViewInit, OnDestroy {
  products = [
    {
      name: 'Alphahydraulic 300',
      image: 'img/products/alphahydraulic300.png',
      url: 'https://alphalubricants.com.mx/alphahydraulic300.pdf',
      description: 'Experimenta el rendimiento excepcional de nuestro aceite de motor SAE 20W50 API CH-4, diseñado para ofrecer una protección superior y un funcionamiento óptimo en una variedad de condiciones. Esta fórmula avanzada cumple con las exigentes especificaciones de la clasificación API CH-4, asegurando una lubricación eficaz y una resistencia excepcional al desgaste para motores diésel modernos. Ya sea en carretera o en entornos de trabajo pesado, nuestro aceite SAE 20W50 garantiza un rendimiento confiable y una vida útil prolongada del motor, brindándote la tranquilidad que necesitas en cada viaje.'
    },
    {
      name: 'SAE 20W50 API CH-4',
      image: 'img/products/sae20w50.png',
      url: 'https://alphalubricants.com.mx/sae20w50.pdf',
      description: 'Descripción del producto SAE 20W50 API CH-4.'
    },
    {
      name: 'SAE 15W40 API CH-4',
      image: 'img/products/sae15w40.png',
      url: 'https://alphalubricants.com.mx/sae15w40.pdf',
      description: 'Descripción del producto SAE 15W40 API CH-4.'
    },
    {
      name: 'Monogrado SAE 50',
      image: 'img/products/monogradosae50.png',
      url: 'https://alphalubricants.com.mx/monogradosae50.pdf',
      description: 'Descripción del producto Monogrado SAE 50.'
    },
    {
      name: 'ALPHA MAXDUTY 15W40 API CI-4',
      image: 'img/products/alphamaxduty.png',
      url: 'https://alphalubricants.com.mx/alphamaxduty.pdf',
      description: 'Descripción del producto ALPHA MAXDUTY 15W40 API CI-4.'
    },
  ];

  filteredProducts = [...this.products]; // Lista temporal de productos filtrados
  selectedProduct: any = null;

  constructor(private cdr: ChangeDetectorRef) { }

  openPDF(url: string) {
    window.open(url, '_blank');
  }

  selectProduct(product: any) {
    this.selectedProduct = product;
    this.filteredProducts = this.products.filter(p => p !== product);
    $('.selected-product-container').hide().fadeIn(500); // Animación de deslizamiento
    this.onResize();
  }

  deselectProduct() {
    this.selectedProduct = null;
    this.filteredProducts = [...this.products];
    this.onResize();
  }

  onProductSelect(event: any) {
    const productName = event.target.value;
    const selectedProduct = this.products.find(product => product.name === productName);
    if (selectedProduct) {
      this.selectProduct(selectedProduct);
    }
  }

  ngAfterViewInit() {
    this.initLayout();
    window.addEventListener('resize', this.onResize.bind(this));
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.onResize.bind(this));
  }

  private initLayout() {
    //const windowWidth = window.innerWidth;
    $('.product-carousel').css({
      'display': 'flex',
      'flex-wrap': 'wrap',
    }).children().css({
      'flex': '1 0 100%',
      'max-width': '300px',
      'margin': '10px'
    });
  }

  private onResize() {
    this.cdr.detectChanges(); // Forzar la detección de cambios
    setTimeout(() => {
      this.initLayout();
    }, 0);
  }
}
