import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BTypesComponent} from "@nx-showcase/processing/b/b-types";
import {BUiComponent} from "@nx-showcase/processing/b/b-ui";

@Component({
  selector: 'nx-showcase-b-feat',
  standalone: true,
  imports: [CommonModule, BTypesComponent, BUiComponent],
  templateUrl: './b-feat.component.html',
  styleUrls: ['./b-feat.component.css'],
})
export class BFeatComponent {}
