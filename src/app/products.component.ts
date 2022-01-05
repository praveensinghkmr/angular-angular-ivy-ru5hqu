import { Component } from '@angular/core';

@Component({
  selector: 'products',
  template: `
  
  <div class = "row">
  <!-- responsive UI in bootstrap using grid-->
  <div class = "col-xl-2 col-lg-2 col-md-3 col-sm-6 col-xs-12" *ngFor="let product of products">
  <div class ="card mt-3 mb-3">
    <div class="card-header">{{product.name}}</div>
    
    <div class="card-body">{{product.price}}</div>
    
    <div class="card-footer">
      <counter [max]="product.max"></counter>
    </div>
  </div>
  `,
})
export class ProductComponent {
  public products = [
    { name: 'Coke', price: 10, max : 50 },
    { name: 'Pepsi', price: 40, max : 10},
    { name: 'Mirinda', price: 50, max : 30 },
    { name: 'Limca', price: 20, max : 50 },
    { name: 'Fizz', price: 10 , max : 2},
    { name: 'Sprite', price: 40, max : 5 },
    { name: 'Maaza', price: 30, max : 11 },
    { name: 'Jeera', price: 20, max : 4 },
  ];
}
