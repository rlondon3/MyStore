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

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.products = this.cartService.getProductsInCart();
  }
}
