import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PurchasingTypesComponent} from "@nx-showcase/booking/purchasing/purchasing-types";
import {PurchasingUtilComponent} from "@nx-showcase/booking/purchasing/purchasing-util";
import {SharedModule} from "@nx-showcase/shared";

@Component({
  selector: 'nx-showcase-purchasing-ui',
  standalone: true,
  imports: [CommonModule, PurchasingTypesComponent, PurchasingUtilComponent, SharedModule],
  templateUrl: './purchasing-ui.component.html',
  styleUrls: ['./purchasing-ui.component.css'],
})
export class PurchasingUiComponent {}
