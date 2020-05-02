import { Component } from '@angular/core';
import { NavItem } from '../../nav-item';
import { MatDialog } from '@angular/material';
import { ShoppingcartComponent } from '../shoppingcart/shoppingcart.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  navItems: NavItem[] = [
    {
      displayName: 'Products',
      route: 'products'
    },
    {
      displayName: 'Orders',
      route: 'orders'
    }
  ];

  constructor(
    public dialog: MatDialog
  ) {}

  openShoppingCart() {
    const dialogRef = this.dialog.open(ShoppingcartComponent, {
      width: '400px',
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
