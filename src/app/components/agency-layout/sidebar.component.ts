import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass, NgStyle, CommonModule } from '@angular/common';

@Component({
  selector: 'app-agency-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, NgClass, NgStyle],
  templateUrl: './sidebar.component.html'
})
export class AgencySidebarComponent {
  providersMenuOpen = false;

  constructor(public router: Router) {}

  isActivePath(path: string): boolean {
    return this.router.url === path || this.router.url.startsWith(path + '/');
  }

  toggleProvidersMenu() {
    console.log('Providers menu clicked');
    if (!this.router.url.startsWith('/agency/providers')) {
      this.providersMenuOpen = !this.providersMenuOpen;
    }
  }

  get showProvidersSubmenu(): boolean {
    return this.router.url.startsWith('/agency/providers') || this.providersMenuOpen;
  }
} 