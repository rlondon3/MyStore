import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'src/app/services/confirmation.service';
import { PaymentInfo } from 'src/app/models/confirmation';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent implements OnInit {
  paymentInfo: PaymentInfo = {
    name: '',
    address: '',
    ccNumber: '',
    total: 0,
  };

  showError = true;

  constructor(private confirmationService: ConfirmationService) {}

  ngOnInit(): void {
    this.paymentInfo = this.confirmationService.getConfirmation();

    if (this.paymentInfo.name !== '') {
      this.showError = false;
    }
  }
}
