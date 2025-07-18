import { Component, inject, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { ThemePickerComponent } from '../../../components/common-components/theme-picker.component';
import { ThemeColors } from '../../../models/theme.model';
import { ThemeService } from '../../../services/theme.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

// Define the keys for ThemeColors
const THEME_COLOR_KEYS = [
  'text',
  'layoutBackground',
  'contentBackground',
  'cardBackground',
  'primary',
  'secondary',
  'layoutIcons',
  'random',
] as const;
type ThemeColorKey = typeof THEME_COLOR_KEYS[number];

@Component({
  selector: 'app-customize-theme',
  standalone: true,
  imports: [ThemePickerComponent, FormsModule, CommonModule, TranslateModule],
  template: `
    <div class="p-8 min-h-screen bg-gray-50 flex flex-col items-center">
      <div class="w-full">
        <h1 class="text-2xl font-bold mb-8">Customize Theme Colour</h1>
        <!-- Random Color Button -->
        <div class="flex justify-end mb-4">
          <button class="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold flex items-center gap-2" (click)="openRandomColorModal()">
            <span class="material-icons">palette</span>
            {{ 'RANDOM_COLOR' | translate }}
          </button>
        </div>
        <!-- Random Color Modal -->
        <div *ngIf="showPaletteModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
          <div class="bg-white rounded-xl shadow-lg p-6 w-[700px] relative">
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center gap-2">
                <span class="material-icons text-blue-600">palette</span>
                <span class="font-semibold text-lg">{{ 'RANDOM_COLOR' | translate }}</span>
              </div>
              <button class="text-gray-400 hover:text-gray-700 text-2xl font-bold" (click)="closeModal()">&times;</button>
            </div>
            <div class="mb-2 font-medium">{{ 'COLOUR_PALETTES' | translate }}</div>
            <div class="flex flex-wrap gap-4">
              <div *ngFor="let palette of colorPalettes" class="flex gap-1 bg-gray-100 rounded-lg p-1">
                <span *ngFor="let color of palette.colors" [style.background]="color" class="block w-8 h-8 rounded"></span>
              </div>
            </div>
          </div>
        </div>
        <!-- Edge-to-edge full-width preview card -->
        <div class="my-8 bg-white rounded-2xl shadow-lg p-8 w-full">
          <div class="flex gap-4 items-start">
            <!-- Sidebar -->
            <div class="w-56 min-h-[600px] bg-white flex flex-col py-8 px-4 border-r">
              <div class="font-bold text-xl mb-8">Yours Logo</div>
              <nav class="flex flex-col gap-2">
                <a class="py-2 px-4 rounded-lg font-medium text-gray-700 bg-blue-50" href="#">Dashboard</a>
                <a class="py-2 px-4 rounded-lg font-medium text-gray-700 hover:bg-gray-100" href="#">Providers</a>
                <a class="py-2 px-4 rounded-lg font-medium text-gray-700 hover:bg-gray-100" href="#">Appointments</a>
                <a class="py-2 px-4 rounded-lg font-medium text-gray-700 hover:bg-gray-100" href="#">Disputes</a>
                <a class="py-2 px-4 rounded-lg font-medium text-gray-700 hover:bg-gray-100" href="#">Payment History</a>
                <a class="py-2 px-4 rounded-lg font-medium text-gray-700 hover:bg-gray-100" href="#">Settings</a>
                <a class="py-2 px-4 rounded-lg font-medium text-gray-700 hover:bg-gray-100" href="#">Logout</a>
              </nav>
            </div>
            <!-- Main Content -->
            <div class="flex-1 flex flex-col gap-6">
              <!-- Header area -->
              <div class="flex items-start gap-6 bg-[#F7F8FA] rounded-2xl p-8">
                <div class="w-28 h-28 rounded-full bg-[#F3F3FF] flex items-center justify-center text-5xl font-bold text-[#7B61FF]">S</div>
                <div class="flex-1">
                  <div class="text-3xl font-bold mb-2">Name of the Agency will be displayed here</div>
                  <div class="text-sm text-gray-500 mb-4">Slogan or tagline of this agency will be displayed here, under the agency name</div>
                  <div class="flex items-center gap-4">
                    <div class="bg-white rounded-lg px-4 py-2 flex items-center gap-2 shadow">
                      <span class="font-semibold text-sm text-gray-700">Providers (99)</span>
                      <img src="https://randomuser.me/api/portraits/women/1.jpg" class="w-7 h-7 rounded-full border-2 border-white -ml-2" />
                      <img src="https://randomuser.me/api/portraits/men/2.jpg" class="w-7 h-7 rounded-full border-2 border-white -ml-2" />
                      <img src="https://randomuser.me/api/portraits/women/3.jpg" class="w-7 h-7 rounded-full border-2 border-white -ml-2" />
                      <img src="https://randomuser.me/api/portraits/men/4.jpg" class="w-7 h-7 rounded-full border-2 border-white -ml-2" />
                    </div>
                  </div>
                </div>
              </div>
              <!-- Today Appointments, etc. -->
              <div class="mt-4">
                <!-- Appointments Card -->
                <div class="rounded-2xl p-6 flex flex-col gap-4 shadow-sm" style="background: #fff;">
                  <div class="font-semibold mb-2" [ngStyle]="{'color': theme.text}">Today Appointments</div>
                  <div class="flex flex-col gap-3">
                    <div class="flex items-center gap-4 rounded-xl p-3 shadow-sm" [ngStyle]="{'background': theme.contentBackground}">
                      <div class="w-24 h-16 rounded-lg flex items-center justify-center" [ngStyle]="{'background': theme.primary}">
                        <span class="text-white font-bold">Meditation</span>
                      </div>
                      <div class="flex-1">
                        <div class="font-semibold" [ngStyle]="{'color': theme.text}">Scheduled by John Doe</div>
                        <div class="text-xs" [ngStyle]="{'color': theme.text}">Deeves Mind Meditation</div>
                      </div>
                      <div class="text-xs" [ngStyle]="{'color': theme.text}">2 days | 4 AM</div>
                      <div class="text-xs" [ngStyle]="{'color': theme.text}">$200</div>
                      <button class="ml-4 px-3 py-1 rounded text-xs font-semibold" [ngStyle]="{'background': theme.layoutBackground, 'color': theme.primary}">View More</button>
                    </div>
                    <div class="flex items-center gap-4 rounded-xl p-3 shadow-sm" [ngStyle]="{'background': theme.contentBackground}">
                      <div class="w-24 h-16 rounded-lg flex items-center justify-center" [ngStyle]="{'background': theme.primary}">
                        <span class="text-white font-bold">Sound Therapy</span>
                      </div>
                      <div class="flex-1">
                        <div class="font-semibold" [ngStyle]="{'color': theme.text}">Scheduled by John Doe</div>
                        <div class="text-xs" [ngStyle]="{'color': theme.text}">Deeves Mind Meditation</div>
                      </div>
                      <div class="text-xs" [ngStyle]="{'color': theme.text}">2 days | 4 AM</div>
                      <div class="text-xs" [ngStyle]="{'color': theme.text}">$200</div>
                      <button class="ml-4 px-3 py-1 rounded text-xs font-semibold" [ngStyle]="{'background': theme.layoutBackground, 'color': theme.primary}">View More</button>
                    </div>
                    <div class="flex items-center gap-4 rounded-xl p-3 shadow-sm" [ngStyle]="{'background': theme.contentBackground}">
                      <div class="w-24 h-16 rounded-lg flex items-center justify-center" [ngStyle]="{'background': theme.primary}">
                        <span class="text-white font-bold">Meditation</span>
                      </div>
                      <div class="flex-1">
                        <div class="font-semibold" [ngStyle]="{'color': theme.text}">Scheduled by John Doe</div>
                        <div class="text-xs" [ngStyle]="{'color': theme.text}">Deeves Mind Meditation</div>
                      </div>
                      <div class="text-xs" [ngStyle]="{'color': theme.text}">2 days | 4 AM</div>
                      <div class="text-xs" [ngStyle]="{'color': theme.text}">$200</div>
                      <button class="ml-4 px-3 py-1 rounded text-xs font-semibold" [ngStyle]="{'background': theme.layoutBackground, 'color': theme.primary}">View More</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Right Sidebar -->
            <div class="w-[400px] flex flex-col gap-4">
              <!-- Stat Cards -->
              <div class="flex gap-3 mb-4">
                <div class="flex-1 rounded-xl border border-gray-200 bg-white p-4 flex flex-col items-center justify-center">
                  <div class="w-10 h-10 rounded-full flex items-center justify-center mb-2 bg-[#F5F8FF]">
                    <span class="material-icons text-[#1952B3] text-xl">groups</span>
                  </div>
                  <div class="text-xl font-bold text-gray-900">50</div>
                  <div class="text-xs text-gray-500">Staff Provider</div>
                </div>
                <div class="flex-1 rounded-xl border border-gray-200 bg-white p-4 flex flex-col items-center justify-center">
                  <div class="w-10 h-10 rounded-full flex items-center justify-center mb-2 bg-[#E6F9F0]">
                    <span class="material-icons text-[#22C55E] text-xl">person</span>
                  </div>
                  <div class="text-xl font-bold text-gray-900">25</div>
                  <div class="text-xs text-gray-500">Total Consumer</div>
                </div>
              </div>
              <!-- Today's Statistics Card -->
              
              <!-- Dashboard Cards (move here) -->
              <div class="flex flex-col gap-4">
                <!-- Total Invoice Card -->
                <div class="rounded-xl border border-gray-200 bg-white p-4 flex items-center gap-4">
                  <div class="w-12 h-12 rounded-lg flex items-center justify-center bg-[#F5F8FF]">
                    <span class="material-icons text-[#1952B3] text-2xl">receipt_long</span>
                  </div>
                  <div class="flex-1">
                    <div class="text-xs font-semibold text-gray-500 mb-1">Total Invoice (USD)</div>
                    <div class="flex items-center gap-2 mb-1">
                      <span class="text-lg font-bold text-[#22C55E]">$2,847</span>
                      <span class="text-xs text-[#22C55E] font-semibold">54%</span>
                    </div>
                    <div class="text-xs text-gray-400">This has been a great quarter</div>
                  </div>
                  <!-- Mock chart -->
                  <div class="flex items-end gap-1 h-12">
                    <div class="w-1.5 h-6 bg-[#1952B3] rounded"></div>
                    <div class="w-1.5 h-8 bg-[#22C55E] rounded"></div>
                    <div class="w-1.5 h-4 bg-[#1952B3] rounded"></div>
                    <div class="w-1.5 h-10 bg-[#22C55E] rounded"></div>
                    <div class="w-1.5 h-7 bg-[#1952B3] rounded"></div>
                    <div class="w-1.5 h-11 bg-[#22C55E] rounded"></div>
                  </div>
                  <button class="ml-2 w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 bg-white text-gray-400 hover:bg-gray-100">
                    <span class="material-icons text-base">more_vert</span>
                  </button>
                </div>
                <!-- Today's Sessions Card -->
                <div class="rounded-xl border border-gray-200 bg-white p-4 flex items-center gap-4">
                  <div class="w-12 h-12 rounded-lg flex items-center justify-center bg-[#F5F8FF]">
                    <span class="material-icons text-[#1952B3] text-2xl">event_available</span>
                  </div>
                  <div class="flex-1">
                    <div class="flex items-center gap-2 mb-1">
                      <span class="text-sm font-semibold text-gray-900">Today's Sessions</span>
                      <span class="text-xs text-[#22C55E] font-semibold">14%</span>
                      <span class="material-icons text-[#22C55E] text-xs">trending_up</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <div class="w-full h-2 rounded bg-gray-200">
                        <div class="h-2 rounded bg-[#1952B3]" style="width: 60%"></div>
                      </div>
                      <span class="text-xs text-gray-400 ml-2">35 sessions</span>
                    </div>
                  </div>
                  <button class="ml-2 w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 bg-white text-gray-400 hover:bg-gray-100">
                    <span class="material-icons text-base">more_vert</span>
                  </button>
                </div>
                <!-- Revenue Card -->
                <div class="rounded-xl border border-gray-200 bg-white p-4 flex items-center gap-4">
                  <div class="w-12 h-12 rounded-lg flex items-center justify-center bg-[#F5F8FF]">
                    <span class="material-icons text-[#1952B3] text-2xl">attach_money</span>
                  </div>
                  <div class="flex-1">
                    <div class="flex items-center gap-2 mb-1">
                      <span class="text-sm font-semibold text-gray-900">Revenue</span>
                      <span class="text-xs text-[#22C55E] font-semibold">18%</span>
                      <span class="material-icons text-[#22C55E] text-xs">trending_up</span>
                    </div>
                  </div>
                  <button class="ml-2 w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 bg-white text-gray-400 hover:bg-gray-100">
                    <span class="material-icons text-base">more_vert</span>
                  </button>
                </div>
              </div>
              <!-- Active Providers Card -->
              <div class="rounded-xl border border-gray-200 bg-white p-4">
                <div class="flex items-center justify-between mb-2">
                  <div class="font-semibold text-gray-700">Active Providers (20)</div>
                  <button class="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 bg-white text-gray-400 hover:bg-gray-100">
                    <span class="material-icons text-base">more_vert</span>
                  </button>
                </div>
                <div class="flex flex-col gap-2">
                  <!-- Highlighted row -->
                  <div class="flex items-center gap-2 p-2 rounded-lg bg-[#F5F8FF]">
                    <img src='https://randomuser.me/api/portraits/women/1.jpg' class="w-10 h-10 rounded-full object-cover border-2 border-white" />
                    <div class="flex-1">
                      <div class="text-sm font-semibold text-gray-900">Jacquelyn Gallit</div>
                      <div class="text-xs text-gray-500">Nurse</div>
                    </div>
                    <button class="px-3 py-1 rounded text-xs font-semibold bg-[#22C55E] text-white">Active</button>
                    <span class="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 bg-white">
                      <span class="material-icons text-gray-400 text-base cursor-pointer">visibility</span>
                    </span>
                  </div>
                  <!-- Other rows -->
                  <div class="flex items-center gap-2 p-2 rounded-lg">
                    <img src='https://randomuser.me/api/portraits/men/2.jpg' class="w-10 h-10 rounded-full object-cover border-2 border-white" />
                    <div class="flex-1">
                      <div class="text-sm font-semibold text-gray-900">Allison Toeff</div>
                      <div class="text-xs text-gray-500">Staff Nurse</div>
                    </div>
                    <button class="px-3 py-1 rounded text-xs font-semibold bg-[#22C55E] text-white">Active</button>
                    <span class="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 bg-white">
                      <span class="material-icons text-gray-400 text-base cursor-pointer">visibility</span>
                    </span>
                  </div>
                  <div class="flex items-center gap-2 p-2 rounded-lg">
                    <img src='https://randomuser.me/api/portraits/women/3.jpg' class="w-10 h-10 rounded-full object-cover border-2 border-white" />
                    <div class="flex-1">
                      <div class="text-sm font-semibold text-gray-900">Marilyn Stephenson</div>
                      <div class="text-xs text-gray-500">Spiritual</div>
                    </div>
                    <button class="px-3 py-1 rounded text-xs font-semibold bg-[#22C55E] text-white">Active</button>
                    <span class="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 bg-white">
                      <span class="material-icons text-gray-400 text-base cursor-pointer">visibility</span>
                    </span>
                  </div>
                  <div class="flex items-center gap-2 p-2 rounded-lg">
                    <img src='https://randomuser.me/api/portraits/women/4.jpg' class="w-10 h-10 rounded-full object-cover border-2 border-white" />
                    <div class="flex-1">
                      <div class="text-sm font-semibold text-gray-900">Tatiana Bobrods</div>
                      <div class="text-xs text-gray-500">Spiritual</div>
                    </div>
                    <button class="px-3 py-1 rounded text-xs font-semibold bg-[#22C55E] text-white">Active</button>
                    <span class="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 bg-white">
                      <span class="material-icons text-gray-400 text-base cursor-pointer">visibility</span>
                    </span>
                  </div>
                  <div class="flex items-center gap-2 p-2 rounded-lg">
                    <img src='https://randomuser.me/api/portraits/women/5.jpg' class="w-10 h-10 rounded-full object-cover border-2 border-white" />
                    <div class="flex-1">
                      <div class="text-sm font-semibold text-gray-900">Alice Newbomas</div>
                      <div class="text-xs text-gray-500">Spiritual</div>
                    </div>
                    <button class="px-3 py-1 rounded text-xs font-semibold bg-[#22C55E] text-white">Active</button>
                    <span class="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 bg-white">
                      <span class="material-icons text-gray-400 text-base cursor-pointer">visibility</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Color Pickers Card -->
        <div class="bg-white rounded-xl shadow p-8 w-full mx-auto flex flex-col items-center mb-8">
          <div class="w-full grid grid-cols-4 gap-6 mb-4">
            <!-- First Row -->
            <ng-container *ngFor="let color of colorRows[0]; let i = index">
              <div class="col-span-1">
                <div class="relative w-full h-14 rounded-lg flex items-center justify-center cursor-pointer"
                  [ngStyle]="{'background': theme[color.key]}"
                  (click)="openColorPicker(color.key, i, 0, $event)">
                  <span [ngClass]="color.textClass" class="font-medium text-base">{{color.label}}</span>
                  <span class="material-icons absolute top-1 right-1 text-base cursor-pointer" [ngClass]="color.iconClass" (click)="openColorPicker(color.key, i, 0, $event)">palette</span>
                  <input type="color" class="absolute z-20 left-1/2 top-[-60px] w-0 h-0 opacity-0" [value]="theme[color.key]" (input)="onColorChange(color.key, $event)" #colorInputRow1 />
                </div>
              </div>
            </ng-container>
            <!-- Second Row -->
            <ng-container *ngFor="let color of colorRows[1]; let i = index">
              <div class="col-span-1 mt-2">
                <div class="relative w-full h-14 rounded-lg flex items-center justify-center cursor-pointer"
                  [ngStyle]="{'background': theme[color.key]}"
                  (click)="openColorPicker(color.key, i, 1, $event)">
                  <span [ngClass]="color.textClass" class="font-medium text-base">{{color.label}}</span>
                  <span class="material-icons absolute top-1 right-1 text-base cursor-pointer" [ngClass]="color.iconClass" (click)="openColorPicker(color.key, i, 1, $event)">palette</span>
                  <input type="color" class="absolute z-20 left-1/2 top-[-60px] w-0 h-0 opacity-0" [value]="theme[color.key]" (input)="onColorChange(color.key, $event)" #colorInputRow2 />
                </div>
              </div>
            </ng-container>
          </div>
        </div>
        <!-- Save Button -->
        <div class="flex justify-end w-full">
          <button class="px-6 py-2 rounded-lg bg-[#1952B3] text-white font-semibold text-sm">Save Agency</button>
        </div>
      </div>
    </div>
  `
})
export class CustomizeThemeComponent {
  theme: ThemeColors;
  themeService = inject(ThemeService);

  colorRows = [
    [
      { key: 'text' as ThemeColorKey, label: 'Text', textClass: 'text-white', iconClass: 'text-white' },
      { key: 'layoutBackground' as ThemeColorKey, label: 'Layout Background', textClass: 'text-[#111827]', iconClass: 'text-[#111827]' },
      { key: 'contentBackground' as ThemeColorKey, label: 'Content Background', textClass: 'text-[#111827]', iconClass: 'text-[#111827]' },
      { key: 'cardBackground' as ThemeColorKey, label: 'Card Background', textClass: 'text-white', iconClass: 'text-white' },
    ],
    [
      { key: 'primary' as ThemeColorKey, label: 'Primary', textClass: 'text-white', iconClass: 'text-white' },
      { key: 'secondary' as ThemeColorKey, label: 'Secondary', textClass: 'text-white', iconClass: 'text-white' },
      { key: 'layoutIcons' as ThemeColorKey, label: 'Layout Icons Color', textClass: 'text-white', iconClass: 'text-white' },
      { key: 'random' as ThemeColorKey, label: 'Random Color', textClass: 'text-white', iconClass: 'text-white' },
    ]
  ];

  @ViewChildren('colorInputRow1') colorInputsRow1!: QueryList<ElementRef<HTMLInputElement>>;
  @ViewChildren('colorInputRow2') colorInputsRow2!: QueryList<ElementRef<HTMLInputElement>>;

  // Modal and palette state
  showPaletteModal = false;
  colorPalettes: any[] = [];

  constructor() {
    this.theme = this.themeService.getTheme();
  }

  openColorPicker(key: ThemeColorKey, i: number, row: number, event: MouseEvent) {
    event.stopPropagation();
    let input: ElementRef<HTMLInputElement> | undefined;
    if (row === 0) {
      input = this.colorInputsRow1.get(i);
    } else {
      input = this.colorInputsRow2.get(i);
    }
    if (input) {
      input.nativeElement.click();
    }
  }

  onColorChange(key: ThemeColorKey, event: any) {
    this.theme = { ...this.theme, [key]: event.target.value };
    this.themeService.setTheme(this.theme);
  }

  onThemeChange(newTheme: ThemeColors) {
    this.theme = newTheme;
    this.themeService.setTheme(newTheme);
  }

  // --- Random Color Modal Logic ---
  openRandomColorModal() {
    this.themeService.getThemePresets({ per_page: 10, page: 1, search: 'random' })
      .subscribe((res: any) => {
        // Expecting res.data to be an array of palettes, each with a 'colors' array
        this.colorPalettes = res.data || [];
        this.showPaletteModal = true;
      });
  }

  closeModal() {
    this.showPaletteModal = false;
  }
} 