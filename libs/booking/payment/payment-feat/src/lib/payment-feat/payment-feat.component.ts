import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PaymentDataAccessComponent} from "@nx-showcase/booking/payment/payment-data-access";
import {PaymentTypesComponent} from "@nx-showcase/booking/payment/payment-types";
import {PaymentUiComponent} from "@nx-showcase/booking/payment/payment-ui";
import {SharedModule} from "@nx-showcase/shared";

@Component({
  selector: 'nx-showcase-payment-feat',
  standalone: true,
  imports: [CommonModule, PaymentDataAccessComponent, PaymentTypesComponent, PaymentUiComponent, SharedModule],
  templateUrl: './payment-feat.component.html',
  styleUrls: ['./payment-feat.component.css'],
})
export class PaymentFeatComponent {}
