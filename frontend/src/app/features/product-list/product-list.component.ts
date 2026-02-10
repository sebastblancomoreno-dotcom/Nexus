import { Component, inject, signal, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogService, Product } from '../../core/services/catalog.service';
import { LoadingService } from '../../core/services/loading.service';

import { RouterLink } from '@angular/router';
import { SafePipe } from '../../shared/pipes/safe.pipe';

@Component({
    selector: 'app-product-list',
    standalone: true,
    imports: [CommonModule, RouterLink, SafePipe],
    templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit {
    private catalogService = inject(CatalogService);
    loadingService = inject(LoadingService);

    products = signal<Product[]>([]);
    loading = signal(true);
    selectedProduct = signal<Product | null>(null);
    showDemo = signal(false);
    isClosing = signal(false);

    ngOnInit() {
        this.loadingService.show();
        this.loadProductsWithRetry();
    }

    private loadProductsWithRetry(attempt: number = 1, maxAttempts: number = 10) {
        this.catalogService.getProducts().subscribe({
            next: (data: Product[]) => {
                this.products.set(data || []);
                this.loading.set(false);
                this.loadingService.hide();
            },
            error: (err: unknown) => {
                console.log(`Attempt ${attempt}/${maxAttempts} - Catalog service not ready... (waiting 30s)`);

                if (attempt < maxAttempts) {
                    // Retry after 30 seconds
                    setTimeout(() => {
                        this.loadProductsWithRetry(attempt + 1, maxAttempts);
                    }, 30000);
                } else {
                    // Max attempts reached (5 minutes), show error
                    console.error('Catalog service unavailable after 5 minutes:', err);
                    this.loading.set(false);
                    this.loadingService.hide();
                }
            }
        });
    }

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
