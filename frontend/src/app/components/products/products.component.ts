import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { ProductsService } from 'src/app/services/products/products.service';

import { ShoppingcartService } from 'src/app/services/shoppingcart/shoppingcart.service';
import { Product } from 'src/app/models/product.model';
import { OrderLine } from 'src/app/models/orderline.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Array<Product>;
  loading = true;

  constructor(
    private readonly productService: ProductsService,
    private readonly shoppingCartService: ShoppingcartService
  ) { }

  ngOnInit() {
    this.productService.getProducts()
      .pipe(finalize(() => this.loading = false))
      .subscribe((products) => {
        this.products = products;
        console.log(this.products);
      });
  }

  addToShoppingCart(product: Product) {
    console.log(product);
    this.shoppingCartService.addProduct(product);
  }

  checkShoppingCart(product: Product) {
    const orderItem: OrderLine = this.shoppingCartService.inShoppingCart(product);

    if (orderItem) {
      return orderItem.amount;
    } else {
      return 0;
    }
  }

}
