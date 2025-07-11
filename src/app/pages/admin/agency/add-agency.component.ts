import { Component, inject } from '@angular/core';
import { NgIf, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ThemePickerComponent } from '../../../components/common-components/theme-picker.component';
import { ThemeColors } from '../../../models/theme.model';
import { ThemeService } from '../../../services/theme.service';


@Component({
  selector: 'app-add-agency',
  standalone: true,
  imports: [NgIf, NgClass, FormsModule, ThemePickerComponent],
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
          <label class="block text-sm font-semibold mb-1">Agency Website</label>
          <div class="relative mb-6">
            <span class="absolute left-3 top-1/2 -translate-y-1/2">
              <!-- Globe SVG -->
              <svg class="w-5 h-5 text-[#1952B3]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10C22 6.477 17.523 2 12 2zm0 18c-1.657 0-3-4.03-3-8s1.343-8 3-8 3 4.03 3 8-1.343 8-3 8zm7.938-8c-.445-3.392-3.393-6.062-7.938-6.062S4.507 8.608 4.062 12H19.938z"/></svg>
            </span>
            <input type="text" class="w-full border border-[#E0E7EF] rounded-lg px-10 py-2 text-sm focus:ring-2 focus:ring-[#1952B3]" placeholder="Personal website or portfolio url..." />
          </div>
          <label class="block text-sm font-semibold mb-1">Fab Icon</label>
          <button class="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#E0E7EF] text-[#1952B3] font-semibold text-sm w-full justify-start mb-6">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 15v4H5v-4H3v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4h-2zm-7-1V5.83l2.59 2.58L16 7l-4-4-4 4 1.41 1.41L11 5.83V14h2z"/></svg>
            Upload Fab. Icon
          </button>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label class="block text-sm font-semibold mb-1">Facebook</label>
              <div class="relative">
                <span class="absolute left-3 top-1/2 -translate-y-1/2">
                  <!-- Facebook SVG -->
                  <svg class="w-5 h-5 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"></path></svg>
                </span>
                <input type="text" class="w-full border border-[#E0E7EF] rounded-lg px-10 py-2 text-sm focus:ring-2 focus:ring-[#1952B3]" placeholder="Username" />
              </div>
            </div>
            <div>
              <label class="block text-sm font-semibold mb-1">Instagram</label>
              <div class="relative">
                <span class="absolute left-3 top-1/2 -translate-y-1/2">
                  <!-- Instagram SVG -->
                  <svg class="w-5 h-5 text-[#E4405F]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.363 3.678 1.344c-.98.98-1.213 2.092-1.272 3.373C2.013 8.332 2 8.741 2 12c0 3.259.013 3.668.072 4.948.059 1.281.292 2.393 1.272 3.373.98.98 2.092 1.213 3.373 1.272C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.281-.059 2.393-.292 3.373-1.272.98-.98 1.213-2.092 1.272-3.373.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.059-1.281-.292-2.393-1.272-3.373-.98-.98-2.092-1.213-3.373-1.272C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"></path></svg>
                </span>
                <input type="text" class="w-full border border-[#E0E7EF] rounded-lg px-10 py-2 text-sm focus:ring-2 focus:ring-[#1952B3]" placeholder="Username" />
              </div>
            </div>
            <div>
              <label class="block text-sm font-semibold mb-1">Linkedin</label>
              <div class="relative">
                <span class="absolute left-3 top-1/2 -translate-y-1/2">
                  <!-- LinkedIn SVG -->
                  <svg class="w-5 h-5 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.38v4.59h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.72z"></path></svg>
                </span>
                <input type="text" class="w-full border border-[#E0E7EF] rounded-lg px-10 py-2 text-sm focus:ring-2 focus:ring-[#1952B3]" placeholder="Username" />
              </div>
            </div>
            <div>
              <label class="block text-sm font-semibold mb-1">Twitter</label>
              <div class="relative">
                <span class="absolute left-3 top-1/2 -translate-y-1/2">
                  <!-- Twitter SVG -->
                  <svg class="w-5 h-5 text-[#1DA1F2]" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.93-.856 2.011-.857 3.17 0 2.188 1.115 4.116 2.823 5.247a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.058 0 14.009-7.496 14.009-13.986 0-.21-.005-.423-.014-.633A9.936 9.936 0 0 0 24 4.557z"></path></svg>
                </span>
                <input type="text" class="w-full border border-[#E0E7EF] rounded-lg px-10 py-2 text-sm focus:ring-2 focus:ring-[#1952B3]" placeholder="Username" />
              </div>
            </div>
            <div>
              <label class="block text-sm font-semibold mb-1">Whatsapp</label>
              <div class="relative">
                <span class="absolute left-3 top-1/2 -translate-y-1/2">
                  <!-- Whatsapp SVG -->
                  <svg class="w-5 h-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24"><path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.18-1.62A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.85 0-3.63-.5-5.18-1.44l-.37-.22-3.67.97.98-3.58-.24-.37A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.8c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.41-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.34-.26.27-1 1.01-1 2.46s1.02 2.85 1.16 3.05c.14.2 2.01 3.08 4.88 4.2.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.12.55-.08 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"></path></svg>
                </span>
                <input type="text" class="w-full border border-[#E0E7EF] rounded-lg px-10 py-2 text-sm focus:ring-2 focus:ring-[#1952B3]" placeholder="Phone number" />
              </div>
            </div>
            <div>
              <label class="block text-sm font-semibold mb-1">Youtube</label>
              <div class="relative">
                <span class="absolute left-3 top-1/2 -translate-y-1/2">
                  <!-- Youtube SVG -->
                  <svg class="w-5 h-5 text-[#FF0000]" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.112C19.545 3.5 12 3.5 12 3.5s-7.545 0-9.386.574A2.994 2.994 0 0 0 .502 6.186C0 8.027 0 12 0 12s0 3.973.502 5.814a2.994 2.994 0 0 0 2.112 2.112C4.455 20.5 12 20.5 12 20.5s7.545 0 9.386-.574a2.994 2.994 0 0 0 2.112-2.112C24 15.973 24 12 24 12s0-3.973-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path></svg>
                </span>
                <input type="text" class="w-full border border-[#E0E7EF] rounded-lg px-10 py-2 text-sm focus:ring-2 focus:ring-[#1952B3]" placeholder="Username" />
              </div>
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
              <div class="font-semibold text-base mb-1">Customize Theme Colour</div>
              <div class="text-xs text-gray-400 text-center mb-2">Customize your dashboard easily with different theme colours. Pick your brand and favourite to match your style and work needs.</div>
              <app-theme-picker [theme]="theme" (themeChange)="onThemeChange($event)"></app-theme-picker>
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
  theme: ThemeColors;
  themeService = inject(ThemeService);
  constructor() {
    this.theme = this.themeService.getTheme();
  }
  onThemeChange(newTheme: ThemeColors) {
    this.theme = newTheme;
    this.themeService.setTheme(newTheme);
  }
} 