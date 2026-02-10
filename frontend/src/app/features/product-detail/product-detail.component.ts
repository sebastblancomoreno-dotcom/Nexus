import { Component, OnInit, inject, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CatalogService, Product } from '../../core/services/catalog.service';
import { LoadingService } from '../../core/services/loading.service';
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
    loadingService = inject(LoadingService);

    product = signal<Product | null>(null);
    loading = signal(true);
    error = signal<string | null>(null);
    showDemo = signal(false);
    showImageModal = signal(false);
    selectedImage = signal<string | null>(null);
    isClosing = signal(false);

    @HostListener('window:keydown.escape')
    handleKeyDown() {
        this.closeModal();
        this.closeImageModal();
    }

    closeModal() {
        if (!this.showDemo()) return;
        this.isClosing.set(true);
        setTimeout(() => {
            this.showDemo.set(false);
            this.isClosing.set(false);
        }, 400); // Matches fadeOutBlur animation duration
    }

    openImageModal(url: string) {
        // Don't show modal if it's the same as the main image (redundant)
        const p = this.product();
        if (p && url === p.imageUrl) {
            this.showImageModal.set(false);
            return;
        }

        this.selectedImage.set(url);
        this.showImageModal.set(true);
    }

    closeImageModal() {
        this.showImageModal.set(false);
        this.selectedImage.set(null);
    }


    onImageError(event: any, fallbackUrl: string, index?: number) {
        const img = event.target as HTMLImageElement;
        // Prevent infinite loops if fallback is also broken
        if (img.src === fallbackUrl) return;

        img.src = fallbackUrl;

        // Permanently fix the URL in the local product state so the modal also gets the fallback
        const p = this.product();
        if (p && p.extraImageUrls && index !== undefined) {
            p.extraImageUrls[index] = fallbackUrl;
        }

        // If this image is currently displayed in the modal, update the modal signal
        if (this.selectedImage() && this.selectedImage() !== fallbackUrl) {
            this.selectedImage.set(fallbackUrl);
        }
    }


    ngOnInit(): void {
        this.loadingService.show();
        this.route.paramMap.pipe(
            switchMap((params: any) => {
                const id = Number(params.get('id'));
                return this.catalogService.getProduct(id);
            })
        ).subscribe({
            next: (val: Product) => {
                this.product.set(val);
                this.loading.set(false);
                this.loadingService.hide();
            },
            error: (err: any) => {
                console.error('Detail load error:', err);
                this.error.set('Product not found or server error');
                this.loading.set(false);
                this.loadingService.hide();
            }
        });
    }
}
