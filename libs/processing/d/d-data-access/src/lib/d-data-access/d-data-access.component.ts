import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DTypesComponent} from "@nx-showcase/processing/d/d-types";
import {SharedModule} from "@nx-showcase/shared";

@Component({
  selector: 'nx-showcase-d-data-access',
  standalone: true,
  imports: [CommonModule, DTypesComponent, SharedModule],
  templateUrl: './d-data-access.component.html',
  styleUrls: ['./d-data-access.component.css'],
})
export class DDataAccessComponent {}
