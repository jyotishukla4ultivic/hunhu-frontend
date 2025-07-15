import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-consumer-appointments',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-[#F7F8FA] min-h-screen w-full p-4 md:p-8">
      <!-- Header -->
      <div class="text-lg font-semibold text-gray-900 mb-2">Appointment</div>
      <div class="bg-white rounded-xl border border-gray-200 p-6 w-full">
        <!-- Appointments Tab -->
        <div class="flex items-center gap-4 border-b border-gray-200 pb-2 mb-4">
          <span class="text-base font-semibold text-[#8B7CFF] border-b-2 border-[#8B7CFF] pb-2">Appointments</span>
        </div>
        <!-- Search, Date, Filters -->
        <div class="flex flex-col md:flex-row md:items-center gap-3 mb-4">
          <div class="flex-1 flex items-center gap-2">
            <span class="material-icons text-gray-400 text-xl">search</span>
            <input type="text" class="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#8B7CFF]" placeholder="Search consumer name..." />
          </div>
          <input type="date" class="border border-gray-200 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#8B7CFF] w-44" value="2025-04-13" />
          <button class="flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium text-gray-700"><span class="material-icons text-base">filter_list</span> Filters</button>
        </div>
        <!-- Horizontal Date Selector -->
        <div class="flex items-center gap-1 overflow-x-auto mb-4">
          <div *ngFor="let d of [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]; let i = index" [ngClass]="d === 13 ? 'bg-[#8B7CFF] text-white' : 'bg-gray-50 text-gray-500'" class="flex flex-col items-center justify-center w-12 h-14 rounded-lg cursor-pointer font-medium text-xs border border-gray-200">
            <span>{{ d }}</span>
            <span class="text-[10px]">{{ ['Tue','Wed','Thu','Fri','Sat','Sun','Mon','Tue','Wed','Thu','Fri','Sat','Sun','Mon','Tue','Wed','Thu','Fri','Sat'][i] }}</span>
          </div>
        </div>
        <!-- Today Appointment Table -->
        <div class="mb-6">
          <div class="flex items-center gap-2 mb-2">
            <span class="font-semibold text-gray-900">Today Appointment</span>
            <span class="bg-gray-100 text-xs font-semibold px-2 py-1 rounded">12</span>
          </div>
          <div class="overflow-x-auto rounded-lg border border-gray-100">
            <table class="min-w-full text-sm">
              <thead class="bg-[#F7F8FA] text-gray-500">
                <tr>
                  <th class="p-3 font-medium"><input type="checkbox" /></th>
                  <th class="p-3 font-medium text-left">Consumer Name</th>
                  <th class="p-3 font-medium text-left">Appointment Time</th>
                  <th class="p-3 font-medium text-left">Date</th>
                  <th class="p-3 font-medium text-left">Service</th>
                  <th class="p-3 font-medium text-left">Payment</th>
                  <th class="p-3 font-medium text-left">Reschedule</th>
                  <th class="p-3 font-medium text-left">Raise Dispute</th>
                  <th class="p-3 font-medium text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let row of todayAppointments; let i = index" class="border-b last:border-b-0">
                  <td class="p-3"><input type="checkbox" /></td>
                  <td class="p-3 flex items-center gap-2"><img [src]="row.avatar" class="w-8 h-8 rounded-full" /><div><div class="font-semibold text-gray-900 text-xs">{{row.name}}</div><div class="text-[10px] text-gray-400">{{row.agency}}</div></div></td>
                  <td class="p-3">{{row.time}}</td>
                  <td class="p-3">{{row.date}}</td>
                  <td class="p-3">{{row.service}}</td>
                  <td class="p-3">{{row.payment}}</td>
                  <td class="p-3"><label class="inline-flex items-center"><input type="checkbox" class="accent-[#8B7CFF] mr-1" (click)="openRescheduleModal(row)" /> <span class="text-xs">Reschedule</span></label></td>
                  <td class="p-3"><a href="#" class="text-[#8B7CFF] text-xs font-medium underline">Raise</a></td>
                  <td class="p-3"><button class="bg-[#FFE5EA] text-[#FF4D6D] px-4 py-1 rounded font-semibold text-xs">Cancel</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!-- Cross-Agency Appointment Table -->
        <div>
          <div class="flex items-center gap-2 mb-2">
            <span class="font-semibold text-gray-900">Cross-Agency Appointment</span>
            <span class="bg-gray-100 text-xs font-semibold px-2 py-1 rounded">6</span>
          </div>
          <div class="overflow-x-auto rounded-lg border border-gray-100">
            <table class="min-w-full text-sm">
              <thead class="bg-[#F7F8FA] text-gray-500">
                <tr>
                  <th class="p-3 font-medium"><input type="checkbox" /></th>
                  <th class="p-3 font-medium text-left">Consumer Name</th>
                  <th class="p-3 font-medium text-left">Appointment Time</th>
                  <th class="p-3 font-medium text-left">Date</th>
                  <th class="p-3 font-medium text-left">Service</th>
                  <th class="p-3 font-medium text-left">Payment</th>
                  <th class="p-3 font-medium text-left">Reschedule</th>
                  <th class="p-3 font-medium text-left">Raise Dispute</th>
                  <th class="p-3 font-medium text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let row of crossAgencyAppointments; let i = index" class="border-b last:border-b-0">
                  <td class="p-3"><input type="checkbox" /></td>
                  <td class="p-3 flex items-center gap-2"><img [src]="row.avatar" class="w-8 h-8 rounded-full" /><div><div class="font-semibold text-gray-900 text-xs">{{row.name}}</div><div class="text-[10px] text-gray-400">{{row.agency}}</div></div></td>
                  <td class="p-3">{{row.time}}</td>
                  <td class="p-3">{{row.date}}</td>
                  <td class="p-3">{{row.service}}</td>
                  <td class="p-3">{{row.payment}}</td>
                  <td class="p-3"><label class="inline-flex items-center"><input type="checkbox" class="accent-[#8B7CFF] mr-1" (click)="openRescheduleModal(row)" /> <span class="text-xs">Reschedule</span></label></td>
                  <td class="p-3"><a href="#" class="text-[#8B7CFF] text-xs font-medium underline">Raise</a></td>
                  <td class="p-3"><button class="bg-[#FFE5EA] text-[#FF4D6D] px-4 py-1 rounded font-semibold text-xs">Cancel</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- Reschedule Modal -->
    <div *ngIf="showRescheduleModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
      <div class="bg-white rounded-xl shadow-xl w-full max-w-md p-8 relative">
        <button (click)="closeRescheduleModal()" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
          <span class="material-icons text-2xl">close</span>
        </button>
        <div class="text-lg font-semibold text-gray-900 mb-1">Reschedule Appointment</div>
        <div class="text-xs text-gray-500 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque</div>
        <div class="mb-3">
          <label class="block text-xs text-gray-500 mb-1">Consumer Name</label>
          <input type="text" class="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm bg-gray-50" [value]="selectedAppointment?.name" readonly />
        </div>
        <div class="mb-3">
          <label class="block text-xs text-gray-500 mb-1">Current Date & Time</label>
          <input type="text" class="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm bg-gray-50" [value]="selectedAppointment?.date + ' / ' + selectedAppointment?.time" readonly />
        </div>
        <div class="flex gap-2 mb-3">
          <div class="flex-1">
            <label class="block text-xs text-gray-500 mb-1">New Date</label>
            <input type="date" class="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm" />
          </div>
          <div class="flex-1">
            <label class="block text-xs text-gray-500 mb-1">New Time</label>
            <input type="text" class="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm" placeholder="12:00 - 01:00" />
          </div>
        </div>
        <div class="mb-6">
          <label class="block text-xs text-gray-500 mb-1">Reschedule Reason</label>
          <textarea class="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm min-h-[60px]" placeholder="Write reason..."></textarea>
        </div>
        <div class="flex justify-end gap-2">
          <button (click)="closeRescheduleModal()" class="px-4 py-2 rounded-lg border border-gray-200 text-gray-700 font-semibold text-sm">Cancel</button>
          <button (click)="showConfirmModal()" class="px-4 py-2 rounded-lg bg-[#8B7CFF] text-white font-semibold text-sm">Confirm</button>
        </div>
      </div>
    </div>

    <!-- Confirmation Modal -->
    <div *ngIf="showConfirmationModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
      <div class="bg-white rounded-xl shadow-xl w-full max-w-sm p-6 relative flex flex-col items-center">
        <button (click)="closeConfirmationModal()" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
          <span class="material-icons text-2xl">close</span>
        </button>
        <div class="flex items-center justify-center w-12 h-12 rounded-full bg-[#F4F1FF] mb-3 mt-2">
          <span class="material-icons text-3xl text-[#8B7CFF]">event</span>
        </div>
        <div class="text-base font-semibold text-gray-900 mb-1 text-center">Are you sure you want to reschedule appointment ?</div>
        <div class="text-xs text-gray-500 mb-6 text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ........</div>
        <div class="flex justify-center gap-2 w-full">
          <button (click)="closeConfirmationModal()" class="flex-1 px-4 py-2 rounded-lg border border-gray-200 text-gray-700 font-semibold text-sm">Cancel</button>
          <button (click)="closeConfirmationModal()" class="flex-1 px-4 py-2 rounded-lg bg-[#8B7CFF] text-white font-semibold text-sm">Sure</button>
        </div>
      </div>
    </div>
  `
})
export class AppointmentsComponent {
  showRescheduleModal = false;
  showConfirmationModal = false;
  selectedAppointment: any = null;
  todayAppointments = [
    { name: 'Rajul Natt', agency: 'Agency101', avatar: 'https://randomuser.me/api/portraits/men/1.jpg', time: '11:00 - 12:00', date: '31. Dec. 2022', service: 'Lorem Ipsum is simply dummy', payment: '$100.00' },
    { name: 'Steve Rogers', agency: 'Agency102', avatar: 'https://randomuser.me/api/portraits/men/2.jpg', time: '11:00 - 12:00', date: '31. Dec. 2022', service: 'Lorem Ipsum is simply dummy', payment: '$100.00' },
  ];
  crossAgencyAppointments = [
    { name: 'Rajul Natt', agency: 'Agency101', avatar: 'https://randomuser.me/api/portraits/men/1.jpg', time: '11:00 - 12:00', date: '31. Dec. 2022', service: 'Lorem Ipsum is simply dummy', payment: '$100.00' },
  ];
  openRescheduleModal(row: any) {
    this.selectedAppointment = row;
    this.showRescheduleModal = true;
  }
  closeRescheduleModal() {
    this.showRescheduleModal = false;
    this.selectedAppointment = null;
  }
  showConfirmModal() {
    this.showRescheduleModal = false;
    this.showConfirmationModal = true;
  }
  closeConfirmationModal() {
    this.showConfirmationModal = false;
  }
} 