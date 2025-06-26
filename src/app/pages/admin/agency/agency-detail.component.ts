import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TabsComponent } from './tabs.component';

@Component({
  selector: 'app-agency-detail',
  standalone: true,
  imports: [TabsComponent],
  template: `
    <div class="relative min-h-screen bg-gray-50 pb-12">
      <!-- Blue background card -->
      <div style="width:100%;height:256px;top:10px;left:50%;transform:translateX(-50%);background:#D9E8FF;z-index:0;" class="absolute rounded-2xl"></div>
      <!-- Header -->
      <div class="relative  z-10 top-[35px]  mx-[30px]">
        <div class="bg-white rounded-xl shadow p-8 flex flex-col gap-6">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-6">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" class="w-24 h-24 rounded-full object-cover border-4 border-white shadow" alt="Avatar" />
              <div>
                <h1 class="text-2xl font-bold mb-1">Balaji Nant</h1>
                <div class="flex items-center gap-2 mb-1">
                  <span class="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs font-semibold">Agency/Partner</span>
                  <span class="text-gray-500 text-sm">ID: 123456</span>
                </div>
                <div class="flex items-center gap-2 text-gray-500 text-sm">
                  <span>balaji&#64;email.com</span>
                  <span>&bull;</span>
                  <span>+91 12345 67890</span>
                </div>
              </div>
            </div>
            <div class="flex flex-col items-end gap-2">
              <a href="https://www.agency01.com" class="text-[#1952B3] text-sm font-medium hover:underline">https://www.agency01.com</a>
              <div class="flex gap-2 mt-1">
                <button class="w-8 h-8 flex items-center justify-center bg-[#F5F8FF] rounded-full"><span class="material-icons text-[#1952B3]">facebook</span></button>
                <button class="w-8 h-8 flex items-center justify-center bg-[#F5F8FF] rounded-full"><span class="material-icons text-[#1952B3]">twitter</span></button>
                <button class="w-8 h-8 flex items-center justify-center bg-[#F5F8FF] rounded-full"><span class="material-icons text-[#1952B3]">linkedin</span></button>
                <button class="w-8 h-8 flex items-center justify-center bg-[#F5F8FF] rounded-full"><span class="material-icons text-[#1952B3]">language</span></button>
              </div>
              <div class="flex items-center gap-1 mt-2">
                <span class="material-icons text-[#FFD600] text-base">star</span>
                <span class="font-semibold text-sm text-gray-700">4.8</span>
                <span class="text-gray-400 text-xs">(120 reviews)</span>
              </div>
            </div>
          </div>
          <!-- Tabs and content -->
          <div class="flex gap-6 mt-2">
            <!-- Left info card -->
           
            <!-- Right tab content -->
            <div class="flex-1 min-w-0">
              <app-tabs></app-tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class AgencyDetailComponent {
  agencyId: string | null = null;
  constructor(private route: ActivatedRoute) {
    this.agencyId = this.route.snapshot.paramMap.get('id');
  }
} 