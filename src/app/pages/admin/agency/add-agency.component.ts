import { Component } from '@angular/core';
import { NgIf, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-agency',
  standalone: true,
  imports: [NgIf, NgClass, FormsModule],
  template: `
    <div class="p-8 min-h-screen bg-gray-50">
      <h1 class="text-2xl font-bold mb-1">Agency</h1>
      <div class="text-xs text-[#1952B3] font-semibold mb-6">Agency / Add Agency</div>
      <div class="bg-white rounded-xl shadow p-8 w-full mx-auto">
        <div class="flex border-b border-[#E0E7EF] mb-8">
          <button class="flex items-center gap-2 px-6 py-3 -mb-px text-base font-semibold focus:outline-none" [ngClass]="tab === 0 ? 'border-b-2 border-[#1952B3] text-[#1952B3] bg-white' : 'text-gray-500'" (click)="tab = 0">
            <span class="material-icons">person</span> Basic Information
          </button>
          <button class="flex items-center gap-2 px-6 py-3 -mb-px text-base font-semibold focus:outline-none" [ngClass]="tab === 1 ? 'border-b-2 border-[#1952B3] text-[#1952B3] bg-white' : 'text-gray-500'" (click)="tab = 1">
            <span class="material-icons">share</span> Social Profile
          </button>
          <button class="flex items-center gap-2 px-6 py-3 -mb-px text-base font-semibold focus:outline-none" [ngClass]="tab === 2 ? 'border-b-2 border-[#1952B3] text-[#1952B3] bg-white' : 'text-gray-500'" (click)="tab = 2">
            <span class="material-icons">info</span> Agency Information
          </button>
        </div>
        <div *ngIf="tab === 0">
          <div class="font-bold text-lg mb-6">Basic Information</div>
          <div class="flex gap-8 mb-8">
            <div class="w-40 h-40 bg-gray-100 rounded-lg flex flex-col items-center justify-center border border-dashed border-[#E0E7EF]">
              <span class="material-icons text-6xl text-gray-300 mb-2">image</span>
              <button class="px-4 py-2 rounded-lg bg-[#E0E7EF] text-[#1952B3] font-semibold text-sm">Upload Image</button>
            </div>
            <div class="flex-1 flex flex-col justify-center">
              <div class="text-xs text-gray-500 mb-1">Upload your Profile Photo here. <span class="font-semibold text-black">Important guidelines:</span></div>
              <div class="text-xs text-gray-400">1200×800 pixels or 1:2/1:8 Ratio. Supported formats: <span class="font-semibold text-black">.jpg, .jpeg, or .png</span></div>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <input type="text" class="w-full border border-[#E0E7EF] rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#1952B3]" placeholder="Owner First Name" />
            <input type="text" class="w-full border border-[#E0E7EF] rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#1952B3]" placeholder="Owner Last Name" />
            <input type="email" class="w-full border border-[#E0E7EF] rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#1952B3]" placeholder="Email" />
            <div class="flex gap-2">
              <select class="border border-[#E0E7EF] rounded-lg px-2 py-2 text-sm focus:ring-2 focus:ring-[#1952B3] w-28">
                <option>IND(+91)</option>
              </select>
              <input type="text" class="flex-1 border border-[#E0E7EF] rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#1952B3]" placeholder="0000-00-0000" />
            </div>
            <input type="text" class="w-full border border-[#E0E7EF] rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#1952B3]" placeholder="Address" />
            <div class="flex gap-2">
              <select class="w-full border border-[#E0E7EF] rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#1952B3]">
                <option>Select...</option>
              </select>
              <select class="w-full border border-[#E0E7EF] rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#1952B3]">
                <option>Select...</option>
              </select>
            </div>
            <div class="md:col-span-2">
              <textarea maxlength="120" rows="2" class="w-full border border-[#E0E7EF] rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#1952B3]" placeholder="Bio..."></textarea>
              <div class="text-xs text-gray-400 text-right mt-1">0/120</div>
            </div>
          </div>
          <div class="flex justify-between mt-8">
            <button class="px-6 py-2 rounded-lg border border-[#E0E7EF] text-gray-700 font-semibold text-sm">Cancel</button>
            <button class="px-6 py-2 rounded-lg bg-[#1952B3] text-white font-semibold text-sm">Next</button>
          </div>
        </div>
        <div *ngIf="tab === 1">
          <div class="font-bold text-lg mb-6">Social Profile</div>
          <div class="flex items-center gap-4 mb-8">
            <div class="w-12 h-12 rounded-full bg-[#E0E7EF] flex items-center justify-center text-2xl font-bold text-white">J</div>
            <div class="flex-1">
              <label class="block text-sm font-semibold mb-1">Agency Website</label>
              <input type="text" class="w-full border border-[#E0E7EF] rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#1952B3]" placeholder="Personal website or portfolio url..." />
            </div>
          </div>
          <div class="mb-8">
            <label class="block text-sm font-semibold mb-1">Fab Icon</label>
            <button class="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#E0E7EF] text-[#1952B3] font-semibold text-sm"><span class="material-icons">cloud_upload</span> Upload Fab. Icon</button>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div class="flex items-center gap-2">
              <span class="material-icons text-[#1877F2]">facebook</span>
              <input type="text" class="w-full border border-[#E0E7EF] rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#1952B3]" placeholder="Username" />
            </div>
            <div class="flex items-center gap-2">
              <span class="material-icons text-[#E4405F]">instagram</span>
              <input type="text" class="w-full border border-[#E0E7EF] rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#1952B3]" placeholder="Username" />
            </div>
            <div class="flex items-center gap-2">
              <span class="material-icons text-[#0A66C2]">linkedin</span>
              <input type="text" class="w-full border border-[#E0E7EF] rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#1952B3]" placeholder="Username" />
            </div>
            <div class="flex items-center gap-2">
              <span class="material-icons text-[#1DA1F2]">twitter</span>
              <input type="text" class="w-full border border-[#E0E7EF] rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#1952B3]" placeholder="Username" />
            </div>
            <div class="flex items-center gap-2">
              <span class="material-icons text-[#25D366]">whatsapp</span>
              <input type="text" class="w-full border border-[#E0E7EF] rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#1952B3]" placeholder="Phone number" />
            </div>
            <div class="flex items-center gap-2">
              <span class="material-icons text-[#FF0000]">youtube</span>
              <input type="text" class="w-full border border-[#E0E7EF] rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#1952B3]" placeholder="Username" />
            </div>
          </div>
          <div class="flex justify-between mt-8">
            <button class="px-6 py-2 rounded-lg border border-[#E0E7EF] text-gray-700 font-semibold text-sm">Cancel</button>
            <button class="px-6 py-2 rounded-lg bg-[#1952B3] text-white font-semibold text-sm">Next</button>
          </div>
        </div>
        <div *ngIf="tab === 2">
          <div class="font-bold text-lg mb-6">Agency Information</div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <!-- Agency Logo Upload -->
            <div class="bg-white rounded-xl border border-[#E0E7EF] p-6 flex flex-col items-center">
              <span class="material-icons text-6xl text-gray-300 mb-2">image</span>
              <button class="px-4 py-2 rounded-lg bg-[#E0E7EF] text-[#1952B3] font-semibold text-sm mb-2">Upload Logo</button>
              <div class="text-xs text-gray-500 mb-1 text-center">Upload your Profile Photo here. <span class="font-semibold text-black">Important guidelines:</span></div>
              <div class="text-xs text-gray-400 text-center">1200×800 pixels or 1:2/1:8 Ratio. Supported formats: <span class="font-semibold text-black">.jpg, .jpeg, or .png</span></div>
            </div>
            <!-- Theme Color Customization -->
            <div class="bg-white rounded-xl border border-[#E0E7EF] p-6 flex flex-col items-center">
              <img src="/assets/icons/emptyStateImage.svg" class="w-40 h-24 object-contain mb-2" />
              <div class="w-12 h-12 rounded-full bg-[#E0E7EF] flex items-center justify-center text-2xl font-bold text-white absolute -mt-16 ml-32">J</div>
              <div class="font-semibold text-base mb-1">Customize Theme Colour</div>
              <div class="text-xs text-gray-400 text-center mb-2">Customize your dashboard easily with different theme colours. Pick your brand and favourite to match your style and work needs.</div>
              <button class="px-4 py-2 rounded-lg bg-[#1952B3] text-white font-semibold text-sm">Customize Colour</button>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <select class="w-full border border-[#E0E7EF] rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#1952B3]" placeholder="Agency Name">
              <option>Demo agency...</option>
            </select>
            <input type="text" class="w-full border border-[#E0E7EF] rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#1952B3]" placeholder="Agency Commission" />
            <input type="email" class="w-full border border-[#E0E7EF] rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#1952B3]" placeholder="Agency Email" />
            <input type="text" class="w-full border border-[#E0E7EF] rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#1952B3]" placeholder="About Agency" />
            <div class="flex gap-2">
              <select class="w-full border border-[#E0E7EF] rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#1952B3]">
                <option>Select...</option>
              </select>
              <select class="w-full border border-[#E0E7EF] rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#1952B3]">
                <option>Select...</option>
              </select>
            </div>
          </div>
          <div class="flex justify-between mt-8">
            <button class="px-6 py-2 rounded-lg border border-[#E0E7EF] text-gray-700 font-semibold text-sm">Cancel</button>
            <button class="px-6 py-2 rounded-lg bg-[#1952B3] text-white font-semibold text-sm">Save Agency</button>
          </div>
        </div>
      </div>
    </div>
  `
})
export class AddAgencyComponent {
  tab = 0;
} 