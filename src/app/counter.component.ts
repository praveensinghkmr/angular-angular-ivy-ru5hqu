import { Component } from '@angular/core';

@Component({
  selector: 'counter',
  template: `
  <button class="btn btn-primary rounded-circle"(click)="decrement()">-</button>
  <div style="display:inline-block">{{count}}</div>
  <button class="btn btn-primary rounded-circle" (click)="increment()">+</button>
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
