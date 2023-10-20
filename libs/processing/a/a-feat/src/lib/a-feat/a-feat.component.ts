import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ATypesComponent} from "@nx-showcase/processing/a/a-types";
import {ADataAccessComponent} from "@nx-showcase/processing/a/a-data-access";

@Component({
  selector: 'nx-showcase-a-feat',
  standalone: true,
  imports: [CommonModule, ATypesComponent, ADataAccessComponent],
  templateUrl: './a-feat.component.html',
  styleUrls: ['./a-feat.component.css'],
})
export class AFeatComponent {}
