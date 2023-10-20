import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ViewerUtilComponent} from "@nx-showcase/admin/viewer/viewer-util";
import {ViewerUiComponent} from "@nx-showcase/admin/viewer/viewer-ui";
import {ViewerDataAccessComponent} from "@nx-showcase/admin/viewer/viewer-data-access";
import {ViewerTypesComponent} from "@nx-showcase/admin/viewer/viewer-types";

@Component({
  selector: 'nx-showcase-viewer-feat',
  standalone: true,
  imports: [CommonModule, ViewerUtilComponent, ViewerUiComponent, ViewerDataAccessComponent, ViewerTypesComponent],
  templateUrl: './viewer-feat.component.html',
  styleUrls: ['./viewer-feat.component.css'],
})
export class ViewerFeatComponent {}
