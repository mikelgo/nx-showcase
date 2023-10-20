import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CTypesComponent} from "@nx-showcase/processing/c/c-types";

@Component({
  selector: 'nx-showcase-c-ui',
  standalone: true,
  imports: [CommonModule, CTypesComponent],
  templateUrl: './c-ui.component.html',
  styleUrls: ['./c-ui.component.css'],
})
export class CUiComponent {}
