import { Component, inject } from '@angular/core';
import { CommonModule, NgIf, NgClass } from '@angular/common';
import { ThemePickerComponent } from '../../../components/common-components/theme-picker.component';
import { ThemeColors } from '../../../models/theme.model';
import { ThemeService } from '../../../services/theme.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { PhoneInputFieldComponent } from '../../../components/shared-components/phone-input-field/phone-input-field';
import { DropdownFieldComponent } from '../../../components/shared-components/dropdown-field/dropdown-field';
import { TextareaFieldComponent } from '../../../components/shared-components/textarea-field/textarea-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { InputFieldWithIconComponent } from '../../../components/shared-components/input-field/input-field-with-icon';
import { InputFieldComponent } from '../../../components/shared-components/input-field/input-field';
import { CustomizeThemeComponent } from './customize-theme.component';


@Component({
  selector: 'app-add-agency',
  standalone: true,
  imports: [
    CommonModule,
    NgIf, NgClass, FormsModule, ReactiveFormsModule, ThemePickerComponent,
    PhoneInputFieldComponent, DropdownFieldComponent, TextareaFieldComponent,
    MatFormFieldModule, MatSelectModule, InputFieldWithIconComponent,
    InputFieldComponent, CustomizeThemeComponent
  ],
  template: `
    <div class="min-h-screen bg-gray-50">
      <div class="bg-white rounded-xl shadow w-full">
        <div class="p-8">
          <div class="flex border-b border-[#E0E7EF] mb-8">
            <button class="flex items-center gap-2 px-6 py-3 -mb-px text-base font-semibold focus:outline-none" [ngClass]="tab === 0 ? 'border-b-2 border-[#1952B3] text-[#1952B3] bg-white' : 'text-gray-500'" (click)="tab = 0">
              <img src="assets/icons/basicinformation.svg" alt="Basic Information" class="w-5 h-5 mr-2" /> Basic Information
            </button>
            <button class="flex items-center gap-2 px-6 py-3 -mb-px text-base font-semibold focus:outline-none" [ngClass]="tab === 1 ? 'border-b-2 border-[#1952B3] text-[#1952B3] bg-white' : 'text-gray-500'" (click)="tab = 1">
              <img src="assets/icons/socialprofile.svg" alt="Social Profile" class="w-5 h-5 mr-2" /> Social Profile
            </button>
            <button class="flex items-center gap-2 px-6 py-3 -mb-px text-base font-semibold focus:outline-none" [ngClass]="tab === 2 ? 'border-b-2 border-[#1952B3] text-[#1952B3] bg-white' : 'text-gray-500'" (click)="tab = 2">
              <img src="assets/icons/agencytab.svg" alt="Agency Information" class="w-5 h-5 mr-2" /> Agency Information
            </button>
          </div>
          <ng-container *ngIf="!showThemePicker">
            <div *ngIf="tab === 0">
              <div class="font-bold text-lg mb-6">Basic Information</div>
              <div class="flex items-start gap-6 mb-8">
                <!-- Profile Image Area -->
                <div class="flex flex-col items-center justify-center w-40 h-40 bg-gray-50 rounded-xl border border-dashed border-[#E0E7EF]">
                  <svg class="w-16 h-16 text-gray-300 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke-width="2" stroke="currentColor" fill="none"/>
                    <circle cx="12" cy="12" r="3" stroke-width="2" stroke="currentColor" fill="none"/>
                  </svg>
                  <input type="file" (change)="onFileChange($event, 'profile_picture')" class="hidden" #profilePicInput />
                </div>
                <div class="flex flex-col items-start gap-3 mb-8">
                  <!-- Info Text -->
                  <div>
                    <div class="text-xs text-gray-500 mb-1">
                      Upload your Profile Photo here.
                      <span class="font-semibold text-black">Important guidelines:</span><br>
                      1200×800 pixels or 1:2/1:8 Ratio.<br>
                      <span class="font-semibold text-black">Supported format:</span>
                      <span class="font-semibold text-black">.jpg, .jpeg, or .png</span>
                    </div>
                  </div>
                  <!-- Upload Button -->
                  <button
                    type="button"
                    (click)="profilePicInput.click()"
                    class="flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-lg font-medium hover:bg-blue-200 transition"
                  >
                    Upload Image
                    <span class="material-icons text-[20px]">upload</span>
                  </button>
                  <input type="file" (change)="onFileChange($event, 'profile_picture')" class="hidden" #profilePicInput />
                  <!-- Optional: Image Preview -->
                  <div *ngIf="profilePicturePreview" class="mt-3">
                    <img
                      [src]="profilePicturePreview"
                      alt="Profile Preview"
                      class="w-40 h-40 object-cover rounded-xl border border-dashed border-[#E0E7EF]"
                    />
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <app-input-field
                  label="Owner First Name"
                  placeholder="Enter first name..."
                  [(value)]="agencyForm['owner_first_name']"
                ></app-input-field>
                <app-input-field
                  label="Owner Last Name"
                  placeholder="Enter last name..."
                  [(value)]="agencyForm['owner_last_name']"
                ></app-input-field>
                <app-input-field
                  label="Email"
                  type="email"
                  placeholder="Enter email..."
                  [(value)]="agencyForm['email']"
                ></app-input-field>
                <div>
                  <label class="block text-xs font-semibold mb-1 text-gray-700">Phone Number</label>
                  <div class="relative">
                    <div class="flex items-center border border-[#E0E7EF] rounded-lg bg-white">
                      <button type="button" class="flex items-center px-3 py-2 focus:outline-none" (click)="showDropdown = !showDropdown">
                        <span class="text-xl mr-2">{{ selectedCountry.flag }}</span>
                        <span class="font-medium">{{ selectedCountry.abbr }}</span>
                        <span class="ml-1 text-gray-500">({{ selectedCountry.code }})</span>
                        <svg class="ml-2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                      </button>
                      <input
                        type="text"
                        class="flex-1 px-4 py-2 text-sm focus:ring-2 focus:ring-[#1952B3] outline-none border-0 bg-transparent"
                        placeholder="0000-00-0000"
                        [(ngModel)]="phone"
                      />
                    </div>
                    <div
                      *ngIf="showDropdown"
                      class="absolute left-0 top-full z-[9999] bg-white border border-[#E0E7EF] rounded-lg mt-1 w-44"
                    >
                      <div
                        *ngFor="let country of countries"
                        (click)="selectedCountry = country; showDropdown = false"
                        class="flex items-center px-3 py-2 cursor-pointer hover:bg-gray-100"
                      >
                        <span class="text-xl mr-2">{{ country.flag }}</span>
                        <span class="font-medium">{{ country.abbr }}</span>
                        <span class="ml-1 text-gray-500">({{ country.code }})</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="md:col-span-2">
                  <app-input-field
                    label="Address"
                    placeholder="Enter address..."
                    [(value)]="agencyForm['address']"
                  ></app-input-field>
                </div>
                <app-input-field
                  label="City"
                  placeholder="Enter city..."
                  [(value)]="agencyForm['city']"
                ></app-input-field>
                <app-dropdown-field
                  label="Country"
                  [options]="countryDropdownOptions"
                  [(value)]="agencyForm['country']"
                  placeholder="Select country..."
                ></app-dropdown-field>
                <div class="md:col-span-2">
                  <app-textarea-field
                    label="Bio"
                    placeholder="Bio..."
                    [(value)]="agencyForm['bio']"
                    [maxlength]="120"
                    [rows]="2"
                  ></app-textarea-field>
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
              <app-input-field-with-icon
                placeholder="Personal website or portfolio url..."
                icon="public"
                iconType="material"
                [(value)]="agencyForm['website']"
              ></app-input-field-with-icon>
              <label class="block text-sm font-semibold mb-1 mt-6">Fab Icon</label>
              <app-input-field-with-icon
                placeholder="Upload Fab. Icon"
                icon="upload"
                iconType="material"
                [(value)]="agencyForm['fab']"
              ></app-input-field-with-icon>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <app-input-field-with-icon
                  label="Facebook"
                  placeholder="Username"
                  icon="facebook"
                  iconType="material"
                  [(value)]="agencyForm['facebook']"
                ></app-input-field-with-icon>
                <app-input-field-with-icon
                  label="Instagram"
                  placeholder="Username"
                  icon="assets/icons/insta.svg"
                  iconType="svg"
                  [(value)]="agencyForm['instagram']"
                ></app-input-field-with-icon>
                <app-input-field-with-icon
                  label="LinkedIn"
                  placeholder="Username"
                  icon="assets/icons/linkedin.svg"
                  iconType="svg"
                  [(value)]="agencyForm['linkedin']"
                ></app-input-field-with-icon>
                <app-input-field-with-icon
                  label="Twitter"
                  placeholder="Username"
                  icon="assets/icons/twitter.svg"
                  iconType="svg"
                  [(value)]="agencyForm['twitter']"
                ></app-input-field-with-icon>
                <app-input-field-with-icon
                  label="Whatsapp"
                  placeholder="Phone number"
                  icon="assets/icons/whatsapp.svg"
                  iconType="svg"
                  [(value)]="agencyForm['whatsapp']"
                ></app-input-field-with-icon>
                <app-input-field-with-icon
                  label="Youtube"
                  placeholder="Username"
                  icon="assets/icons/youtube.svg"
                  iconType="svg"
                  [(value)]="agencyForm['youtube']"
                ></app-input-field-with-icon>
              </div>
              <div class="flex justify-between mt-8">
                <button class="px-6 py-2 rounded-lg border border-[#E0E7EF] text-gray-700 font-semibold text-sm" (click)="prevTab()">Back</button>
                <button class="px-6 py-2 rounded-lg bg-[#1952B3] text-white font-semibold text-sm" (click)="nextTab()">Next</button>
              </div>
            </div>
            <div *ngIf="tab === 2">
              <div class="font-bold text-lg mb-6">Agency Information</div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <!-- Agency Logo Card (with right border for md+) -->
                <div class="bg-white rounded-xl border border-[#E0E7EF] p-6 h-full md:border-r md:border-b-0 md:rounded-r-none flex flex-col">
                  <div class="font-semibold text-base mb-4">Agency Logo</div>
                  <div class="flex items-start gap-6">
                    <!-- Image Box -->
                    <div class="flex flex-col items-center justify-center w-40 h-40 bg-gray-50 rounded-xl border border-dashed border-[#E0E7EF]">
                      <svg class="w-16 h-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <rect x="3" y="3" width="18" height="18" rx="2" stroke-width="2" stroke="currentColor" fill="none"/>
                        <circle cx="12" cy="12" r="3" stroke-width="2" stroke="currentColor" fill="none"/>
                      </svg>
                      <input type="file" (change)="onFileChange($event, 'agency_logo')" class="hidden" #agencyLogoInput />
                    </div>
                    <!-- Button and Info -->
                    <div class="flex flex-col justify-center">
                      <button
                        type="button"
                        (click)="agencyLogoInput.click()"
                        class="flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-lg font-medium hover:bg-blue-200 transition mb-4 w-fit"
                      >
                        Upload Logo
                        <span class="material-icons text-[20px]">upload</span>
                      </button>
                      <div class="text-xs text-gray-500">
                        Upload your Profile Photo here. <span class="font-semibold text-black">Important guidelines:</span>
                        1200×800 pixels or 1:2/1:8 Ratio.<br>
                        <span class="font-semibold text-black">Supported format:</span>
                        <span class="font-semibold text-black">.jpg, .jpeg, or .png</span>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Theme Colour Card -->
                <div class="bg-white rounded-xl border border-[#E0E7EF] p-6 flex flex-col items-center justify-center h-full md:rounded-l-none">
                  <img src="assets/icons/emptyStateImage.svg" class="w-40 h-24 object-contain mb-2" />
                  <div class="font-semibold text-base mb-1">Customize Theme Colour</div>
                  <div class="text-xs text-gray-400 text-center mb-2">
                    Customize your dashboard easily with your <span class="font-semibold text-black">favourite colours</span>, layout, and features to match your style and <span class="font-semibold text-black">work needs.</span>
                  </div>
                  <button
                    class="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-100 text-blue-700 font-semibold text-sm hover:bg-blue-200 transition"
                    (click)="showThemePicker = true"
                  >
                    Customize Colour
                    <span class="material-icons text-[20px]">edit</span>
                  </button>
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <app-input-field
                  label="Agency Name"
                  placeholder="Enter name..."
                  [(value)]="agencyForm['agency_name']"
                ></app-input-field>
                <app-input-field
                  label="Agency Commission"
                  placeholder="Enter Commission..."
                  [(value)]="agencyForm['commission']"
                ></app-input-field>
                <div class="md:col-span-2">
                  <app-input-field
                    label="Agency Email"
                    type="email"
                    placeholder="Enter Agency E-mail"
                    [(value)]="agencyForm['agency_email']"
                  ></app-input-field>
                </div>
                <div class="md:col-span-2">
                  <app-textarea-field
                    label="About Agency"
                    placeholder="About agency"
                    [(value)]="agencyForm['about']"
                    [maxlength]="200"
                    [rows]="2"
                  ></app-textarea-field>
                </div>
                <app-dropdown-field
                  label="Category"
                  [options]="categoryDropdownOptions"
                  [(value)]="agencyForm['category_id']"
                  placeholder="Select..."
                ></app-dropdown-field>
                <app-dropdown-field
                  label="Sub-category"
                  [options]="subCategoryDropdownOptions"
                  [(value)]="agencyForm['sub_category_id']"
                  placeholder="Sub-category..."
                ></app-dropdown-field>
                <div class="md:col-span-2">
                  <app-dropdown-field
                    label="Status"
                    [options]="statusOptions"
                    [(value)]="agencyForm['status']"
                    placeholder="Select Status..."
                  ></app-dropdown-field>
                </div>
              </div>

              <div class="flex justify-between mt-8">
                <button class="px-6 py-2 rounded-lg border border-[#E0E7EF] text-gray-700 font-semibold text-sm" (click)="prevTab()">Cancel</button>
                <button class="px-6 py-2 rounded-lg bg-[#1952B3] text-white font-semibold text-sm" (click)="saveAgency()">Save Agency</button>
              </div>
            </div>
          </ng-container>
          <app-customize-theme *ngIf="showThemePicker" (themeSet)="onThemeSet($event)"></app-customize-theme>
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
    profile_picture: null as File | null,
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
    agency_favicon: null as File | null,
    agency_logo: null as File | null,
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

  countries = [
    { code: '+91', abbr: 'IND', flag: '🇮🇳' },
    { code: '+1', abbr: 'USA', flag: '🇺🇸' },
    { code: '+44', abbr: 'UK', flag: '🇬🇧' }
  ];
  selectedCountry = this.countries[0];
  phone = '';
  showDropdown = false;
  phoneControl = new FormControl('');
  profilePicturePreview: string | ArrayBuffer | null = null;
  showThemePicker = false;

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
    if (field === 'profile_picture' && file) {
      const reader = new FileReader();
      reader.onload = e => this.profilePicturePreview = reader.result;
      reader.readAsDataURL(file);
    }
  }
  nextTab() {
    if (this.tab < 2) this.tab++;
  }
  prevTab() {
    if (this.tab > 0) this.tab--;
  }
  saveAgency() {
    // Update color fields from the current theme before submitting
    this.agencyForm['text_color'] = this.theme.text;
    this.agencyForm['layout_background'] = this.theme.layoutBackground;
    this.agencyForm['content_background'] = this.theme.contentBackground;
    this.agencyForm['card_background'] = this.theme.cardBackground;
    this.agencyForm['primary_color'] = this.theme.primary;
    this.agencyForm['secondary_color'] = this.theme.secondary;
    this.agencyForm['layout_icon_color'] = this.theme.layoutIcons;
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

  get countryDropdownOptions() {
    return this.countryOptions.map(c => ({ value: c, label: c }));
  }
  get categoryDropdownOptions() {
    return this.categoryOptions.map(c => ({ value: c.id, label: c.name }));
  }
  get subCategoryDropdownOptions() {
    return this.subCategoryOptions.map(sc => ({ value: sc.id, label: sc.name }));
  }

  onThemeSet(newTheme: ThemeColors) {
    this.theme = newTheme;
    this.showThemePicker = false;
  }
} 