import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BTypesComponent} from "@nx-showcase/processing/b/b-types";

@Component({
  selector: 'nx-showcase-b-ui',
  standalone: true,
  imports: [CommonModule, BTypesComponent],
  templateUrl: './b-ui.component.html',
  styleUrls: ['./b-ui.component.css'],
})
export class BUiComponent {}
