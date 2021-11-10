import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product!: Product;

  public selectedOption: number = 1;

  public opt = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(
    private prodServ: ProductsService,
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    let name = this.route.snapshot.params.productName;

    let capitalize = name.charAt(0).toUpperCase() + name.slice(1);

    this.cartService.productsInCart.filter((p) => p.name === capitalize);

    const promise = this.prodServ
      .getProducts()
      .pipe(map((products) => products.filter((i) => i.name === capitalize)))
      .toPromise();

    promise.then((data) => (this.product = data[0]));
  }

  public addToCart(product: Product) {
    this.cartService.addProduct(this.selectedOption, product);
    alert(`Added to Cart!`);
  }
}
