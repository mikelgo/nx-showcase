import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminSharedComponent} from "@nx-showcase/admin/admin-shared";
import {SharedModule} from "@nx-showcase/shared";

@Component({
  selector: 'nx-showcase-viewer-util',
  standalone: true,
  imports: [CommonModule, AdminSharedComponent, SharedModule],
  templateUrl: './viewer-util.component.html',
  styleUrls: ['./viewer-util.component.css'],
})
export class ViewerUtilComponent {}
