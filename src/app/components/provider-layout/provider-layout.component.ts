import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-provider-layout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="flex min-h-screen bg-[#F7F8FA]">
      <!-- Sidebar -->
      <aside class="w-64 bg-white border-r border-gray-100 flex flex-col py-6 px-4">
        <div class="flex items-center gap-2 mb-8">
          <img src="/assets/icons/logo.svg" class="h-8 w-8" alt="Logo" />
          <span class="font-bold text-lg text-[#8B7CFF]">Yours Logo</span>
        </div>
        <nav class="flex-1 flex flex-col gap-2">
          <a routerLink="/provider/dashboard" class="flex items-center gap-2 px-4 py-2 rounded-lg text-[#8B7CFF] bg-[#F4F1FF] font-semibold"><span class="material-icons">dashboard</span> Dashboard</a>
          <a routerLink="/provider/services" class="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-50"><span class="material-icons">miscellaneous_services</span> Services</a>
          <a routerLink="/provider/appointments" class="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-50"><span class="material-icons">event</span> Appointments</a>
          <a routerLink="/provider/messages" class="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-50"><span class="material-icons">mail</span> Messages</a>
          <a routerLink="/provider/payment-history" class="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-50"><span class="material-icons">receipt_long</span> Payment History</a>
          <a routerLink="/provider/notification" class="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-50"><span class="material-icons">notifications</span> Notification</a>
          <a routerLink="/provider/profile" class="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-50"><span class="material-icons">person</span> Profile</a>
        </nav>
        <a routerLink="/provider/logout" class="flex items-center gap-2 px-4 py-2 rounded-lg text-[#FF4D6D] font-semibold mt-8 hover:bg-[#FFE5EA]"><span class="material-icons">logout</span> Logout</a>
      </aside>
      <!-- Main Content -->
      <div class="flex-1 flex flex-col">
        <!-- Header -->
        <header class="flex items-center justify-between bg-white border-b border-gray-100 px-8 py-4">
          <div class="flex items-center gap-2 w-1/2">
            <span class="material-icons text-gray-400">search</span>
            <input type="text" class="w-full border border-gray-100 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#8B7CFF]" placeholder="Search..." />
          </div>
          <div class="flex items-center gap-3">
            <span class="font-semibold text-sm text-gray-700">Joel Atone</span>
            <img src="https://randomuser.me/api/portraits/men/32.jpg" class="w-10 h-10 rounded-full border-2 border-white shadow" />
          </div>
        </header>
        <!-- Router outlet for child pages -->
        <main class="flex-1 p-6 bg-[#F7F8FA]">
          <router-outlet></router-outlet>
        </main>
      </div>
    </div>
  `
})
export class ProviderLayoutComponent {} 