import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import {ShellAdminComponent} from "@nx-showcase/admin/shell-admin";
import {ShellBookingComponent} from "@nx-showcase/booking/shell-booking";
import {ShellProcessingComponent} from "@nx-showcase/processing/shell-processing";

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, ShellAdminComponent, ShellBookingComponent, ShellProcessingComponent],
  selector: 'nx-showcase-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'nx-showcase';
}
