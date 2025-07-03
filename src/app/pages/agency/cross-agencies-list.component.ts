import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cross-agencies-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-[#F8F8FB] min-h-screen py-0 px-0 flex flex-col items-stretch">
      <div class="w-full h-full bg-white rounded-2xl shadow p-4 md:p-8 flex flex-col gap-4 flex-1">
        <div class="text-2xl font-bold mb-1">Cross-Agencies List</div>
        <div class="text-xs text-gray-400 font-semibold mb-4">Cross-Agencies List</div>
        <div class="flex items-center gap-4 mb-4">
          <div class="flex items-center gap-2 bg-white rounded-lg shadow px-4 py-2 border border-gray-200 flex-1">
            <span class="material-icons text-gray-400 mr-2">search</span>
            <input type="text" placeholder="Search Provider Name...." class="flex-1 outline-none bg-transparent text-sm" />
          </div>
          <button class="border border-[#E0E7EF] rounded px-4 py-2 text-sm flex items-center gap-2"><span class="material-icons text-base">filter_list</span> Filters</button>
        </div>
        <div class="bg-[#F8F8FB] rounded-xl p-4 border border-[#E9EAF0]">
          <div class="flex items-center gap-4 mb-4">
            <div class="font-semibold text-base">Agencies <span class="ml-2 bg-[#E6E6FF] text-[#8280FF] px-2 py-0.5 rounded text-xs font-semibold">12</span></div>
          </div>
          <div class="overflow-x-auto">
            <table class="min-w-full text-sm">
              <thead>
                <tr class="text-left text-gray-500 border-b">
                  <th class="py-2 px-2"><input type="checkbox" /></th>
                  <th class="py-2 px-2">Agency Name</th>
                  <th class="py-2 px-2">Status</th>
                  <th class="py-2 px-2">Email address</th>
                  <th class="py-2 px-2">Start Date</th>
                  <th class="py-2 px-2">End Date</th>
                  <th class="py-2 px-2">Profit</th>
                  <th class="py-2 px-2">Providers</th>
                  <th class="py-2 px-2">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let agency of agencies" class="border-b hover:bg-[#F5F8FF] transition">
                  <td class="py-2 px-2"><input type="checkbox" /></td>
                  <td class="py-2 px-2 flex items-center gap-2">
                    <img [src]="agency.avatar" class="w-8 h-8 rounded-full object-cover" />
                    <div>
                      <div class="font-semibold">{{agency.name}}</div>
                      <div class="text-xs text-gray-400">{{agency.type}}</div>
                    </div>
                  </td>
                  <td class="py-2 px-2">
                    <span class="px-4 py-1 rounded-lg text-sm font-bold border border-[#22C55E] text-[#22C55E] bg-white" style="background:#F6FFFA;">Active</span>
                  </td>
                  <td class="py-2 px-2">{{agency.email}}</td>
                  <td class="py-2 px-2">{{agency.startDate}}</td>
                  <td class="py-2 px-2">{{agency.endDate}}</td>
                  <td class="py-2 px-2 text-[#22C55E] font-semibold">{{agency.profit}}</td>
                  <td class="py-2 px-2">
                    <ng-container *ngFor="let tag of agency.providers.slice(0,3)">
                      <span *ngIf="tag === 'Meditation'" class="px-3 py-0.5 rounded-full text-xs font-medium mr-1 border border-[#E6E6FF] text-[#8B5CF6] bg-[#FAF8FF]">Meditation</span>
                      <span *ngIf="tag === 'Yoga'" class="px-3 py-0.5 rounded-full text-xs font-medium mr-1 border border-[#C7E4FF] text-[#3B82F6] bg-[#F5FAFF]">Yoga</span>
                      <span *ngIf="tag === 'Relaxation'" class="px-3 py-0.5 rounded-full text-xs font-medium mr-1 border border-[#C7E4FF] text-[#3B82F6] bg-[#F5FAFF]">Relaxation</span>
                      <span *ngIf="tag !== 'Meditation' && tag !== 'Yoga' && tag !== 'Relaxation'" class="px-3 py-0.5 rounded-full text-xs font-medium mr-1 border border-[#E5E7EB] text-[#6B7280] bg-[#F9FAFB]">{{tag}}</span>
                    </ng-container>
                    <span *ngIf="agency.providers.length > 3" class="px-3 py-0.5 rounded-full text-xs font-medium border border-[#E5E7EB] text-[#6B7280] bg-[#F9FAFB]">+{{agency.providers.length - 3}}</span>
                  </td>
                  <td class="py-2 px-2 flex gap-2">
                    <button class="text-[#22C55E] hover:bg-[#E6F9F0] rounded-full p-2"><span class="material-icons">visibility</span></button>
                    <button class="text-[#F87171] hover:bg-[#FEE2E2] rounded-full p-2"><span class="material-icons">delete</span></button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  `
})
export class CrossAgenciesListComponent {
  agencies = [
    { name: 'Agency01', type: 'Spiritual', email: 'agency01@.com', startDate: '2024-09-23', endDate: '2024-03-14', profit: '15%', avatar: 'https://randomuser.me/api/portraits/men/1.jpg', providers: ['Meditation', 'Yoga', 'Relaxation', '4'] },
    { name: 'Agency02', type: 'Fitness', email: 'agency01@.com', startDate: '2026-02-15', endDate: '2025-01-12', profit: '12%', avatar: 'https://randomuser.me/api/portraits/women/2.jpg', providers: ['Meditation', 'Yoga', 'Relaxation', '4'] },
    { name: 'Agency03', type: 'Spiritual', email: 'agency01@.com', startDate: '2024-08-15', endDate: '2026-03-22', profit: '12%', avatar: 'https://randomuser.me/api/portraits/men/3.jpg', providers: ['Meditation', 'Yoga', 'Relaxation', '4'] },
    { name: 'Agency04', type: 'Fitness', email: 'agency01@.com', startDate: '2024-06-19', endDate: '2024-08-17', profit: '12%', avatar: 'https://randomuser.me/api/portraits/women/4.jpg', providers: ['Meditation', 'Yoga', 'Relaxation', '4'] },
    { name: 'Agency05', type: 'Fitness', email: 'agency01@.com', startDate: '2024-03-10', endDate: '2024-08-06', profit: '12%', avatar: 'https://randomuser.me/api/portraits/men/5.jpg', providers: ['Meditation', 'Yoga', 'Relaxation', '4'] },
    { name: 'Agency06', type: 'Fitness', email: 'agency01@.com', startDate: '2025-06-05', endDate: '2023-07-18', profit: '12%', avatar: 'https://randomuser.me/api/portraits/women/6.jpg', providers: ['Meditation', 'Yoga', 'Relaxation', '4'] },
    { name: 'Agency07', type: 'Spiritual', email: 'agency01@.com', startDate: '2026-07-27', endDate: '2023-07-04', profit: '12%', avatar: 'https://randomuser.me/api/portraits/men/7.jpg', providers: ['Meditation', 'Yoga', 'Relaxation', '4'] },
    { name: 'Agency08', type: 'Spiritual', email: 'agency01@.com', startDate: '2026-08-20', endDate: '2025-07-23', profit: '12%', avatar: 'https://randomuser.me/api/portraits/women/8.jpg', providers: ['Meditation', 'Yoga', 'Relaxation', '4'] },
    { name: 'Agency09', type: 'Fitness', email: 'agency01@.com', startDate: '2025-10-12', endDate: '2027-04-15', profit: '12%', avatar: 'https://randomuser.me/api/portraits/men/9.jpg', providers: ['Meditation', 'Yoga', 'Relaxation', '4'] },
    { name: 'Agency10', type: 'Spiritual', email: 'agency01@.com', startDate: '2027-02-19', endDate: '2023-10-20', profit: '12%', avatar: 'https://randomuser.me/api/portraits/women/10.jpg', providers: ['Meditation', 'Yoga', 'Relaxation', '4'] },
    { name: 'Agency11', type: 'Fitness', email: 'agency01@.com', startDate: '2024-06-25', endDate: '2025-01-30', profit: '12%', avatar: 'https://randomuser.me/api/portraits/men/11.jpg', providers: ['Meditation', 'Yoga', 'Relaxation', '4'] },
  ];
} 