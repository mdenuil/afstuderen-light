import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { OrdersService } from 'src/app/services/orders/orders.service';

import { Order } from 'src/app/models/order.model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orders: Array<Order>;
  loading = true;

  constructor(
    private readonly orderService: OrdersService
  ) { }

  ngOnInit() {
    this.orderService.getOrders()
      .pipe(finalize(() => this.loading = false))
      .subscribe((orders) => this.orders = orders);
  }

  calculateTotalAmount(order: Order): number {
    let total = 0;

    order.orderLines.forEach((line) => {
      total += line.product.price * line.amount;
    });

    return total;
  }

}
