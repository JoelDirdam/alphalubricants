import { Component, AfterViewInit, OnDestroy, ChangeDetectorRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import $ from 'jquery';
import 'slick-carousel';
import { ProductService } from '../services/product.service';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  imports: [CommonModule]
})
export class ProductsComponent implements AfterViewInit, OnDestroy, OnInit {
  products: { name: string; image: string; url: string; description: string; }[] = [];
  filteredProducts: { name: string; image: string; url: string; description: string; }[] = [];
  selectedProduct: any = null;
  
  constructor(private cdr: ChangeDetectorRef, @Inject(ProductService) private productService: ProductService) {
      this.products = this.productService.getProducts();
      this.filteredProducts = [...this.products]; // Lista temporal de productos filtrados
  }

  openPDF(url: string) {
    window.open(url, '_blank');
  }

  selectProduct(product: any) {
    this.selectedProduct = product;
    this.filteredProducts = this.products.filter(p => p !== product);
    $('.selected-product-container').hide().fadeIn(500); // Animación de deslizamiento
    this.scrollToTop(); // Desplazamiento suave hacia arriba
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

  ngOnInit() {
    const selectedProduct = this.productService.getSelectedProduct();
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

  private scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
