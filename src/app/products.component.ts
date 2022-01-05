import { Component } from '@angular/core';

@Component({
  selector: 'products',
  template: `
  
  <div class = "row">
  <div class = "col-2" *ngFor="let product of products">
  <div class ="card">
    <div class="card-header">{{product.name}}</div>
    <div class="card-body">{{product.price}}</div>
    <div class="card-footer">
    <counter></counter>
  </div>
  </div>
  `,
})
export class ProductComponent {
  public products = [
    { name: 'Coke', price: 10 },
    { name: 'Pepsi', price: 40 },
    { name: 'Mirinda', price: 30 },
    { name: 'Limca', price: 20 },
    { name: 'Fizz', price: 10 },
    { name: 'Sprite', price: 40 },
    { name: 'Maaza', price: 30 },
    { name: 'Jeera', price: 20 },
  ];
}
