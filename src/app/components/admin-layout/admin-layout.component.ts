import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar.component';
import { HeaderComponent } from './header.component';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [SidebarComponent, HeaderComponent, RouterOutlet],
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent {} 