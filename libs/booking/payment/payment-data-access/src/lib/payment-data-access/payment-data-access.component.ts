import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PaymentTypesComponent} from "@nx-showcase/booking/payment/payment-types";

@Component({
  selector: 'nx-showcase-payment-data-access',
  standalone: true,
  imports: [CommonModule, PaymentTypesComponent],
  templateUrl: './payment-data-access.component.html',
  styleUrls: ['./payment-data-access.component.css'],
})
export class PaymentDataAccessComponent {}
