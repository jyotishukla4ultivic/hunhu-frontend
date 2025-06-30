import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AgencySidebarComponent } from './sidebar.component';
import { AgencyHeaderComponent } from './header.component';

@Component({
  selector: 'app-agency-layout',
  standalone: true,
  imports: [AgencySidebarComponent, AgencyHeaderComponent, RouterOutlet],
  templateUrl: './agency-layout.component.html',
  styleUrls: ['./agency-layout.component.css']
})
export class AgencyLayoutComponent {} 