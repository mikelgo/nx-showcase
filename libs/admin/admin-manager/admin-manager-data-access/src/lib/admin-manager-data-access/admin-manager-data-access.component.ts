import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminManagerTypesComponent} from "@nx-showcase/admin/admin-manager/admin-manager-types";

@Component({
  selector: 'nx-showcase-admin-manager-data-access',
  standalone: true,
  imports: [CommonModule, AdminManagerTypesComponent],
  templateUrl: './admin-manager-data-access.component.html',
  styleUrls: ['./admin-manager-data-access.component.css'],
})
export class AdminManagerDataAccessComponent {}
