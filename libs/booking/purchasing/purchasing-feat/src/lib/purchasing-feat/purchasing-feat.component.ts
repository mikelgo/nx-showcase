import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PurchasingUiComponent} from "@nx-showcase/booking/purchasing/purchasing-ui";
import {PurchasingUtilComponent} from "@nx-showcase/booking/purchasing/purchasing-util";
import {PurchasingDataAccessComponent} from "@nx-showcase/booking/purchasing/purchasing-data-access";

@Component({
  selector: 'nx-showcase-purchasing-feat',
  standalone: true,
  imports: [CommonModule, PurchasingUiComponent, PurchasingUtilComponent, PurchasingDataAccessComponent],
  templateUrl: './purchasing-feat.component.html',
  styleUrls: ['./purchasing-feat.component.css'],
})
export class PurchasingFeatComponent {}
