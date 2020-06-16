import { Injectable } from '@angular/core';
import { OrderLine } from 'src/app/models/orderline.model';
import { ShoppingCart } from 'src/app/models/shoppingcart.model';
import { Product } from 'src/app/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingcartService {
  private readonly shoppingcart: ShoppingCart = { items: [] };

  constructor() {}

  public addProduct(product: Product) {
    const orderItem: OrderLine = this.shoppingcart.items.find((item) => item.product == product);

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
  }

  private updateItemCounter(): void {
    let total = 0;

    for (const item of this.shoppingcart.items) {
      total += item.amount;
    }
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

  inShoppingCart(product: Product): OrderLine {
    return this.shoppingcart.items.find(item => item.product == product);
  }
}
