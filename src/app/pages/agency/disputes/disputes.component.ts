import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-disputes',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-[#F8F8FB] min-h-screen py-0 px-0 flex flex-col items-stretch">
      <div class="w-full h-full bg-white rounded-2xl shadow p-4 md:p-8 flex flex-col gap-4 flex-1">
        <!-- Tabs -->
        <div class="flex items-center gap-8 mb-6">
          <button class="font-semibold text-base pb-2 border-b-2" [ngClass]="{'border-[#8280FF] text-[#8280FF]': selectedTab === 0, 'border-transparent text-gray-500': selectedTab !== 0}" (click)="selectedTab = 0">Disputes</button>
          <button class="font-semibold text-base pb-2 border-b-2" [ngClass]="{'border-[#E06A15] text-[#E06A15]': selectedTab === 1, 'border-transparent text-gray-500': selectedTab !== 1}" (click)="selectedTab = 1">In progress</button>
        </div>
        <!-- Controls -->
        <div class="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-4">
          <div class="flex-1 flex items-center bg-white rounded-lg shadow px-4 py-2 border border-gray-200">
            <span class="material-icons text-gray-400 mr-2">search</span>
            <input type="text" placeholder="Search Dispute Id or Name..." class="flex-1 outline-none bg-transparent text-sm" />
          </div>
          <div class="flex gap-2 w-full md:w-auto">
            <input type="date" class="border border-[#E0E7EF] rounded px-3 py-2 text-sm w-full md:w-auto" />
            <button class="border border-[#E0E7EF] rounded px-4 py-2 text-sm flex items-center gap-2 w-full md:w-auto"><span class="material-icons text-base">filter_list</span> Filters</button>
          </div>
        </div>
        <!-- Overview Title -->
        <div class="font-semibold text-base mb-2 mt-4">Today All Disputes Overview <span class="ml-2 bg-[#E6E6FF] text-[#8280FF] px-2 py-0.5 rounded text-xs font-semibold">{{disputes.length}}</span></div>
        <div class="flex flex-col md:flex-row gap-6 mt-2 flex-1 min-h-0">
          <!-- Left: Dispute List -->
          <div class="w-full md:w-80 flex-shrink-0 border-r border-[#E9EAF0] pr-0 md:pr-6 h-full overflow-y-auto">
            <div *ngFor="let d of disputes" class="bg-[#F8F8FB] rounded-xl p-4 mb-4 border border-[#E9EAF0]">
              <div class="flex items-center gap-2 mb-1">
                <span class="font-bold" [ngStyle]="{'color': selectedTab === 1 ? '#E06A15' : '#22C55E'}">Dispute #{{d.id}}</span>
                <span class="text-xs text-gray-400">({{d.category}})</span>
              </div>
              <div class="text-xs text-gray-500 mb-2">{{d.summary}}</div>
              <div class="flex items-center gap-2">
                <button class="px-4 py-1 rounded text-white text-xs font-semibold" [ngStyle]="{'background': selectedTab === 1 ? '#E06A15' : '#22C55E'}">Review</button>
                <span class="text-xs" [ngStyle]="{'color': selectedTab === 1 ? '#E06A15' : '#8280FF'}" class="ml-auto cursor-pointer hover:underline">Raises For Provider 01</span>
              </div>
            </div>
            <div class="text-xs text-gray-400 font-semibold mt-6 mb-2">YESTERDAY DISPUTES</div>
            <div *ngFor="let d of yesterdayDisputes" class="bg-[#F8F8FB] rounded-xl p-4 mb-4 border border-[#E9EAF0]">
              <div class="flex items-center gap-2 mb-1">
                <span class="font-bold text-[#22C55E]">Dispute #{{d.id}}</span>
                <span class="text-xs text-gray-400">({{d.category}})</span>
              </div>
              <div class="text-xs text-gray-500 mb-2">{{d.summary}}</div>
              <div class="flex items-center gap-2">
                <button class="px-4 py-1 rounded bg-[#22C55E] text-white text-xs font-semibold">Review</button>
                <span class="text-xs text-[#8280FF] ml-auto cursor-pointer hover:underline">Raises For Provider 01</span>
              </div>
            </div>
          </div>
          <!-- Right: Dispute Detail -->
          <div class="flex-1 min-w-0">
            <div class="bg-[#F8F8FB] rounded-xl p-6 mb-6 border border-[#E9EAF0]">
              <div class="flex items-center justify-between mb-2">
                <div class="font-bold text-lg" [ngStyle]="{'color': selectedTab === 1 ? '#E06A15' : '#22C55E'}">Dispute #DPT-123456 (Meditation)</div>
                <div class="text-xs font-semibold" [ngStyle]="{'color': selectedTab === 1 ? '#E06A15' : '#22C55E'}">Dispute raised date: March 10, 2025</div>
              </div>
              <!-- Consumer -->
              <div class="mb-4">
                <div class="font-semibold text-base mb-1">Consumer</div>
                <div class="flex items-center gap-2 mb-1">
                  <img src="https://randomuser.me/api/portraits/women/1.jpg" class="w-8 h-8 rounded-full object-cover" />
                  <div>
                    <div class="font-semibold text-sm">Jane Doe</div>
                    <div class="text-xs text-gray-400">jane&#64;example.com</div>
                  </div>
                  <button class="ml-auto px-3 py-1 rounded border border-[#22C55E] text-[#22C55E] text-xs font-semibold">View Profile</button>
                </div>
                <div class="text-xs text-gray-500 mb-2">Consumer's Complaint</div>
                <div class="bg-white border border-[#E9EAF0] rounded p-3 text-xs text-gray-700 mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</div>
                <div class="text-xs text-gray-500 mb-1">Evidence & Attachments</div>
                <div class="flex flex-col gap-1 mb-2">
                  <a href="#" class="text-xs text-[#22C55E] underline">wireframe-v1.png</a>
                  <a href="#" class="text-xs text-[#22C55E] underline">wireframe-v1.png</a>
                  <a href="#" class="text-xs text-[#22C55E] underline">wireframe-v1.png</a>
                </div>
              </div>
              <!-- Provider -->
              <div class="mb-4">
                <div class="font-semibold text-base mb-1">Provider</div>
                <div class="flex items-center gap-2 mb-1">
                  <img src="https://randomuser.me/api/portraits/men/2.jpg" class="w-8 h-8 rounded-full object-cover" />
                  <div>
                    <div class="font-semibold text-sm">John Smith</div>
                    <div class="text-xs text-gray-400">jane&#64;example.com</div>
                  </div>
                  <button class="ml-auto px-3 py-1 rounded border border-[#22C55E] text-[#22C55E] text-xs font-semibold">View Profile</button>
                </div>
                <div class="text-xs text-gray-500 mb-2">Provider Response</div>
                <div class="bg-white border border-[#E9EAF0] rounded p-3 text-xs text-gray-700 mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</div>
                <div class="text-xs text-gray-500 mb-1">Evidence & Attachments</div>
                <div class="flex flex-col gap-1 mb-2">
                  <a href="#" class="text-xs text-[#22C55E] underline">wireframe-v1.png</a>
                  <a href="#" class="text-xs text-[#22C55E] underline">wireframe-v1.png</a>
                  <a href="#" class="text-xs text-[#22C55E] underline">wireframe-v1.png</a>
                </div>
              </div>
              <!-- Admin Decision Panel -->
              <div class="bg-white border border-[#E9EAF0] rounded p-4 mt-4">
                <div class="flex items-center gap-4 mb-4">
                  <div class="font-semibold text-base">Admin Decision Panel</div>
                  <!-- Status Dropdown -->
                  <div class="relative ml-auto">
                    <button (click)="showStatusDropdown = !showStatusDropdown" class="px-4 py-1 rounded font-semibold text-sm flex items-center gap-1 border" [ngStyle]="{'background': selectedTab === 1 ? '#ffe5d1' : '#bbf7d0', 'color': selectedTab === 1 ? '#E06A15' : '#22C55E', 'border-color': selectedTab === 1 ? '#E06A15' : '#22C55E'}">
                      {{ status }} <span class="material-icons text-base">expand_more</span>
                    </button>
                    <div *ngIf="showStatusDropdown" class="absolute right-0 mt-2 w-40 bg-white rounded shadow border z-20">
                      <button (click)="setStatus('Review')" class="w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-[#F8F8FB]">
                        <span class="material-icons text-gray-400 text-base">radio_button_unchecked</span> In Progress
                      </button>
                      <button (click)="setStatus('Completed')" class="w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-[#F8F8FB]">
                        <span class="material-icons" [ngStyle]="{'color': selectedTab === 1 ? '#E06A15' : '#22C55E'}">radio_button_checked</span> Completed
                      </button>
                    </div>
                  </div>
                </div>
                <div class="flex items-center gap-4 mb-4">
                  <div class="text-xs font-semibold">Resolve in Favour</div>
                  <button class="px-4 py-1 rounded border border-[#22C55E] text-[#22C55E] text-xs font-semibold" [ngClass]="{'bg-[#22C55E] text-white': resolveFor === 'consumer'}" (click)="resolveFor = 'consumer'">Consumer</button>
                  <button class="px-4 py-1 rounded border border-[#22C55E] text-[#22C55E] text-xs font-semibold" [ngClass]="{'bg-[#22C55E] text-white': resolveFor === 'provider'}" (click)="resolveFor = 'provider'">Provider</button>
                </div>
                <div class="mb-4">
                  <div class="text-xs font-semibold mb-1">Admin Resolve Comment</div>
                  <textarea rows="2" class="w-full border border-[#E9EAF0] rounded p-2 text-xs" placeholder="Write Resolve Comment..."></textarea>
                </div>
                <div class="flex flex-col sm:flex-row gap-2 justify-start mt-6 w-full">
                  <button class="px-5 py-2 rounded-lg font-semibold text-sm transition w-full sm:w-auto" [ngStyle]="{'background': selectedTab === 1 ? '#E06A15' : '#22C55E', 'color': 'white'}" (click)="showSubmitModal = true">Submit</button>
                  <button class="px-5 py-2 rounded-lg font-semibold text-sm transition w-full sm:w-auto" [ngStyle]="{'background': selectedTab === 1 ? '#F87171' : '#F87171', 'color': 'white'}">Dismiss Dispute</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Confirmation Modal -->
      <div *ngIf="showSubmitModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
        <div class="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md relative">
          <button (click)="showSubmitModal = false" class="absolute top-3 right-3 text-gray-400 hover:text-gray-700">
            <span class="material-icons">close</span>
          </button>
          <div class="flex items-center gap-3 mb-4">
            <span class="material-icons text-4xl text-[#8280FF] bg-[#edeaff] rounded-full p-2">groups</span>
            <div class="font-bold text-lg">Are you sure you want to submit this dispute?</div>
          </div>
          <div class="text-sm text-gray-500 mb-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ...</div>
          <div class="flex gap-4 justify-end">
            <button (click)="showSubmitModal = false" class="px-5 py-2 rounded-lg border border-[#8280FF] text-[#8280FF] font-semibold text-sm transition hover:bg-[#edeaff]">Reject</button>
            <button (click)="acceptSubmit()" class="px-5 py-2 rounded-lg bg-[#8280FF] text-white font-semibold text-sm transition hover:bg-[#6C63FF]">Accept</button>
          </div>
        </div>
      </div>
    </div>
  `
})
export class DisputesComponent {
  selectedTab = 0;
  resolveFor: 'consumer' | 'provider' = 'consumer';
  status: string = 'Review';
  showStatusDropdown = false;
  showSubmitModal = false;
  disputes = [
    { id: 'DPT-123456', category: 'Meditation', summary: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s...' },
    { id: 'DPT-123457', category: 'Meditation', summary: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s...' },
    { id: 'DPT-123458', category: 'Meditation', summary: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s...' },
  ];
  yesterdayDisputes = [
    { id: 'DPT-123459', category: 'Meditation', summary: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s...' },
    { id: 'DPT-123460', category: 'Meditation', summary: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s...' },
  ];

  setStatus(newStatus: string) {
    this.status = newStatus;
    this.showStatusDropdown = false;
  }

  acceptSubmit() {
    // Handle the actual submit logic here
    this.showSubmitModal = false;
    // Optionally show a toast or success message
  }
} 