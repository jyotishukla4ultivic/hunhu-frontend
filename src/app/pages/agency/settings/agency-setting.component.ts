import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TitleHeaderComponent } from '../../../components/common-components/title-header.component';

@Component({
  selector: 'app-agency-setting',
  standalone: true,
  imports: [CommonModule, FormsModule, TitleHeaderComponent],
  template: `
    <div class="bg-[#F8F8FB] min-h-screen py-4 px-1 sm:py-8 sm:px-4 md:px-8 flex flex-col">
      <div class="w-full bg-white rounded-2xl shadow p-2 sm:p-4 md:p-8 xl:p-10" style="min-width:0;">
        <app-title-header title="Setting"></app-title-header>
        <!-- Tabs -->
        <div class="flex flex-wrap gap-2 md:gap-8 border-b border-[#E9EAF0] mb-6 overflow-x-auto">
          <button class="flex items-center gap-2 pb-3 px-2 text-sm font-medium border-b-2 transition whitespace-nowrap" [ngClass]="{'border-[#8280FF] text-[#8280FF]': selectedTab === 0, 'border-transparent text-gray-500': selectedTab !== 0}" (click)="selectedTab = 0">
            <span class="material-icons text-base">person</span> Profile Setting
          </button>
          <button class="flex items-center gap-2 pb-3 px-2 text-sm font-medium border-b-2 transition whitespace-nowrap" [ngClass]="{'border-[#8280FF] text-[#8280FF]': selectedTab === 1, 'border-transparent text-gray-500': selectedTab !== 1}" (click)="selectedTab = 1">
            <span class="material-icons text-base">business</span> Agency Profile Setting
          </button>
          <button class="flex items-center gap-2 pb-3 px-2 text-sm font-medium border-b-2 transition whitespace-nowrap" [ngClass]="{'border-[#8280FF] text-[#8280FF]': selectedTab === 2, 'border-transparent text-gray-500': selectedTab !== 2}" (click)="selectedTab = 2">
            <span class="material-icons text-base">settings</span> Platform Setting
          </button>
        </div>
        <!-- Tab 1: Profile Setting -->
        <div *ngIf="selectedTab === 0">
          <div class="text-lg font-semibold text-gray-700 mb-6">Profile Setting</div>
          <div class="flex flex-col md:flex-row gap-6 md:gap-8 mb-8">
            <!-- Profile Photo -->
            <div class="flex flex-col items-center md:items-start w-full md:w-1/4">
              <div class="relative">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" class="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-white shadow" />
                <button class="absolute bottom-2 right-2 bg-[#8280FF] text-white rounded-full w-8 h-8 flex items-center justify-center border-2 border-white shadow"><span class="material-icons text-base">edit</span></button>
              </div>
              <div class="mt-2 text-sm text-gray-600">Profile Photo</div>
            </div>
            <!-- Profile Form -->
            <form class="flex-1 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4 md:gap-x-6 md:gap-y-4 border border-dashed border-[#A0A7C9] rounded-xl p-2 sm:p-4 md:p-8">
              <div class="flex flex-col">
                <label class="text-xs font-medium text-gray-500 mb-1">Owner First Name</label>
                <input type="text" class="border border-[#E0E7EF] rounded px-3 py-2 text-sm" value="Savannah" />
              </div>
              <div class="flex flex-col">
                <label class="text-xs font-medium text-gray-500 mb-1">Owner Last Name</label>
                <input type="text" class="border border-[#E0E7EF] rounded px-3 py-2 text-sm" value="Nguyen" />
              </div>
              <div class="flex flex-col">
                <label class="text-xs font-medium text-gray-500 mb-1">Email</label>
                <input type="email" class="border border-[#E0E7EF] rounded px-3 py-2 text-sm" value="balaji@gmail.com" />
              </div>
              <div class="flex flex-col">
                <label class="text-xs font-medium text-gray-500 mb-1">Phone Number</label>
                <div class="flex items-center gap-2">
                  <span class="flex items-center gap-1 border border-[#E0E7EF] rounded px-2 py-2 text-sm bg-[#F8F8FB]">
                    <img src="https://flagcdn.com/in.svg" class="w-5 h-4 rounded object-cover" />
                    <span class="text-xs font-medium text-gray-700">IND(+91)</span>
                  </span>
                  <input type="text" class="border border-[#E0E7EF] rounded px-3 py-2 text-sm flex-1" value="6323231313" />
                </div>
              </div>
              <div class="md:col-span-2 flex flex-col">
                <label class="text-xs font-medium text-gray-500 mb-1">Address</label>
                <input type="text" class="border border-[#E0E7EF] rounded px-3 py-2 text-sm" value="College Rocio s/n Esc. 687, Torrejón de Ardoz, Bal 40562" />
              </div>
              <div class="flex flex-col">
                <label class="text-xs font-medium text-gray-500 mb-1">City</label>
                <select class="border border-[#E0E7EF] rounded px-3 py-2 text-sm">
                  <option>Mexico</option>
                </select>
              </div>
              <div class="flex flex-col">
                <label class="text-xs font-medium text-gray-500 mb-1">Country</label>
                <input type="text" class="border border-[#E0E7EF] rounded px-3 py-2 text-sm" value="Mexico" />
              </div>
              <div class="md:col-span-2 flex flex-col">
                <label class="text-xs font-medium text-gray-500 mb-1">Bio</label>
                <textarea class="border border-[#E0E7EF] rounded px-3 py-2 text-sm resize-none" rows="2" maxlength="120">Bio..</textarea>
                <div class="text-right text-xs text-gray-400 mt-1">0/120</div>
              </div>
            </form>
          </div>
          <div class="flex flex-col md:flex-row justify-between mt-4 gap-2 md:gap-4">
            <button class="px-6 py-2 rounded border border-[#E0E7EF] text-gray-600 font-medium w-full md:w-auto">Cancel</button>
            <button class="px-8 py-2 rounded bg-[#8280FF] text-white font-semibold w-full md:w-auto">Update</button>
          </div>
        </div>
        <!-- Tab 2: Agency Profile Setting -->
        <div *ngIf="selectedTab === 1">
          <div class="text-lg font-semibold text-gray-700 mb-6">Agency Profile Setting</div>
          <div class="flex flex-col md:flex-row gap-6 md:gap-8 mb-8">
            <!-- Profile Photo -->
            <div class="flex flex-col items-center md:items-start w-full md:w-1/4">
              <div class="relative">
                <div class="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-[#F5F6FA] flex items-center justify-center text-4xl sm:text-5xl text-[#8280FF] font-bold border-4 border-white shadow">S</div>
                <button class="absolute bottom-2 right-2 bg-[#8280FF] text-white rounded-full w-8 h-8 flex items-center justify-center border-2 border-white shadow"><span class="material-icons text-base">edit</span></button>
              </div>
              <div class="mt-2 text-sm text-gray-600">Profile Photo</div>
            </div>
            <!-- Agency Form & Theme Colour -->
            <div class="flex-1 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4 md:gap-x-6 md:gap-y-4">
              <div class="flex flex-col md:col-span-1">
                <label class="text-xs font-medium text-gray-500 mb-1">Agency Name</label>
                <input type="text" class="border border-[#E0E7EF] rounded px-3 py-2 text-sm" value="Agency1" />
              </div>
              <div class="flex flex-col md:col-span-1">
                <label class="text-xs font-medium text-gray-500 mb-1">Agency Email</label>
                <input type="email" class="border border-[#E0E7EF] rounded px-3 py-2 text-sm" value="agency1@gmail.com" />
              </div>
              <div class="md:col-span-2 flex flex-col">
                <label class="text-xs font-medium text-gray-500 mb-1">About Agency</label>
                <textarea class="border border-[#E0E7EF] rounded px-3 py-2 text-sm resize-none" rows="2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus.</textarea>
              </div>
              <div class="flex flex-col md:col-span-1">
                <label class="text-xs font-medium text-gray-500 mb-1">Category</label>
                <select class="border border-[#E0E7EF] rounded px-3 py-2 text-sm">
                  <option>Spiritual</option>
                </select>
              </div>
              <div class="flex flex-col md:col-span-1">
                <label class="text-xs font-medium text-gray-500 mb-1">Sub-category</label>
                <input type="text" class="border border-[#E0E7EF] rounded px-3 py-2 text-sm" value="Yoga, Research, Meditation, Psychology..." />
              </div>
            </div>
            <!-- Theme Colour Card -->
            <div class="w-full md:w-1/3 mt-6 md:mt-0">
              <div class="border border-[#E0E7EF] rounded-xl p-4 flex flex-col items-center gap-2">
                <img src="https://via.placeholder.com/120x80.png?text=Theme+Preview" class="rounded mb-2 w-full max-w-[180px]" />
                <div class="text-xs text-gray-500 text-center">Upload your Profile Photo here. <span class='font-semibold'>Important!</span> Optimized format: .jpg, .jpeg, .png, .gif</div>
                <button class="mt-2 px-4 py-2 rounded bg-[#8280FF] text-white font-semibold text-sm flex items-center gap-2"><span class="material-icons text-base">color_lens</span> Customize Colour</button>
              </div>
            </div>
          </div>
          <div class="flex flex-col md:flex-row justify-between mt-4 gap-2 md:gap-4">
            <button class="px-6 py-2 rounded border border-[#E0E7EF] text-gray-600 font-medium w-full md:w-auto">Cancel</button>
            <button class="px-8 py-2 rounded bg-[#8280FF] text-white font-semibold w-full md:w-auto">Update</button>
          </div>
        </div>
        <!-- Tab 3: Platform Setting -->
        <div *ngIf="selectedTab === 2">
          <div class="text-lg font-semibold text-gray-700 mb-6">Platform Setting</div>
          <div class="flex flex-col gap-4">
            <div class="flex items-center justify-between border-b border-[#E9EAF0] py-4">
              <div>
                <div class="font-medium text-gray-800">Show Providers in Cross-Agency</div>
                <div class="text-xs text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</div>
              </div>
              <label class="inline-flex items-center cursor-pointer">
                <input type="checkbox" class="sr-only peer" [(ngModel)]="platformSettings[0]">
                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#8280FF] rounded-full peer peer-checked:bg-[#8280FF] transition"></div>
                <div class="absolute w-5 h-5 bg-white border border-gray-300 rounded-full left-1 top-0.5 transition peer-checked:translate-x-5"></div>
              </label>
            </div>
            <div class="flex items-center justify-between border-b border-[#E9EAF0] py-4">
              <div>
                <div class="font-medium text-gray-800">Show Cross-Agency Notification</div>
                <div class="text-xs text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</div>
              </div>
              <label class="inline-flex items-center cursor-pointer">
                <input type="checkbox" class="sr-only peer" [(ngModel)]="platformSettings[1]">
                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#8280FF] rounded-full peer peer-checked:bg-[#8280FF] transition"></div>
                <div class="absolute w-5 h-5 bg-white border border-gray-300 rounded-full left-1 top-0.5 transition peer-checked:translate-x-5"></div>
              </label>
            </div>
            <div class="flex items-center justify-between border-b border-[#E9EAF0] py-4">
              <div>
                <div class="font-medium text-gray-800">Show Notifications</div>
                <div class="text-xs text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</div>
              </div>
              <label class="inline-flex items-center cursor-pointer">
                <input type="checkbox" class="sr-only peer" [(ngModel)]="platformSettings[2]">
                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#8280FF] rounded-full peer peer-checked:bg-[#8280FF] transition"></div>
                <div class="absolute w-5 h-5 bg-white border border-gray-300 rounded-full left-1 top-0.5 transition peer-checked:translate-x-5"></div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [``]
})
export class AgencySettingComponent {
  selectedTab = 0;
  platformSettings = [true, true, true];
} 