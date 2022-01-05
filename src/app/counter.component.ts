import { Component } from '@angular/core';

@Component({
  selector: 'counter',
  template: `
  <div class="d-flex justify-content-between">
  <button class="btn btn-primary rounded-circle"(click)="decrement()">-</button>
  <div style="display:inline-block">{{count}}</div>
  <button class="btn btn-primary rounded-circle" (click)="increment()">+</button>
  </div>
  
  `,
})
export class CounterComponent {
  // internal state
  public count = 0; // instance data member

  increment() {
    ++this.count;
  }

  decrement() {

    if(this.count > 0)
    --this.count;
  }
}
