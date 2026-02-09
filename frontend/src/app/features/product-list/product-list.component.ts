import { Component, inject, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { CatalogService, Product } from '../../core/services/catalog.service';

import { RouterLink } from '@angular/router';
import { SafePipe } from '../../shared/pipes/safe.pipe';

@Component({
    selector: 'app-product-list',
    standalone: true,
    imports: [CommonModule, RouterLink, SafePipe],
    templateUrl: './product-list.component.html',
})
export class ProductListComponent {
    private catalogService = inject(CatalogService);

    products = toSignal(this.catalogService.getProducts(), { initialValue: [] });

    selectedProduct = signal<Product | null>(null);
    showDemo = signal(false);
    isClosing = signal(false);

    @HostListener('window:keydown.escape')
    handleKeyDown() {
        this.closeModal();
    }

    openDemo(event: Event, product: Product) {
        event.stopPropagation(); // Prevent navigating to detail
        this.selectedProduct.set(product);
        this.showDemo.set(true);
    }

    closeModal() {
        if (!this.showDemo()) return;
        this.isClosing.set(true);
        setTimeout(() => {
            this.showDemo.set(false);
            this.isClosing.set(false);
            this.selectedProduct.set(null);
        }, 400);
    }
}
