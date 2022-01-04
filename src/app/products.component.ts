import { Component } from '@angular/core';

@Component({
  selector: 'products',
  template: `
  
  <div *ngFor="let product of products"
  style="border: 1px solid blue; margin:10px; padding:10px; display: inline-block">
  <h2>{{product.name}}</h2>
  <hr/>
  <h4>{{product.price}}</h4>
  <hr/>
  <counter></counter>
  </div>
  `,
})
export class ProductComponent {
  public products = [
    { name: 'Coke', price: 10 },
    { name: 'Pepsi', price: 40 },
    { name: 'Mirinda', price: 30 },
    { name: 'Limca', price: 20 },
  ];
}
