export class PaymentInfo {
  name: string;
  address: string;
  ccNumber: string;
  total: number;

  constructor() {
    this.name = '';
    this.address = '';
    this.ccNumber = '';
    this.total = 0;
  }
}
