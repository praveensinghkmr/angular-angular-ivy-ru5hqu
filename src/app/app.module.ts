import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CounterComponent } from './counter.component';
import { Test1Component } from './test1.component';
import { ProductComponent } from './products.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    CounterComponent,
    ProductComponent,
    Test1Component,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
