export class Product {
  id: number;
  name: string;
  price: number;
  img: string;
  title: string;
  desc: string;
  quantity?: number;

  constructor() {
    this.id = 0;
    this.name = '';
    this.price = 0;
    this.img = '';
    this.title = '';
    this.desc = '';
    this.quantity = 0;
  }
}
