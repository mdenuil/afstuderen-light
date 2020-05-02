import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { ShoppingcartService } from 'src/app/services/shoppingcart/shoppingcart.service';
import { OrderLine } from 'src/app/models/orderline.model';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {
  items: Array<OrderLine> = [];
  totalAmount: number;

  constructor(
    public dialogRef: MatDialogRef<ShoppingcartComponent>,
    private readonly shoppingCartService: ShoppingcartService
  ) {}

  ngOnInit() {
    this.items = this.shoppingCartService.getItems();
    this.totalAmount = this.shoppingCartService.calculateTotalAmount();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
