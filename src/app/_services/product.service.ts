import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Globals } from '@@/app.globals';
import { Product, ProductTranslated } from '@@/_models';

@Injectable({ providedIn: 'root' })
export class ProductService {
    constructor(private http: HttpClient) { }

    getAll(locale: string) {
        return this.http.get<Product[]>(`${Globals.API_ENDPOINT}/products/list/${locale}`);
    }

    getAllTranslated() {
        return this.http.get<ProductTranslated[]>(`${Globals.API_ENDPOINT}/products/list`);
    }

    getById(id: number) {
        return this.http.get(`${Globals.API_ENDPOINT}/admin/products/${id}`);
    }
}
