import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AFeatComponent} from "@nx-showcase/processing/a/a-feat";
import {BFeatComponent} from "@nx-showcase/processing/b/b-feat";
import {CFeatComponent} from "@nx-showcase/processing/c/c-feat";
import {DFeatComponent} from "@nx-showcase/processing/d/d-feat";

@Component({
  selector: 'nx-showcase-shell-processing',
  standalone: true,
  imports: [CommonModule, AFeatComponent, BFeatComponent, CFeatComponent, DFeatComponent],
  templateUrl: './shell-processing.component.html',
  styleUrls: ['./shell-processing.component.css'],
})
export class ShellProcessingComponent {}
