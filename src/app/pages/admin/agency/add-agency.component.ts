import { Component, inject } from '@angular/core';
import { NgIf, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ThemePickerComponent } from '../../../components/common-components/theme-picker.component';
import { ThemeColors } from '../../../models/theme.model';
import { ThemeService } from '../../../services/theme.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { ToastrService, ToastrModule } from 'ngx-toastr';


@Component({
  selector: 'app-add-agency',
  standalone: true,
  imports: [NgIf, NgClass, FormsModule, ThemePickerComponent],
  template: `
    <div class="min-h-screen bg-gray-50">
      <div class="bg-white rounded-xl shadow w-full">
        <div class="p-8">
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
                <input type="file" (change)="onFileChange($event, 'profile_picture')" class="hidden" #profilePicInput />
                <button class="px-4 py-2 rounded-lg bg-[#E0E7EF] text-[#1952B3] font-semibold text-sm" (click)="profilePicInput.click()">Upload Image</button>
              </div>
              <div class="flex-1 flex flex-col justify-center">
                <div class="text-xs text-gray-500 mb-1">Upload your Profile Photo here. <span class="font-semibold text-black">Important guidelines:</span></div>
                <div class="text-xs text-gray-400">1200×800 pixels or 1:2/1:8 Ratio. Supported formats: <span class="font-semibold text-black">.jpg, .jpeg, or .png</span></div>
              </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <input type="text" class="w-full border border-[#E0E7EF] rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#1952B3]" placeholder="Owner First Name" [(ngModel)]="agencyForm['owner_first_name']" />
              <input type="text" class="w-full border border-[#E0E7EF] rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#1952B3]" placeholder="Owner Last Name" [(ngModel)]="agencyForm['owner_last_name']" />
              <input type="email" class="w-full border border-[#E0E7EF] rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#1952B3]" placeholder="Email" [(ngModel)]="agencyForm['email']" />
              <div class="flex gap-2">
                <select class="border border-[#E0E7EF] rounded-lg px-2 py-2 text-sm focus:ring-2 focus:ring-[#1952B3] w-28" [(ngModel)]="agencyForm['country']">
                  <option *ngFor="let country of countryOptions" [value]="country">{{ country }}</option>
                </select>
                <input type="text" class="flex-1 border border-[#E0E7EF] rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#1952B3]" placeholder="0000-00-0000" [(ngModel)]="agencyForm['phone']" />
              </div>
              <input type="text" class="w-full border border-[#E0E7EF] rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#1952B3]" placeholder="Address" [(ngModel)]="agencyForm['address']" />
              <input type="text" class="w-full border border-[#E0E7EF] rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#1952B3]" placeholder="City" [(ngModel)]="agencyForm['city']" />
              <div class="md:col-span-2">
                <textarea maxlength="120" rows="2" class="w-full border border-[#E0E7EF] rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#1952B3]" placeholder="Bio..." [(ngModel)]="agencyForm['bio']"></textarea>
                <div class="text-xs text-gray-400 text-right mt-1">{{ agencyForm['bio']?.length || 0 }}/120</div>
              </div>
            </div>
            <div class="flex justify-between mt-8">
              <button class="px-6 py-2 rounded-lg border border-[#E0E7EF] text-gray-700 font-semibold text-sm" (click)="prevTab()" [disabled]="tab === 0">Back</button>
              <button class="px-6 py-2 rounded-lg bg-[#1952B3] text-white font-semibold text-sm" (click)="nextTab()">Next</button>
            </div>
          </div>
          <div *ngIf="tab === 1">
            <div class="font-bold text-lg mb-6">Social Profile</div>
            <label class="block text-sm font-semibold mb-1">Agency Website</label>
            <input type="text" class="w-full border border-[#E0E7EF] rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#1952B3] mb-6" placeholder="Personal website or portfolio url..." [(ngModel)]="agencyForm['website']" />
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <input type="text" class="w-full border border-[#E0E7EF] rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#1952B3]" placeholder="Facebook" [(ngModel)]="agencyForm['facebook']" />
              <input type="text" class="w-full border border-[#E0E7EF] rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#1952B3]" placeholder="Instagram" [(ngModel)]="agencyForm['instagram']" />
              <input type="text" class="w-full border border-[#E0E7EF] rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#1952B3]" placeholder="Linkedin" [(ngModel)]="agencyForm['linkedin']" />
              <input type="text" class="w-full border border-[#E0E7EF] rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#1952B3]" placeholder="Twitter" [(ngModel)]="agencyForm['twitter']" />
              <input type="text" class="w-full border border-[#E0E7EF] rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#1952B3]" placeholder="Whatsapp" [(ngModel)]="agencyForm['whatsapp']" />
              <input type="text" class="w-full border border-[#E0E7EF] rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#1952B3]" placeholder="Youtube" [(ngModel)]="agencyForm['youtube']" />
            </div>
            <div class="flex justify-between mt-8">
              <button class="px-6 py-2 rounded-lg border border-[#E0E7EF] text-gray-700 font-semibold text-sm" (click)="prevTab()">Back</button>
              <button class="px-6 py-2 rounded-lg bg-[#1952B3] text-white font-semibold text-sm" (click)="nextTab()">Next</button>
            </div>
          </div>
          <div *ngIf="tab === 2">
            <div class="font-bold text-lg mb-6">Agency Information</div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div class="bg-white rounded-xl border border-[#E0E7EF] p-6 flex flex-col items-center">
                <span class="material-icons text-6xl text-gray-300 mb-2">image</span>
                <input type="file" (change)="onFileChange($event, 'agency_logo')" class="hidden" #agencyLogoInput />
                <button class="px-4 py-2 rounded-lg bg-[#E0E7EF] text-[#1952B3] font-semibold text-sm mb-2" (click)="agencyLogoInput.click()">Upload Logo</button>
                <div class="text-xs text-gray-500 mb-1 text-center">Upload your Profile Photo here. <span class="font-semibold text-black">Important guidelines:</span></div>
                <div class="text-xs text-gray-400 text-center">1200×800 pixels or 1:2/1:8 Ratio. Supported formats: <span class="font-semibold text-black">.jpg, .jpeg, or .png</span></div>
              </div>
              <div class="bg-white rounded-xl border border-[#E0E7EF] p-6 flex flex-col items-center">
                <img src="/assets/icons/emptyStateImage.svg" class="w-40 h-24 object-contain mb-2" />
                <div class="font-semibold text-base mb-1">Customize Theme Colour</div>
                <div class="text-xs text-gray-400 text-center mb-2">Customize your dashboard easily with different theme colours. Pick your brand and favourite to match your style and work needs.</div>
                <button class="px-4 py-2 rounded-lg bg-[#1952B3] text-white font-semibold text-sm mb-2" (click)="goToCustomizeTheme()">Customize Colour</button>
                <app-theme-picker [theme]="theme" (themeChange)="onThemeChange($event)"></app-theme-picker>
              </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <select class="w-full border border-[#E0E7EF] rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#1952B3]" [(ngModel)]="agencyForm['agency_name']">
                <option>Demo agency...</option>
              </select>
              <input type="text" class="w-full border border-[#E0E7EF] rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#1952B3]" placeholder="Agency Commission" [(ngModel)]="agencyForm['commission']" />
              <input type="email" class="w-full border border-[#E0E7EF] rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#1952B3]" placeholder="Agency Email" [(ngModel)]="agencyForm['agency_email']" />
              <input type="text" class="w-full border border-[#E0E7EF] rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#1952B3]" placeholder="About Agency" [(ngModel)]="agencyForm['about']" />
              <div class="flex gap-2">
                <select class="w-full border border-[#E0E7EF] rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#1952B3]" [(ngModel)]="agencyForm['category_id']">
                  <option *ngFor="let cat of categoryOptions" [value]="cat.id">{{ cat.name }}</option>
                </select>
                <select class="w-full border border-[#E0E7EF] rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#1952B3]" [(ngModel)]="agencyForm['sub_category_id']">
                  <option *ngFor="let sub of subCategoryOptions" [value]="sub.id">{{ sub.name }}</option>
                </select>
              </div>
              <select class="w-full border border-[#E0E7EF] rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#1952B3]" [(ngModel)]="agencyForm['status']">
                <option *ngFor="let s of statusOptions" [value]="s.value">{{ s.label }}</option>
              </select>
            </div>
            <div class="flex justify-between mt-8">
              <button class="px-6 py-2 rounded-lg border border-[#E0E7EF] text-gray-700 font-semibold text-sm" (click)="prevTab()">Back</button>
              <button class="px-6 py-2 rounded-lg bg-[#1952B3] text-white font-semibold text-sm" (click)="saveAgency()">Save Agency</button>
            </div>
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
  router = inject(Router);
  http = inject(HttpClient);
  toastr = inject(ToastrService);

  // Dropdown options
  countryOptions = ['USA', 'India', 'UK', 'Canada'];
  categoryOptions = [
    { id: '1', name: 'Real Estate' },
    { id: '2', name: 'Property Management' }
  ];
  subCategoryOptions = [
    { id: '1', name: 'Residential' },
    { id: '2', name: 'Commercial' }
  ];
  statusOptions = [
    { value: '0', label: 'Draft' },
    { value: '1', label: 'Active' },
    { value: '2', label: 'Inactive' }
  ];

  agencyForm: { [key: string]: any } = {
    profile_picture: null as File|null,
    owner_first_name: '',
    owner_last_name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: 'USA', // default
    bio: '',
    website: '',
    facebook: '',
    instagram: '',
    linkedin: '',
    twitter: '',
    youtube: '',
    whatsapp: '',
    agency_favicon: null as File|null,
    agency_logo: null as File|null,
    agency_name: '',
    agency_email: '',
    category_id: '1', // default
    sub_category_id: '1', // default
    about: '',
    commission: '',
    status: '0', // default
    text_color: '',
    layout_background: '',
    content_background: '',
    card_background: '',
    primary_color: '',
    secondary_color: '',
    layout_icon_color: ''
  };

  constructor() {
    this.theme = this.themeService.getTheme();
  }
  onThemeChange(newTheme: ThemeColors) {
    this.theme = newTheme;
    this.themeService.setTheme(newTheme);
  }
  goToCustomizeTheme() {
    this.router.navigate(['/admin/agency/customize-theme']);
  }
  onFileChange(event: any, field: string) {
    const file = event.target.files && event.target.files.length ? event.target.files[0] : null;
    this.agencyForm[field] = file;
  }
  nextTab() {
    if (this.tab < 2) this.tab++;
  }
  prevTab() {
    if (this.tab > 0) this.tab--;
  }
  saveAgency() {
    const formData = new FormData();
    Object.entries(this.agencyForm).forEach(([key, value]) => {
      if (value !== null && value !== undefined && value !== '') {
        formData.append(key, value as any);
      }
    });
    this.http.post(`${environment.baseUrl}/agency/create`, formData).subscribe({
      next: (res) => {
        this.toastr.success('Agency created successfully!', 'Success');
        console.log('Agency created:', res);
      },
      error: (err) => {
        this.toastr.error('Failed to create agency.', 'Error');
        console.error('Error creating agency:', err);
      }
    });
  }
} 