import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DTypesComponent} from "@nx-showcase/processing/d/d-types";

@Component({
  selector: 'nx-showcase-d-ui',
  standalone: true,
  imports: [CommonModule, DTypesComponent],
  templateUrl: './d-ui.component.html',
  styleUrls: ['./d-ui.component.css'],
})
export class DUiComponent {}
