import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-agency-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgClass],
  templateUrl: './sidebar.component.html'
})
export class AgencySidebarComponent {
  constructor(public router: Router) {}

  isActivePath(path: string): boolean {
    return this.router.url === path || this.router.url.startsWith(path + '/');
  }
} 