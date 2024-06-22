import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  imports: [CommonModule]
})
export class ProductsComponent {
  products = [
    { name: 'Alphahydraulic 300', image: 'img/products/alphahydraulic300.png', url: 'https://alphalubricants.com.mx/alphahydraulic300.pdf' },
    { name: 'SAE 20W50 API CH-4', image: 'img/products/sae20w50.png', url: 'https://alphalubricants.com.mx/sae20w50.pdf' },
    { name: 'SAE 15W40 API CH-4', image: 'img/products/sae15w40.png', url: 'https://alphalubricants.com.mx/sae15w40.pdf' },
    { name: 'Monogrado SAE 50', image: 'img/products/monogradosae50.png', url: 'https://alphalubricants.com.mx/monogradosae50.pdf' },
    { name: 'ALPHA MAXDUTY 15W40 API CI-4', image: 'img/products/alphamaxduty.png', url: 'https://alphalubricants.com.mx/alphamaxduty.pdf'},
  ];

  openPDF(url: string) {
    window.open(url, '_blank');
  }
}
