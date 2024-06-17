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
    { name: 'Alphahydraulic 300', image: 'assets/alphahydraulic300.png' },
    { name: 'SAE 20W50 API CH-4', image: 'assets/sae20w50.png' },
    { name: 'SAE 15W40 API CH-4', image: 'assets/sae15w40.png' },
    { name: 'Monogrado SAE 50', image: 'assets/monogradosae50.png' },
    { name: 'ALPHA MAXDUTY 15W40 API CI-4', image: 'assets/alphamaxduty.png' },
  ];
}