import { Component } from '@angular/core';
import { NgIf, NgClass, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [NgIf, NgClass, NgFor, FormsModule],
  template: `
    <div class="p-6 min-h-screen bg-gray-50">
      <h1 class="text-2xl font-bold mb-4">Settings</h1>
      <div class="bg-white rounded-xl shadow p-8 w-full mx-auto">
        <div class="flex border-b border-[#E0E7EF] mb-8">
          <button class="px-6 py-3 -mb-px text-base font-semibold focus:outline-none" [ngClass]="tab === 0 ? 'border-b-2 border-[#1952B3] text-[#1952B3] bg-white' : 'text-gray-500'" (click)="tab = 0">Account settings</button>
          <button class="px-6 py-3 -mb-px text-base font-semibold focus:outline-none" [ngClass]="tab === 1 ? 'border-b-2 border-[#1952B3] text-[#1952B3] bg-white' : 'text-gray-500'" (click)="tab = 1">Notifications</button>
        </div>
        <div *ngIf="tab === 0">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div class="flex flex-col items-center gap-4">
              <img src="/assets/icons/profile.svg" class="w-32 h-32 rounded-full object-cover border-4 border-white shadow" alt="Profile" />
              <div class="text-center">
                <div class="font-semibold text-lg">User Name</div>
                <div class="text-xs text-gray-400">Image size should be square. Min 64x64 and max 256x256 px.</div>
              </div>
            </div>
            <div class="md:col-span-2 flex flex-col gap-4">
              <div class="flex gap-4">
                <input type="text" class="w-full border border-[#E0E7EF] rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#1952B3]" placeholder="First name" />
                <input type="text" class="w-full border border-[#E0E7EF] rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#1952B3]" placeholder="Last name" />
              </div>
              <input type="text" class="w-full border border-[#E0E7EF] rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#1952B3]" placeholder="Username" />
              <input type="email" class="w-full border border-[#E0E7EF] rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#1952B3]" placeholder="Email address" />
              <button class="self-start px-6 py-2 rounded-lg bg-[#1952B3] text-white font-semibold text-sm mt-2">Save changes</button>
            </div>
          </div>
          <div class="border-t border-[#E0E7EF] pt-8 mt-8">
            <div class="font-semibold text-lg mb-4">Change password</div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div class="flex flex-col gap-4 md:col-span-2">
                <input type="password" class="w-full border border-[#E0E7EF] rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#1952B3]" placeholder="Current Password" />
                <input type="password" class="w-full border border-[#E0E7EF] rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#1952B3]" placeholder="New Password" />
                <input type="password" class="w-full border border-[#E0E7EF] rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#1952B3]" placeholder="Confirm new password" />
                <button class="self-start px-6 py-2 rounded-lg bg-[#1952B3] text-white font-semibold text-sm mt-2">Change Password</button>
              </div>
            </div>
          </div>
        </div>
        <div *ngIf="tab === 1">
          <div class="mb-8">
            <h2 class="text-xl font-bold mb-6">Notification</h2>
            <div *ngFor="let n of notifications" class="flex items-center justify-between mb-6">
              <div>
                <div class="font-semibold text-base mb-1">{{n.title}}</div>
                <div class="text-sm text-gray-400">{{n.desc}}</div>
              </div>
              <label class="inline-flex items-center cursor-pointer">
                <input type="checkbox" class="sr-only peer" [(ngModel)]="n.enabled">
                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#1952B3] rounded-full peer peer-checked:bg-[#1952B3] transition"></div>
                <div class="absolute w-5 h-5 bg-white border border-gray-300 rounded-full left-1 top-0.5 transition peer-checked:translate-x-5"></div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class SettingsComponent {
  tab = 0;
  notifications = [
    {
      title: 'Notification On New Agency Registrations Request',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
      enabled: true
    },
    {
      title: 'Notification When a Payment is Received From An Agency',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
      enabled: true
    },
    {
      title: 'Notify When An Agency Requests Account Deletion',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
      enabled: true
    }
  ];
} 