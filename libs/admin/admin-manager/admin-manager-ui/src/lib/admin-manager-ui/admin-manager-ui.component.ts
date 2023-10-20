import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminManagerTypesComponent} from "@nx-showcase/admin/admin-manager/admin-manager-types";

@Component({
  selector: 'nx-showcase-admin-manager-ui',
  standalone: true,
  imports: [CommonModule, AdminManagerTypesComponent],
  templateUrl: './admin-manager-ui.component.html',
  styleUrls: ['./admin-manager-ui.component.css'],
})
export class AdminManagerUiComponent {}
