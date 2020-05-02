import { Injectable } from '@angular/core';
import { OrderLine } from 'src/app/models/orderline.model';
import { ShoppingCart } from 'src/app/models/shoppingcart.model';
import { Subject } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { isNgTemplate } from '@angular/compiler';

@Injectable({
  providedIn: 'root',
})
export class ShoppingcartService {
  public amountOfProducts: Subject<number> = new Subject();
  private readonly shoppingcart: ShoppingCart = { items: [] };

  constructor() {}

  public addProduct(product: Product) {
    const orderItem = this.shoppingcart.items.find(
      (item) => item.product.id === product.id
    );

    if (!orderItem) {
      const newOrderItem: OrderLine = {
        amount: 1,
        product,
      };

      this.shoppingcart.items.push(newOrderItem);
    } else {
      orderItem.amount += 1;
    }

    this.updateItemCounter();

    console.log(this.shoppingcart);
  }

  private updateItemCounter(): void {
    let total = 0;

    for (const item of this.shoppingcart.items) {
      total += item.amount;
    }

    this.amountOfProducts.next(total);
  }

  getItems(): Array<OrderLine> {
    return this.shoppingcart.items;
  }

  calculateTotalAmount(): number {
    let total = 0;

    this.shoppingcart.items.forEach((item) => {
      total += item.product.price * item.amount;
    });

    return total;
  }

  inShoppingCart(id: number): OrderLine {
    return this.shoppingcart.items.find(item => item.product.id === id);
  }
}
