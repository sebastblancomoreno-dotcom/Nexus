import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './features/product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ProductListComponent],
  template: `<app-product-list></app-product-list>`,
  styles: [],
})
export class AppComponent {
  title = 'frontend';
}
