import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminManagerUiComponent} from "@nx-showcase/admin/admin-manager/admin-manager-ui";
import {AdminManagerDataAccessComponent} from "@nx-showcase/admin/admin-manager/admin-manager-data-access";
import {AdminManagerTypesComponent} from "@nx-showcase/admin/admin-manager/admin-manager-types";

@Component({
  selector: 'nx-showcase-admin-manager-feat',
  standalone: true,
  imports: [CommonModule, AdminManagerUiComponent, AdminManagerDataAccessComponent, AdminManagerTypesComponent],
  templateUrl: './admin-manager-feat.component.html',
  styleUrls: ['./admin-manager-feat.component.css'],
})
export class AdminManagerFeatComponent {}
