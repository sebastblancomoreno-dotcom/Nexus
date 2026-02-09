import { Component, OnInit, inject, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CatalogService, Product } from '../../core/services/catalog.service';
import { switchMap } from 'rxjs';
import { SafePipe } from '../../shared/pipes/safe.pipe';

@Component({
    selector: 'app-product-detail',
    standalone: true,
    imports: [CommonModule, RouterLink, SafePipe],
    templateUrl: './product-detail.component.html',
})
export class ProductDetailComponent implements OnInit {
    private route = inject(ActivatedRoute);
    private catalogService = inject(CatalogService);

    product = signal<Product | null>(null);
    loading = signal(true);
    error = signal<string | null>(null);
    showDemo = signal(false);
    isClosing = signal(false);

    @HostListener('window:keydown.escape')
    handleKeyDown() {
        this.closeModal();
    }

    closeModal() {
        if (!this.showDemo()) return;
        this.isClosing.set(true);
        setTimeout(() => {
            this.showDemo.set(false);
            this.isClosing.set(false);
        }, 400); // Matches fadeOutBlur animation duration
    }


    ngOnInit(): void {
        this.route.paramMap.pipe(
            switchMap((params: any) => {
                const id = Number(params.get('id'));
                this.loading.set(true);
                return this.catalogService.getProduct(id);
            })
        ).subscribe({
            next: (val: Product) => {
                this.product.set(val);
                this.loading.set(false);
            },
            error: (err: any) => {
                this.error.set('Product not found or server error');
                this.loading.set(false);
            }
        });
    }
}
