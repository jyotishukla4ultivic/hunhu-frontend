import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-appointments',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-[#F8F8FB] min-h-screen py-0 px-0 flex flex-col items-stretch">
      <div class="w-full h-full bg-white rounded-2xl shadow p-4 md:p-8 flex flex-col gap-4 flex-1">
        <!-- Controls (Tabs, Search, Filters, etc.) -->
        <div class="flex items-center gap-8 mb-2 md:mb-6">
          <button class="font-semibold text-base pb-2 border-b-2" [ngClass]="{'border-[#8280FF] text-[#8280FF]': selectedTab === 0, 'border-transparent text-gray-500': selectedTab !== 0}" (click)="selectedTab = 0">Appointments</button>
          <button class="font-semibold text-base pb-2 border-b-2" [ngClass]="{'border-[#8280FF] text-[#8280FF]': selectedTab === 1, 'border-transparent text-gray-500': selectedTab !== 1}" (click)="selectedTab = 1">Cross-Agency</button>
        </div>
        <div class="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2 md:mb-4">
          <input type="text" placeholder="Search Provider Name..." class="border border-[#E0E7EF] rounded px-4 py-2 text-sm w-full md:w-72" />
          <div class="flex-1 hidden md:block"></div>
          <div class="flex gap-2">
            <input type="date" class="border border-[#E0E7EF] rounded px-3 py-2 text-sm w-full md:w-auto" />
            <button class="border border-[#E0E7EF] rounded px-4 py-2 text-sm flex items-center gap-2 w-full md:w-auto"><span class="material-icons text-base">filter_list</span> Filters</button>
          </div>
        </div>
        <!-- Custom Scheduler Grid -->
        <div class="overflow-x-auto">
          <div class="min-w-[900px]">
            <!-- Time slots header -->
            <div class="flex border-b border-[#E9EAF0] bg-[#F8F8FB]">
              <div class="w-48"></div>
              <div *ngFor="let slot of timeSlots" class="flex-1 text-center py-2 text-xs font-semibold text-gray-500">{{slot}}</div>
            </div>
            <!-- Provider rows -->
            <div *ngFor="let provider of providers; let i = index" class="flex border-b border-[#E9EAF0] relative min-h-[64px]">
              <!-- Provider info -->
              <div class="w-48 flex items-center gap-2 px-2 py-3 bg-[#F8F8FB] sticky left-0 z-10">
                <img [src]="provider.avatar" class="w-8 h-8 rounded-full object-cover" />
                <span class="font-medium text-gray-900 text-sm">{{provider.name}}</span>
              </div>
              <!-- Time slots -->
              <div class="flex-1 flex relative">
                <ng-container *ngFor="let appt of getProviderAppointments(provider.id)">
                  <div
                    class="absolute flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold shadow border"
                    [ngStyle]="{
                      left: getAppointmentLeft(appt.start),
                      width: getAppointmentWidth(appt.start, appt.end),
                      background: appt.bg,
                      borderColor: appt.border
                    }"
                    [style.top.px]="8"
                  >
                    <span class="material-icons text-base">event</span>
                    <span class="truncate whitespace-nowrap">{{appt.title}}</span>
                    <div class="flex -space-x-2 ml-2">
                      <img *ngFor="let user of appt.users" [src]="user" class="w-6 h-6 rounded-full border-2 border-white" />
                    </div>
                  </div>
                </ng-container>
                <!-- Empty slots for grid background -->
                <div *ngFor="let slot of timeSlots; let j = index" class="flex-1 border-l border-[#E9EAF0] h-16"></div>
              </div>
            </div>
          </div>
        </div>
        <!-- View Toggle (optional) -->
        <div class="flex gap-2 mt-4 justify-end">
          <button class="px-4 py-1 rounded border text-sm font-medium" [ngClass]="{'bg-[#F5F8FF] text-[#8280FF] border-[#8280FF]': view==='day', 'border-[#E0E7EF] text-gray-500': view!=='day'}" (click)="view='day'">Day</button>
          <button class="px-4 py-1 rounded border text-sm font-medium" [ngClass]="{'bg-[#F5F8FF] text-[#8280FF] border-[#8280FF]': view==='week', 'border-[#E0E7EF] text-gray-500': view!=='week'}" (click)="view='week'">Week</button>
          <button class="px-4 py-1 rounded border text-sm font-medium" [ngClass]="{'bg-[#F5F8FF] text-[#8280FF] border-[#8280FF]': view==='month', 'border-[#E0E7EF] text-gray-500': view!=='month'}" (click)="view='month'">Month</button>
        </div>
      </div>
    </div>
  `,
  styles: [``]
})
export class AppointmentsComponent {
  selectedTab = 0;
  view = 'day';
  timeSlots = [
    '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'
  ];
  providers = [
    { id: '1', name: 'Ashley Brown', avatar: 'https://randomuser.me/api/portraits/women/1.jpg' },
    { id: '2', name: 'Javier Hockway', avatar: 'https://randomuser.me/api/portraits/men/2.jpg' },
    { id: '3', name: 'Stephen Harris', avatar: 'https://randomuser.me/api/portraits/men/3.jpg' },
    { id: '4', name: 'Richard Walters', avatar: 'https://randomuser.me/api/portraits/men/4.jpg' },
    { id: '5', name: 'Michael Simon', avatar: 'https://randomuser.me/api/portraits/men/5.jpg' },
    { id: '6', name: 'Melissa Bradley', avatar: 'https://randomuser.me/api/portraits/women/6.jpg' },
    { id: '7', name: 'Victoria Griffin', avatar: 'https://randomuser.me/api/portraits/women/7.jpg' },
    { id: '8', name: 'Derek Larson', avatar: 'https://randomuser.me/api/portraits/men/8.jpg' },
  ];
  appointments = [
    {
      id: 'a',
      providerId: '1',
      title: 'Integrative Yoga & Meditation',
      start: '09:00',
      end: '10:00',
      bg: '#bbf7d0',
      border: '#4ade80',
      users: ['https://randomuser.me/api/portraits/men/2.jpg','https://randomuser.me/api/portraits/women/1.jpg']
    },
    {
      id: 'b',
      providerId: '2',
      title: 'Mindfulness Meditation',
      start: '11:00',
      end: '12:00',
      bg: '#fed7aa',
      border: '#fb923c',
      users: ['https://randomuser.me/api/portraits/men/3.jpg']
    },
    {
      id: 'c',
      providerId: '3',
      title: 'The Anxiety Matrix',
      start: '13:00',
      end: '14:00',
      bg: '#dbeafe',
      border: '#60a5fa',
      users: ['https://randomuser.me/api/portraits/women/6.jpg','https://randomuser.me/api/portraits/men/4.jpg']
    },
    {
      id: 'd',
      providerId: '4',
      title: 'A Course Adventure',
      start: '15:00',
      end: '16:00',
      bg: '#fbcfe8',
      border: '#f472b6',
      users: ['https://randomuser.me/api/portraits/women/7.jpg']
    },
  ];

  getProviderAppointments(providerId: string) {
    return this.appointments.filter(a => a.providerId === providerId);
  }

  // Calculate left position as a percentage based on time slot
  getAppointmentLeft(start: string) {
    const idx = this.timeSlots.indexOf(start);
    return idx >= 0 ? (idx / this.timeSlots.length) * 100 + '%' : '0%';
  }
  // Calculate width as a percentage based on start/end slots
  getAppointmentWidth(start: string, end: string) {
    const startIdx = this.timeSlots.indexOf(start);
    const endIdx = this.timeSlots.indexOf(end);
    const width = (endIdx - startIdx) / this.timeSlots.length;
    return width > 0 ? (width * 100) + '%' : '8%';
  }
} 