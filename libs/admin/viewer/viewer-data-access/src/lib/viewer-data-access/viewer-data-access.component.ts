import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ViewerUtilComponent} from "@nx-showcase/admin/viewer/viewer-util";
import {ViewerTypesComponent} from "@nx-showcase/admin/viewer/viewer-types";

@Component({
  selector: 'nx-showcase-viewer-data-access',
  standalone: true,
  imports: [CommonModule, ViewerUtilComponent, ViewerTypesComponent],
  templateUrl: './viewer-data-access.component.html',
  styleUrls: ['./viewer-data-access.component.css'],
})
export class ViewerDataAccessComponent {}
