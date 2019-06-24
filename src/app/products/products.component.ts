import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, throwError } from 'rxjs';
import { first } from 'rxjs/operators';

import { User, Product, ProductTranslated } from '@@/_models';
import { ProductService, AuthenticationService } from '@@/_services';

@Component({ templateUrl: 'products.component.html' })
export class ProductsComponent implements OnInit, OnDestroy {
    products: Product[];
    currentUser: User;
    currentUserSubscription: Subscription;
    productsTranslated: ProductTranslated[] = [];
    constructor(
        private authenticationService: AuthenticationService,
        private productService: ProductService
    ) {
        this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
            this.currentUser = user;
        });
    }

    ngOnInit() {
        this.loadAllProducts();
        this.loadAllProductsTranslated();
    }

    ngOnDestroy() {}

    private loadAllProducts() {
        const locale = 'fr';
        this.productService.getAll(locale).pipe(first()).subscribe(products => {
            this.products = products;
        });
    }
    private loadAllProductsTranslated() {
        this.productService.getAllTranslated().pipe(first()).subscribe(productsTranslated => {
            this.productsTranslated = productsTranslated;
        });
    }
}
