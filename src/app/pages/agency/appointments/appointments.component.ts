import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-appointments',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-[#F8F8FB] min-h-screen p-6">
      <div class="max-w-6xl mx-auto bg-white rounded-2xl shadow p-8">
        <!-- Tabs -->
        <div class="flex items-center gap-8 mb-6">
          <button class="font-semibold text-base pb-2 border-b-2" [ngClass]="{'border-[#8280FF] text-[#8280FF]': selectedTab === 0, 'border-transparent text-gray-500': selectedTab !== 0}" (click)="selectedTab = 0">Appointments</button>
          <button class="font-semibold text-base pb-2 border-b-2" [ngClass]="{'border-[#8280FF] text-[#8280FF]': selectedTab === 1, 'border-transparent text-gray-500': selectedTab !== 1}" (click)="selectedTab = 1">Cross-Agency</button>
        </div>
        <!-- Controls -->
        <div class="flex items-center gap-4 mb-4">
          <input type="text" placeholder="Search Provider Name..." class="border border-[#E0E7EF] rounded px-4 py-2 text-sm w-72" />
          <div class="flex-1"></div>
          <input type="date" class="border border-[#E0E7EF] rounded px-3 py-2 text-sm" />
          <button class="border border-[#E0E7EF] rounded px-4 py-2 text-sm flex items-center gap-2"><span class="material-icons text-base">filter_list</span> Filters</button>
        </div>
        <!-- Calendar Header -->
        <div class="flex items-center gap-2 mb-2">
          <div class="text-sm font-semibold text-gray-700 mr-4">Today Provider Appointment</div>
          <span class="bg-[#F5F8FF] text-[#8280FF] text-xs font-semibold px-2 py-1 rounded">12</span>
        </div>
        <div class="flex">
          <!-- Provider List -->
          <div class="w-56 flex-shrink-0 border-r border-[#E9EAF0] pr-4">
            <div *ngFor="let provider of providers" class="flex items-center gap-2 py-2">
              <img [src]="provider.avatar" class="w-8 h-8 rounded-full object-cover" />
              <span class="font-medium text-gray-900 text-sm">{{provider.name}}</span>
            </div>
          </div>
          <!-- Calendar Grid -->
          <div class="flex-1 pl-4 overflow-x-auto">
            <div class="min-w-full">
              <!-- Days Row -->
              <div class="flex items-center gap-2 mb-2">
                <div *ngFor="let day of days" class="flex flex-col items-center w-10">
                  <span class="text-xs text-gray-400">{{day.short}}</span>
                  <button class="w-8 h-8 rounded-full text-sm font-semibold mt-1"
                    [ngClass]="{'bg-[#8280FF] text-white': day.active, 'text-gray-700': !day.active}">
                    {{day.date}}
                  </button>
                </div>
              </div>
              <!-- Calendar Appointments Grid -->
              <div class="relative min-h-[500px] overflow-hidden">
                <div *ngFor="let appt of appointments" [style.top.%]="appt.top" [style.left.%]="appt.left" [style.width.%]="appt.width" class="absolute p-2 rounded-lg border-2 text-xs font-semibold flex items-center gap-2 max-w-[180px]" [ngClass]="appt.color">
                  <span class="material-icons text-base">event</span>
                  <span class="truncate whitespace-nowrap">{{appt.title}}</span>
                  <div class="flex -space-x-2 ml-2">
                    <img *ngFor="let user of appt.users" [src]="user" class="w-6 h-6 rounded-full border-2 border-white" />
                  </div>
                </div>
              </div>
              <!-- View Toggle -->
              <div class="flex gap-2 mt-4 justify-end">
                <button class="px-4 py-1 rounded border text-sm font-medium" [ngClass]="{'bg-[#F5F8FF] text-[#8280FF] border-[#8280FF]': view==='day', 'border-[#E0E7EF] text-gray-500': view!=='day'}" (click)="view='day'">Day</button>
                <button class="px-4 py-1 rounded border text-sm font-medium" [ngClass]="{'bg-[#F5F8FF] text-[#8280FF] border-[#8280FF]': view==='week', 'border-[#E0E7EF] text-gray-500': view!=='week'}" (click)="view='week'">Week</button>
                <button class="px-4 py-1 rounded border text-sm font-medium" [ngClass]="{'bg-[#F5F8FF] text-[#8280FF] border-[#8280FF]': view==='month', 'border-[#E0E7EF] text-gray-500': view!=='month'}" (click)="view='month'">Month</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [``]
})
export class AppointmentsComponent {
  selectedTab = 0;
  view = 'week';
  providers = [
    { name: 'Ashley Brown', avatar: 'https://randomuser.me/api/portraits/women/1.jpg' },
    { name: 'Javier Hockway', avatar: 'https://randomuser.me/api/portraits/men/2.jpg' },
    { name: 'Stephen Harris', avatar: 'https://randomuser.me/api/portraits/men/3.jpg' },
    { name: 'Richard Walters', avatar: 'https://randomuser.me/api/portraits/men/4.jpg' },
    { name: 'Michael Simon', avatar: 'https://randomuser.me/api/portraits/men/5.jpg' },
    { name: 'Melissa Bradley', avatar: 'https://randomuser.me/api/portraits/women/6.jpg' },
    { name: 'Victoria Griffin', avatar: 'https://randomuser.me/api/portraits/women/7.jpg' },
    { name: 'Derek Larson', avatar: 'https://randomuser.me/api/portraits/men/8.jpg' },
  ];
  days = [
    { short: 'Mon', date: 1 }, { short: 'Tue', date: 2 }, { short: 'Wed', date: 3 }, { short: 'Thu', date: 4 }, { short: 'Fri', date: 5 }, { short: 'Sat', date: 6 }, { short: 'Sun', date: 7 },
    { short: 'Mon', date: 8 }, { short: 'Tue', date: 9 }, { short: 'Wed', date: 10 }, { short: 'Thu', date: 11 }, { short: 'Fri', date: 12, active: true }, { short: 'Sat', date: 13 }, { short: 'Sun', date: 14 },
    { short: 'Mon', date: 15 }, { short: 'Tue', date: 16 }, { short: 'Wed', date: 17 }, { short: 'Thu', date: 18 }, { short: 'Fri', date: 19 },
  ];
  appointments = [
    { title: 'Integrative Yoga & Meditation', top: 10, left: 20, width: 10, color: 'border-green-400 text-green-700 bg-green-50', users: ['https://randomuser.me/api/portraits/men/2.jpg','https://randomuser.me/api/portraits/women/1.jpg'] },
    { title: 'Mindfulness Meditation', top: 20, left: 30, width: 10, color: 'border-orange-400 text-orange-700 bg-orange-50', users: ['https://randomuser.me/api/portraits/men/3.jpg'] },
    { title: 'The Anxiety Matrix', top: 30, left: 50, width: 10, color: 'border-blue-400 text-blue-700 bg-blue-50', users: ['https://randomuser.me/api/portraits/women/6.jpg','https://randomuser.me/api/portraits/men/4.jpg'] },
    { title: 'A Course Adventure', top: 50, left: 60, width: 10, color: 'border-pink-400 text-pink-700 bg-pink-50', users: ['https://randomuser.me/api/portraits/women/7.jpg'] },
  ];
} 