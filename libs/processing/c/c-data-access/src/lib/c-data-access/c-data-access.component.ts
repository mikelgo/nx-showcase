import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CTypesComponent} from "@nx-showcase/processing/c/c-types";

@Component({
  selector: 'nx-showcase-c-data-access',
  standalone: true,
  imports: [CommonModule, CTypesComponent],
  templateUrl: './c-data-access.component.html',
  styleUrls: ['./c-data-access.component.css'],
})
export class CDataAccessComponent {}
