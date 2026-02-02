import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Product {
    id: number;
    name: string;
    brand: string;
    description: string;
    price: number;
    imageUrl: string;
    demoUrl: string;
    category: 'SYNTHESIZER' | 'DRUM_MACHINE' | 'EURORACK' | 'CONTROLLER';
    stock: number;
}

@Injectable({ providedIn: 'root' })
export class CatalogService {
    private http = inject(HttpClient);

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>('/api/products');
    }
}
