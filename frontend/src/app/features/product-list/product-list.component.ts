import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { CatalogService } from '../../core/services/catalog.service';

import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-product-list',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './product-list.component.html',
})
export class ProductListComponent {
    private catalogService = inject(CatalogService);

    // Create a Signal from the Observable
    products = toSignal(this.catalogService.getProducts(), { initialValue: [] });
}
