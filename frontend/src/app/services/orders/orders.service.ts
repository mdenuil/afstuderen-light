import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from 'src/app/models/order.model';

const urlOrders = 'http://localhost:8083/orders';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private readonly http: HttpClient) { }

  getOrders(): Observable<Array<Order>> {
    return this.http.get<Array<Order>>(urlOrders);
  }
}
