import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PurchasingTypesComponent} from "@nx-showcase/booking/purchasing/purchasing-types";

@Component({
  selector: 'nx-showcase-purchasing-data-access',
  standalone: true,
  imports: [CommonModule, PurchasingTypesComponent],
  templateUrl: './purchasing-data-access.component.html',
  styleUrls: ['./purchasing-data-access.component.css'],
})
export class PurchasingDataAccessComponent {}
