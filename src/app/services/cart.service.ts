import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public productsInCart: Product[] = [];

  constructor() {}

  getProductsInCart() {
    return this.productsInCart;
  }
  getQtyInCart() {
    const qty = this.productsInCart.reduce((pre, curr) => {
      const currNum = curr.quantity;
      const totalSum = pre + (currNum as unknown as number);
      console.log(totalSum);
      return totalSum;
    }, 0);

    return this.productsInCart;
  }

  addProduct(quantity: number, product: Product) {
    const checkProduct = this.productsInCart.filter((p) => p.id === product.id);

    if (checkProduct.length !== 0) {
      const initialCart = parseInt(
        checkProduct[0]['quantity'] as unknown as string
      );
      const addProd = initialCart + parseInt(quantity as unknown as string);
      checkProduct[0]['quantity'] = addProd;
      this.productsInCart = this.productsInCart
        .filter((p) => p.id !== product.id)
        .concat(checkProduct);

      return this.productsInCart;
    } else {
      const quantityInt = parseInt(quantity as unknown as string);
      product['quantity'] = quantityInt;
      this.productsInCart.push(product);
      return this.productsInCart;
    }
  }

  updateCart(quantity: number, product: Product) {
    if (quantity === 0) {
      const changeQty = this.productsInCart.map((p) => {
        if (p.id === product.id) {
          p['quantity'] = parseInt(quantity as unknown as string);
        }
        if (isNaN(quantity)) {
          quantity = 0;
        } else {
          quantity;
        }
        this.deleteProduct(product.id);
        alert(`Item Deleted!`);
        return p;
      });
      return this.productsInCart;
    } else {
      this.productsInCart = this.productsInCart.map((p) => {
        if (p.id === product.id) {
          p['quantity'] = parseInt(quantity as unknown as string);
        }
        return p;
      });
      return this.productsInCart;
    }
  }

  deleteProduct(id: number) {
    this.productsInCart = this.productsInCart.filter((item) => item.id !== id);
    return this.productsInCart;
  }

  clearCart() {
    this.productsInCart = [];
    return this.productsInCart;
  }
}
