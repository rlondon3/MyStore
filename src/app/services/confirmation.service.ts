import { Injectable } from '@angular/core';
import { PaymentInfo } from '../models/confirmation';

@Injectable({
  providedIn: 'root',
})
export class ConfirmationService {
  confirmation: PaymentInfo = {
    name: '',
    address: '',
    ccNumber: '',
    total: 0,
  };

  constructor() {}

  getConfirmation() {
    return this.confirmation;
  }

  addConfirmation(info: PaymentInfo) {
    this.confirmation = info;
    return this.confirmation;
  }
}
