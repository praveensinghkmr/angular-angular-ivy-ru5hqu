import { Component } from '@angular/core';

@Component({
  selector: 'counter',
  template: `
  <button (click)="increment()">increment</button>
  <div>{{count}}</div>
  <button  (click)="decrement()">decrement</button>
  `,
})
export class CounterComponent {
  // internal state
  public count = 0; // instance data member

  increment() {
    ++this.count;
  }

  decrement() {
    --this.count;
  }
}
