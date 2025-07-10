import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass, NgStyle, CommonModule } from '@angular/common';

@Component({
  selector: 'app-consumer-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, NgClass, NgStyle],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(public router: Router) {}

  isActivePath(path: string): boolean {
    return this.router.url === path || this.router.url.startsWith(path + '/');
  }

  menuItems = [
    { label: 'Dashboard', icon: 'dashboard', route: '/consumer/dashboard' },
    { label: 'Search Services', icon: 'search', route: '/consumer/search-services' },
    { label: 'Appointments', icon: 'event', route: '/consumer/appointments' },
    { label: 'Payment History', icon: 'history', route: '/consumer/payment-history' },
    { label: 'Dispute', icon: 'gavel', route: '/consumer/disputes' },
    { label: 'Notification', icon: 'notifications', route: '/consumer/notifications' },
    { label: 'Settings', icon: 'settings', route: '/consumer/settings' },
    { label: 'Logout', icon: 'logout', route: '/consumer/logout' },
  ];
} 