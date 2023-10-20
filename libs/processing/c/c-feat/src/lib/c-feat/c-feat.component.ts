import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CDataAccessComponent} from "@nx-showcase/processing/c/c-data-access";
import {CUiComponent} from "@nx-showcase/processing/c/c-ui";
import {CTypesComponent} from "@nx-showcase/processing/c/c-types";

@Component({
  selector: 'nx-showcase-c-feat',
  standalone: true,
  imports: [CommonModule, CDataAccessComponent, CUiComponent, CTypesComponent],
  templateUrl: './c-feat.component.html',
  styleUrls: ['./c-feat.component.css'],
})
export class CFeatComponent {}
