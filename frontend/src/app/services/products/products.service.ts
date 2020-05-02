import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';

const urlProducts = 'http://localhost:8083/products/';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private readonly http: HttpClient) { }

  getProducts(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(urlProducts);
  }
}
