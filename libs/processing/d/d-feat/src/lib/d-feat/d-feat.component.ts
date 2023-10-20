import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DDataAccessComponent} from "@nx-showcase/processing/d/d-data-access";
import {DTypesComponent} from "@nx-showcase/processing/d/d-types";
import {DUiComponent} from "@nx-showcase/processing/d/d-ui";

@Component({
  selector: 'nx-showcase-d-feat',
  standalone: true,
  imports: [CommonModule, DDataAccessComponent, DTypesComponent, DUiComponent],
  templateUrl: './d-feat.component.html',
  styleUrls: ['./d-feat.component.css'],
})
export class DFeatComponent {}
