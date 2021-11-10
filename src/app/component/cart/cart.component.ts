import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';
import { ConfirmationService } from 'src/app/services/confirmation.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  name: string = '';
  address: string = '';
  ccNumber: string = '';
  products: Product[] = [];
  empty: boolean = true;
  total: number = 0;
  qty: number = 0;

  onChange = (e: any, product: Product) => {
    this.products = this.cartService.updateCart(e, product);
    this.total = this.products.reduce((pre, curr) => {
      const currNum = curr.price * parseInt(curr.quantity as unknown as string);
      return pre + currNum;
    }, 0);
    if (this.total === 0) {
      this.empty = true;
    }
  };

  constructor(
    private cartService: CartService,
    private router: Router,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.products = this.cartService.getProductsInCart();

    if (this.products.length !== 0) {
      this.empty = false;
      this.total = this.products.reduce((pre, curr) => {
        const currNum =
          curr.price * parseInt(curr.quantity as unknown as string);
        return pre + currNum;
      }, 0);
    }
  }

  submit = () => {
    const payment = {
      name: this.name,
      address: this.address,
      ccNumber: this.ccNumber,
      total: this.total,
    };

    this.confirmationService.addConfirmation(payment);

    this.name = '';
    this.address = '';
    this.ccNumber = '';
    this.total = 0;

    this.cartService.clearCart();
    this.router.navigateByUrl('/confirmation');
  };
}
