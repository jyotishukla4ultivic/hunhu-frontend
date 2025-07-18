import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-provider-logout',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class='flex flex-col items-center justify-center min-h-[60vh]'>
      <div class='text-2xl font-bold text-[#8B7CFF] mb-4'>Logout</div>
      <button class='px-4 py-2 bg-red-600 text-white rounded' (click)='logout()'>Logout</button>
    </div>
  `
})
export class ProviderLogoutComponent {
  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('auth_token');
    this.router.navigate(['/login']);
  }
} 