import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent implements OnInit {
  @Input() product: Product;

  public selected: number = 1;

  public opt = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  public onClick = () => {
    this.router.navigateByUrl(`/product/${this.product.name}`);
  };

  public addItem(product: Product) {
    this.cartService.addProduct(this.selected, product);
    alert(`Item Added!`);
  }

  constructor(private router: Router, private cartService: CartService) {
    this.product = {
      id: 0,
      name: ' ',
      price: 0,
      img: ' ',
      title: ' ',
      desc: ' ',
    };
  }

  ngOnInit(): void {}
}
