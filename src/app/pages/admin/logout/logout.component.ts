import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  standalone: true,
  template: `
    <div class='p-6'>
      <h1 class='text-2xl font-bold mb-4'>Logout</h1>
      <div class='bg-white rounded-lg shadow p-6 mb-4'>You have been logged out.</div>
      <button class='px-4 py-2 bg-red-600 text-white rounded' (click)='logout()'>Logout</button>
    </div>
  `
})
export class LogoutComponent {
  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('auth_token');
    this.router.navigate(['/login']);
  }
} 