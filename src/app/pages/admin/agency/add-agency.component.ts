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
import { FormControl, ReactiveFormsModule, FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
                  <ng-container *ngIf="profilePicturePreview; else placeholderSvg">
                    <img
                      [src]="profilePicturePreview"
                      alt="Profile Preview"
                      class="w-40 h-40 object-cover rounded-xl"
                    />
                  </ng-container>
                  <ng-template #placeholderSvg>
                    <svg class="w-16 h-16 text-gray-300 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <rect x="3" y="3" width="18" height="18" rx="2" stroke-width="2" stroke="currentColor" fill="none"/>
                      <circle cx="12" cy="12" r="3" stroke-width="2" stroke="currentColor" fill="none"/>
                    </svg>
                  </ng-template>
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
                </div>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <app-input-field
                    label="Owner First Name"
                    placeholder="Enter first name..."
                    [value]="form.get('owner_first_name')?.value"
                    (valueChange)="form.get('owner_first_name')?.setValue($event)"
                    [ngClass]="{'border-red-500': form.get('owner_first_name')?.invalid && form.get('owner_first_name')?.touched}"
                  ></app-input-field>
                  <div *ngIf="form.get('owner_first_name')?.invalid && form.get('owner_first_name')?.touched" class="text-xs text-red-600 mt-1">First name is required.</div>
                </div>
                <div>
                  <app-input-field
                    label="Owner Last Name"
                    placeholder="Enter last name..."
                    [value]="form.get('owner_last_name')?.value"
                    (valueChange)="form.get('owner_last_name')?.setValue($event)"
                    [ngClass]="{'border-red-500': form.get('owner_last_name')?.invalid && form.get('owner_last_name')?.touched}"
                  ></app-input-field>
                  <div *ngIf="form.get('owner_last_name')?.invalid && form.get('owner_last_name')?.touched" class="text-xs text-red-600 mt-1">Last name is required.</div>
                </div>
                <div>
                  <app-input-field
                    label="Email"
                    type="email"
                    placeholder="Enter email..."
                    [value]="form.get('email')?.value"
                    (valueChange)="form.get('email')?.setValue($event)"
                    [ngClass]="{'border-red-500': form.get('email')?.invalid && form.get('email')?.touched}"
                  ></app-input-field>
                  <div *ngIf="form.get('email')?.invalid && form.get('email')?.touched" class="text-xs text-red-600 mt-1">Please enter a valid email address.</div>
                </div>
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
                        [value]="form.get('phone')?.value"
                        (input)="onPhoneInput($event)"
                        [ngClass]="{'border-red-500': form.get('phone')?.invalid && form.get('phone')?.touched}"
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
                  <div *ngIf="form.get('phone')?.invalid && form.get('phone')?.touched" class="text-xs text-red-600 mt-1">Phone number is required.</div>
                </div>
                <div class="md:col-span-2">
                  <app-input-field
                    label="Address"
                    placeholder="Enter address..."
                    [value]="form.get('address')?.value"
                    (valueChange)="form.get('address')?.setValue($event)"
                    [ngClass]="{'border-red-500': form.get('address')?.invalid && form.get('address')?.touched}"
                  ></app-input-field>
                  <div *ngIf="form.get('address')?.invalid && form.get('address')?.touched" class="text-xs text-red-600 mt-1">Address is required.</div>
                </div>
                <div>
                  <app-input-field
                    label="City"
                    placeholder="Enter city..."
                    [value]="form.get('city')?.value"
                    (valueChange)="form.get('city')?.setValue($event)"
                    [ngClass]="{'border-red-500': form.get('city')?.invalid && form.get('city')?.touched}"
                  ></app-input-field>
                  <div *ngIf="form.get('city')?.invalid && form.get('city')?.touched" class="text-xs text-red-600 mt-1">City is required.</div>
                </div>
                <div>
                  <app-dropdown-field
                    label="Country"
                    [options]="countryDropdownOptions"
                    [value]="form.get('country')?.value"
                    (valueChange)="form.get('country')?.setValue($event)"
                    placeholder="Select country..."
                    [ngClass]="{'border-red-500': form.get('country')?.invalid && form.get('country')?.touched}"
                  ></app-dropdown-field>
                  <div *ngIf="form.get('country')?.invalid && form.get('country')?.touched" class="text-xs text-red-600 mt-1">Country is required.</div>
                </div>
                <div class="md:col-span-2">
                  <app-textarea-field
                    label="Bio"
                    placeholder="Bio..."
                    [value]="form.get('bio')?.value"
                    (valueChange)="form.get('bio')?.setValue($event)"
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
                [value]="form.get('website')?.value"
                (valueChange)="form.get('website')?.setValue($event)"
                [ngClass]="{'border-red-500': form.get('website')?.invalid && form.get('website')?.touched}"
              ></app-input-field-with-icon>
              <div *ngIf="form.get('website')?.invalid && form.get('website')?.touched" class="text-xs text-red-600 mt-1">Please enter a valid website URL.</div>
              <label class="block text-sm font-semibold mb-1 mt-6">Fab Icon</label>
              <app-input-field-with-icon
                placeholder="Upload Fab. Icon"
                icon="upload"
                iconType="material"
                [value]="form.get('fab')?.value"
                (valueChange)="form.get('fab')?.setValue($event)"
              ></app-input-field-with-icon>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <app-input-field-with-icon
                  label="Facebook"
                  placeholder="Username"
                  icon="facebook"
                  iconType="material"
                  [value]="form.get('facebook')?.value"
                  (valueChange)="form.get('facebook')?.setValue($event)"
                  [ngClass]="{'border-red-500': form.get('facebook')?.invalid && form.get('facebook')?.touched}"
                ></app-input-field-with-icon>
                <div *ngIf="form.get('facebook')?.invalid && form.get('facebook')?.touched" class="text-xs text-red-600 mt-1">Please enter a valid Facebook username.</div>
                <app-input-field-with-icon
                  label="Instagram"
                  placeholder="Username"
                  icon="assets/icons/insta.svg"
                  iconType="svg"
                  [value]="form.get('instagram')?.value"
                  (valueChange)="form.get('instagram')?.setValue($event)"
                  [ngClass]="{'border-red-500': form.get('instagram')?.invalid && form.get('instagram')?.touched}"
                ></app-input-field-with-icon>
                <div *ngIf="form.get('instagram')?.invalid && form.get('instagram')?.touched" class="text-xs text-red-600 mt-1">Please enter a valid Instagram username.</div>
                <app-input-field-with-icon
                  label="LinkedIn"
                  placeholder="Username"
                  icon="assets/icons/linkedin.svg"
                  iconType="svg"
                  [value]="form.get('linkedin')?.value"
                  (valueChange)="form.get('linkedin')?.setValue($event)"
                  [ngClass]="{'border-red-500': form.get('linkedin')?.invalid && form.get('linkedin')?.touched}"
                ></app-input-field-with-icon>
                <div *ngIf="form.get('linkedin')?.invalid && form.get('linkedin')?.touched" class="text-xs text-red-600 mt-1">Please enter a valid LinkedIn username.</div>
                <app-input-field-with-icon
                  label="Twitter"
                  placeholder="Username"
                  icon="assets/icons/twitter.svg"
                  iconType="svg"
                  [value]="form.get('twitter')?.value"
                  (valueChange)="form.get('twitter')?.setValue($event)"
                  [ngClass]="{'border-red-500': form.get('twitter')?.invalid && form.get('twitter')?.touched}"
                ></app-input-field-with-icon>
                <div *ngIf="form.get('twitter')?.invalid && form.get('twitter')?.touched" class="text-xs text-red-600 mt-1">Please enter a valid Twitter username.</div>
                <app-input-field-with-icon
                  label="Whatsapp"
                  placeholder="Phone number"
                  icon="assets/icons/whatsapp.svg"
                  iconType="svg"
                  [value]="form.get('whatsapp')?.value"
                  (valueChange)="form.get('whatsapp')?.setValue($event)"
                  [ngClass]="{'border-red-500': form.get('whatsapp')?.invalid && form.get('whatsapp')?.touched}"
                ></app-input-field-with-icon>
                <div *ngIf="form.get('whatsapp')?.invalid && form.get('whatsapp')?.touched" class="text-xs text-red-600 mt-1">Please enter a valid phone number.</div>
                <app-input-field-with-icon
                  label="Youtube"
                  placeholder="Username"
                  icon="assets/icons/youtube.svg"
                  iconType="svg"
                  [value]="form.get('youtube')?.value"
                  (valueChange)="form.get('youtube')?.setValue($event)"
                  [ngClass]="{'border-red-500': form.get('youtube')?.invalid && form.get('youtube')?.touched}"
                ></app-input-field-with-icon>
                <div *ngIf="form.get('youtube')?.invalid && form.get('youtube')?.touched" class="text-xs text-red-600 mt-1">Please enter a valid YouTube username.</div>
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
                <div>
                  <app-input-field
                    label="Agency Name"
                    placeholder="Enter name..."
                    [value]="form.get('agency_name')?.value"
                    (valueChange)="form.get('agency_name')?.setValue($event)"
                    [ngClass]="{'border-red-500': form.get('agency_name')?.invalid && form.get('agency_name')?.touched}"
                  ></app-input-field>
                  <div *ngIf="form.get('agency_name')?.invalid && form.get('agency_name')?.touched" class="text-xs text-red-600 mt-1">Agency name is required.</div>
                </div>
                <div>
                  <app-input-field
                    label="Agency Commission"
                    placeholder="Enter Commission..."
                    [value]="form.get('commission')?.value"
                    (valueChange)="form.get('commission')?.setValue($event)"
                    [ngClass]="{'border-red-500': form.get('commission')?.invalid && form.get('commission')?.touched}"
                  ></app-input-field>
                  <div *ngIf="form.get('commission')?.invalid && form.get('commission')?.touched" class="text-xs text-red-600 mt-1">Commission is required.</div>
                </div>
                <div class="md:col-span-2">
                  <app-input-field
                    label="Agency Email"
                    type="email"
                    placeholder="Enter Agency E-mail"
                    [value]="form.get('agency_email')?.value"
                    (valueChange)="form.get('agency_email')?.setValue($event)"
                    [ngClass]="{'border-red-500': form.get('agency_email')?.invalid && form.get('agency_email')?.touched}"
                  ></app-input-field>
                  <div *ngIf="form.get('agency_email')?.invalid && form.get('agency_email')?.touched" class="text-xs text-red-600 mt-1">Please enter a valid agency email address.</div>
                </div>
                <div class="md:col-span-2">
                  <app-textarea-field
                    label="About Agency"
                    placeholder="About agency"
                    [value]="form.get('about')?.value"
                    (valueChange)="form.get('about')?.setValue($event)"
                    [maxlength]="200"
                    [rows]="2"
                  ></app-textarea-field>
                </div>
                <div>
                  <app-dropdown-field
                    label="Category"
                    [options]="categoryDropdownOptions"
                    [value]="form.get('category_id')?.value"
                    (valueChange)="form.get('category_id')?.setValue($event)"
                    placeholder="Select..."
                    [ngClass]="{'border-red-500': form.get('category_id')?.invalid && form.get('category_id')?.touched}"
                  ></app-dropdown-field>
                  <div *ngIf="form.get('category_id')?.invalid && form.get('category_id')?.touched" class="text-xs text-red-600 mt-1">Category is required.</div>
                </div>
                <div>
                  <app-dropdown-field
                    label="Sub-category"
                    [options]="subCategoryDropdownOptions"
                    [value]="form.get('sub_category_id')?.value"
                    (valueChange)="form.get('sub_category_id')?.setValue($event)"
                    placeholder="Sub-category..."
                    [ngClass]="{'border-red-500': form.get('sub_category_id')?.invalid && form.get('sub_category_id')?.touched}"
                  ></app-dropdown-field>
                  <div *ngIf="form.get('sub_category_id')?.invalid && form.get('sub_category_id')?.touched" class="text-xs text-red-600 mt-1">Sub-category is required.</div>
                </div>
                <div class="md:col-span-2">
                  <app-dropdown-field
                    label="Status"
                    [options]="statusOptions"
                    [value]="form.get('status')?.value"
                    (valueChange)="form.get('status')?.setValue($event)"
                    placeholder="Select Status..."
                    [ngClass]="{'border-red-500': form.get('status')?.invalid && form.get('status')?.touched}"
                  ></app-dropdown-field>
                  <div *ngIf="form.get('status')?.invalid && form.get('status')?.touched" class="text-xs text-red-600 mt-1">Status is required.</div>
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

  countryDropdownOptions: { value: string; label: string }[] = [];
  categoryDropdownOptions: { value: string; label: string }[] = [];
  subCategoryDropdownOptions: { value: string; label: string }[] = [];

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
  form: FormGroup;

  constructor() {
    this.theme = this.themeService.getTheme();
    const fb = inject(FormBuilder);
    this.form = fb.group({
      owner_first_name: ['', Validators.required],
      owner_last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      bio: [''],
      website: [''],
      facebook: [''],
      instagram: [''],
      linkedin: [''],
      twitter: [''],
      youtube: [''],
      whatsapp: [''],
      agency_favicon: [null],
      agency_logo: [null],
      agency_name: ['', Validators.required],
      agency_email: ['', [Validators.required, Validators.email]],
      category_id: ['', Validators.required],
      sub_category_id: ['', Validators.required],
      about: [''],
      commission: ['', Validators.required],
      status: ['', Validators.required],
      profile_picture: [null]
    });
    // Initialize dropdown options as properties
    this.countryDropdownOptions = this.countryOptions.map(c => ({ value: c, label: c }));
    this.categoryDropdownOptions = this.categoryOptions.map(c => ({ value: c.id, label: c.name }));
    this.subCategoryDropdownOptions = this.subCategoryOptions.map(sc => ({ value: sc.id, label: sc.name }));
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
  onPhoneInput(event: Event) {
    const value = (event.target as HTMLInputElement)?.value || '';
    this.form.get('phone')?.setValue(value);
  }
  nextTab() {
    if (this.tab === 0) {
      // Only check required fields for tab 0
      const requiredFields = [
        'owner_first_name', 'owner_last_name', 'email', 'phone', 'address', 'city', 'country'
      ];
      let invalid = false;
      requiredFields.forEach(field => {
        const control = this.form.get(field);
        if (control && control.invalid) {
          control.markAsTouched();
          invalid = true;
        }
      });
      if (invalid) {
        this.toastr.error('Please fill all required fields.');
        return;
      }
    }
    if (this.tab === 1) {
      // No required fields for Social Profile tab (if you want, add here)
    }
    if (this.tab === 2) {
      // Check required fields for Agency Information tab
      const requiredFields = [
        'agency_name', 'commission', 'agency_email', 'about', 'category_id', 'sub_category_id', 'status'
      ];
      let invalid = false;
      requiredFields.forEach(field => {
        const control = this.form.get(field);
        if (control && control.invalid) {
          control.markAsTouched();
          invalid = true;
        }
      });
      if (invalid) {
        this.toastr.error('Please fill all required fields.');
        return;
      }
    }
    if (this.tab < 2) this.tab++;
  }
  prevTab() {
    if (this.tab > 0) this.tab--;
  }
  saveAgency() {
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      this.toastr.error('Please fill all required fields.');
      return;
    }
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
      next: (res: any) => {
        this.toastr.success(res.message || 'Agency created successfully!', 'Success');
        console.log('Agency created:', res);
      },
      error: (err) => {
        this.toastr.error(err.error?.message || 'Failed to create agency.', 'Error');
        console.error('Error creating agency:', err);
      }
    });
  }

  onThemeSet(newTheme: ThemeColors) {
    this.theme = newTheme;
    this.showThemePicker = false;
  }
} 