import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PaymentTypesComponent} from "@nx-showcase/booking/payment/payment-types";
import {PaymentUtilComponent} from "@nx-showcase/booking/payment/payment-util";

@Component({
  selector: 'nx-showcase-payment-ui',
  standalone: true,
  imports: [CommonModule, PaymentTypesComponent, PaymentUtilComponent],
  templateUrl: './payment-ui.component.html',
  styleUrls: ['./payment-ui.component.css'],
})
export class PaymentUiComponent {}
