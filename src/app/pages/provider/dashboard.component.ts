import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-provider-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex gap-6">
      <!-- Main Content -->
      <div class="flex-1 flex flex-col gap-6">
        <!-- Stats Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="bg-white rounded-xl border border-gray-100 p-4 flex flex-col items-start">
            <div class="text-xs text-gray-500 mb-1">Total Raised Dispute</div>
            <div class="text-2xl font-bold text-[#8B7CFF]">07</div>
            <div class="text-xs text-green-500 mt-1">+1 Today</div>
          </div>
          <div class="bg-white rounded-xl border border-gray-100 p-4 flex flex-col items-start">
            <div class="text-xs text-gray-500 mb-1">Total Appointment</div>
            <div class="text-2xl font-bold text-[#8B7CFF]">15</div>
            <div class="text-xs text-green-500 mt-1">+1 Today</div>
          </div>
          <div class="bg-white rounded-xl border border-gray-100 p-4 flex flex-col items-start">
            <div class="text-xs text-gray-500 mb-1">Profit</div>
            <div class="text-2xl font-bold text-[#8B7CFF]">$872</div>
            <div class="text-xs text-green-500 mt-1">+1 Today</div>
          </div>
        </div>
        <!-- Profit Graph Placeholder -->
        <div class="bg-white rounded-xl border border-gray-100 p-6 flex flex-col gap-2">
          <div class="font-semibold text-gray-900 mb-2">Profit Graph</div>
          <div class="w-full h-40 bg-[#F7F8FA] rounded flex items-center justify-center text-gray-400">[Graph Placeholder]</div>
          <div class="flex justify-between mt-2">
            <span class="text-xs text-gray-400">Weekly</span>
            <span class="text-xs text-gray-400">Monthly</span>
          </div>
          <div class="text-right text-2xl font-bold text-[#8B7CFF] mt-2">$872 <span class="text-xs text-gray-500 font-normal">Total Profit</span></div>
        </div>
        <!-- Payment History Table -->
        <div class="bg-white rounded-xl border border-gray-100 p-6">
          <div class="flex items-center justify-between mb-4">
            <div class="font-semibold text-gray-900">Payment History</div>
            <div class="flex items-center gap-2">
              <input type="date" class="border border-gray-200 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#8B7CFF]" value="2021-02-24" />
              <button class="flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium text-gray-700"><span class="material-icons text-base">filter_list</span> Filter</button>
            </div>
          </div>
          <div class="overflow-x-auto rounded-lg border border-gray-100 mb-2">
            <table class="min-w-full text-sm">
              <thead class="bg-[#F7F8FA] text-gray-500">
                <tr>
                  <th class="p-3 font-medium text-left">Payment Id & Date</th>
                  <th class="p-3 font-medium text-left">Service</th>
                  <th class="p-3 font-medium text-left">Consumer</th>
                  <th class="p-3 font-medium text-left">Agency</th>
                  <th class="p-3 font-medium text-left">My Commission</th>
                  <th class="p-3 font-medium text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let row of rows" class="border-b last:border-b-0">
                  <td class="p-3">
                    <div class="font-semibold text-gray-900 text-xs">{{row.id}}</div>
                    <div class="text-[10px] text-gray-400">{{row.date}}</div>
                  </td>
                  <td class="p-3">{{row.service}}</td>
                  <td class="p-3">{{row.consumer}}</td>
                  <td class="p-3">{{row.agency}}</td>
                  <td class="p-3">{{row.commission}}</td>
                  <td class="p-3"><button class="bg-[#F4F1FF] text-[#8B7CFF] px-4 py-1 rounded font-semibold text-xs border border-[#E6E2FF]">View Invoice</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <!-- Right Sidebar -->
      <div class="w-full md:w-80 flex-shrink-0 flex flex-col gap-6">
        <!-- Appointment Calendar -->
        <div class="bg-white rounded-xl border border-gray-100 p-6 flex flex-col gap-4">
          <div class="font-semibold text-gray-900 mb-2">Appointment Calendar</div>
          <div class="w-full flex justify-center mb-2">
            <input type="month" class="border border-gray-200 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#8B7CFF]" value="2021-02" />
          </div>
          <div class="flex flex-wrap gap-1 justify-center">
            <span *ngFor="let d of days" [ngClass]="d.selected ? 'bg-[#8B7CFF] text-white' : 'bg-gray-50 text-gray-500'" class="w-8 h-8 flex items-center justify-center rounded-full cursor-pointer text-xs">{{d.day}}</span>
          </div>
        </div>
        <!-- Appointments List -->
        <div class="bg-white rounded-xl border border-gray-100 p-6 flex flex-col gap-4">
          <div class="font-semibold text-gray-900 mb-2">Appointments</div>
          <div class="flex flex-col gap-2">
            <div *ngFor="let appt of appointments" class="flex items-center gap-2">
              <img [src]="appt.avatar" class="w-8 h-8 rounded-full" />
              <div>
                <div class="font-semibold text-xs text-gray-900">{{appt.name}}</div>
                <div class="text-[10px] text-gray-400">{{appt.time}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ProviderDashboardComponent {
  rows = [
    { id: '#Pay-12435', date: '31. Dec. 2022', service: 'Meditation', consumer: 'Provider 01', agency: 'Agency01', commission: '$80 (70%)' },
    { id: '#Pay-12436', date: '31. Dec. 2022', service: 'Meditation', consumer: 'Provider 01', agency: 'Agency01', commission: '$80 (70%)' },
    { id: '#Pay-12437', date: '31. Dec. 2022', service: 'Meditation', consumer: 'Provider 01', agency: 'Agency01', commission: '$80 (70%)' },
  ];
  days = [
    { day: 21 }, { day: 22 }, { day: 23, selected: true }, { day: 24 }, { day: 25 }, { day: 26 }, { day: 27 }
  ];
  appointments = [
    { name: 'Consumer 01', time: '11:00 - 12:00', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { name: 'Consumer 02', time: '12:00 - 13:00', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
    { name: 'Consumer 03', time: '13:00 - 14:00', avatar: 'https://randomuser.me/api/portraits/men/3.jpg' },
  ];
} 