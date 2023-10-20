import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminManagerFeatComponent} from "@nx-showcase/admin/admin-manager/admin-manager-feat";
import {ViewerFeatComponent} from "@nx-showcase/admin/viewer/viewer-feat";
import {AdminSharedComponent} from "@nx-showcase/admin/admin-shared";

@Component({
  selector: 'nx-showcase-shell-admin',
  standalone: true,
  imports: [CommonModule, AdminManagerFeatComponent, ViewerFeatComponent, AdminSharedComponent],
  templateUrl: './shell-admin.component.html',
  styleUrls: ['./shell-admin.component.css'],
})
export class ShellAdminComponent {}
