import { Routes } from '@angular/router';
import { ProductListComponent } from './features/product-list/product-list.component';

export const routes: Routes = [
    { path: '', component: ProductListComponent },
    {
        path: 'product/:id',
        loadComponent: () => import('./features/product-detail/product-detail.component').then(m => m.ProductDetailComponent)
    }
];
