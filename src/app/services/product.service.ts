import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products = [
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
      description: 'El aceite 20W50 API CH-4 es un lubricante multigrado formulado para mantener el motor limpio y protegido. Sus aditivos avanzados aseguran una excelente protección contra depósitos y desgaste, resistiendo el espesamiento por calor. Este aceite es adecuado para una amplia variedad de aplicaciones de servicio pesado, incluyendo motores turbo-cargados, proporcionando un rendimiento confiable en condiciones exigentes.'
    },
    {
      name: 'SAE 15W40 API CH-4',
      image: 'img/products/sae15w40.png',
      url: 'https://alphalubricants.com.mx/sae15w40.pdf',
      description: 'El aceite SAE 15W40 API CH-4 es un lubricante multigrado de alta calidad, diseñado específicamente para la lubricación de motores diésel de 4 tiempos, tanto turbocargados como de aspiració natural.Este aceite cumple con las especificaciones API CH- 4 y anteriores, proporcionando un rendimiento superior en una variedad de condiciones operativas.'
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
        description: 'El aceite ALPHA MAXDUTY 15W40 API CI-4 es un lubricante multigrado de nueva generación, formulado con aceites básicos altamente refinados y un avanzado paquete de aditivos que satisfacen los más altos estándares de calidad y desempeño de los motores diésel de medio rendimiento y bajas emisiones, incluyendo aquellos con sistemas de Recirculación de Gases de Escape (EGR).'
},
  ];

  private selectedProduct: any = null;

getProducts() {
  return this.products;
}

setSelectedProduct(product: any) {
  this.selectedProduct = product;
}

getSelectedProduct() {
  return this.selectedProduct;
}
}
