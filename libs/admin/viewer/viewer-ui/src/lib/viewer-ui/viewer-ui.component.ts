import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ViewerTypesComponent} from "@nx-showcase/admin/viewer/viewer-types";

@Component({
  selector: 'nx-showcase-viewer-ui',
  standalone: true,
  imports: [CommonModule, ViewerTypesComponent],
  templateUrl: './viewer-ui.component.html',
  styleUrls: ['./viewer-ui.component.css'],
})
export class ViewerUiComponent {}
