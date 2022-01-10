import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  products: Product[] = [];
  quantity: number = 0;
  empty: boolean = true;

  updateQty = (): Number => {
    const sum = this.products.reduce((pre, curr) => {
      const currNum = curr.quantity;
      const totalSum = pre + (currNum as unknown as number);

      console.log(totalSum);
      console.log(this.empty);
      return totalSum;
    }, 0);
    this.quantity = sum;
    if (sum !== 0) {
      this.empty = false;
    }
    if (isNaN(sum)) {
      this.quantity = 0;
    } else {
      this.quantity;
    }
    return sum;
  };

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.products = this.cartService.updateCart(
      this.quantity,
      this.products[this.quantity]
    );
    this.updateQty();

    console.log(this.empty);
  }
}
