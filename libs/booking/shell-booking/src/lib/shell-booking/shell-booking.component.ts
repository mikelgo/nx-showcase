import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PaymentFeatComponent} from "@nx-showcase/booking/payment/payment-feat";
import {PurchasingFeatComponent} from "@nx-showcase/booking/purchasing/purchasing-feat";

@Component({
  selector: 'nx-showcase-shell-booking',
  standalone: true,
  imports: [CommonModule, PaymentFeatComponent, PurchasingFeatComponent],
  templateUrl: './shell-booking.component.html',
  styleUrls: ['./shell-booking.component.css'],
})
export class ShellBookingComponent {}
