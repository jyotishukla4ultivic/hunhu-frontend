import { Component, Input } from '@angular/core';
import { NgClass, CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [NgClass, CommonModule],
  template: `
    <div>
      <div class="flex border-b border-gray-200 mb-6">
        <button
          class="px-6 py-3 -mb-px text-sm font-semibold focus:outline-none"
          [ngClass]="selected === 0 ? 'border-b-2 border-[#1952B3] text-[#1952B3] bg-white' : 'text-gray-500'"
          (click)="selected = 0"
        >
          Agency Owner Details
        </button>
        <button
          class="px-6 py-3 -mb-px text-sm font-semibold focus:outline-none"
          [ngClass]="selected === 1 ? 'border-b-2 border-[#1952B3] text-[#1952B3] bg-white' : 'text-gray-500'"
          (click)="selected = 1"
        >
          Agency Details
        </button>
      </div>
      <div *ngIf="selected === 0">
        <div class="flex gap-6">
          <!-- Left: Basic Info and Bio -->
          <div class="w-80 flex flex-col gap-4 flex-shrink-0">
            <div class="bg-white rounded-xl border border-[#E0E7EF] p-6">
              <div class="font-bold text-base mb-4">BASIC INFORMATION</div>
              <div class="flex flex-col gap-2 text-sm text-gray-700">
                <div class="flex justify-between"><span>Address</span><span>{{selectedProvider?.address || '122, Makarna Gandhi Road, Aryanagar,Indore High Rd'}}</span></div>
                <div class="flex justify-between"><span>City</span><span>{{selectedProvider?.city || 'Chennai'}}</span></div>
                <div class="flex justify-between"><span>Country</span><span>{{selectedProvider?.country || 'India'}}</span></div>
                <div class="flex justify-between"><span>Phone Number</span><span>{{selectedProvider?.mobile || '0000-00-0000'}}</span></div>
              </div>
            </div>
            <div class="bg-white rounded-xl border border-[#E0E7EF] p-6">
              <div class="font-bold text-base mb-2">BIO</div>
              <div class="text-sm text-gray-600">{{selectedProvider?.bio || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'}}</div>
            </div>
          </div>
          <!-- Right: Reviews List -->
          <div class="flex-1 min-w-0">
            <div class="bg-white rounded-xl border border-[#E0E7EF] p-6">
              <div class="flex items-center justify-between mb-4">
                <div class="font-bold text-lg">Review</div>
                <select class="border border-[#E0E7EF] rounded px-3 py-1 text-sm text-gray-700">
                  <option>5 Star Rating</option>
                  <option>4 Star Rating</option>
                  <option>3 Star Rating</option>
                </select>
              </div>
              <div class="flex flex-col gap-6">
                <div *ngFor="let review of reviews" class="flex gap-4">
                  <img [src]="review.avatar" class="w-10 h-10 rounded-full object-cover" />
                  <div class="flex-1">
                    <div class="flex items-center gap-2 mb-1">
                      <span class="font-semibold text-sm text-gray-900">{{review.name}}</span>
                      <span class="text-xs text-gray-400">{{review.time}}</span>
                    </div>
                    <div class="flex items-center gap-1 mb-1">
                      <ng-container *ngFor="let s of [].constructor(review.stars)">
                        <span class="material-icons text-[#FFD600] text-base">star</span>
                      </ng-container>
                    </div>
                    <div class="text-sm text-gray-700">{{review.text}}</div>
                  </div>
                </div>
              </div>
              <div class="flex justify-center mt-6">
                <button class="px-5 py-2 rounded-lg bg-[#1952B3] text-white font-semibold text-sm transition hover:bg-[#143e7d]">Load More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div *ngIf="selected === 1">
        <div class="flex flex-col gap-6">
          <!-- About Agency Card -->
          <div class="bg-white rounded-xl shadow border border-[#E0E7EF] p-8">
            <div class="font-bold text-lg mb-3">ABOUT AGENCY</div>
            <div class="text-sm text-gray-600 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</div>
          </div>
          <!-- Agency Provider List Table -->
          <div class="bg-white rounded-xl shadow border border-[#E0E7EF] p-8">
            <div class="font-bold text-lg mb-4">AGENCY PROVIDER LIST</div>
            <div class="overflow-x-auto">
              <table class="min-w-full text-sm text-left">
                <thead class="bg-[#F5F8FF]">
                  <tr class="text-gray-500 border-b border-[#E0E7EF]">
                    <th class="py-3 px-3 font-semibold"><input type="checkbox" /></th>
                    <th class="py-3 px-3 font-semibold">Name</th>
                    <th class="py-3 px-3 font-semibold">Join Date</th>
                    <th class="py-3 px-3 font-semibold">Mobile No</th>
                    <th class="py-3 px-3 font-semibold">Status</th>
                    <th class="py-3 px-3 font-semibold">Consumers</th>
                    <th class="py-3 px-3 font-semibold">Rating</th>
                    <th class="py-3 px-3 font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr *ngFor="let provider of providers" class="border-b border-[#E0E7EF] last:border-0 hover:bg-[#F5F8FF] transition">
                    <td class="py-3 px-3"><input type="checkbox" /></td>
                    <td class="py-3 px-3 flex items-center gap-2">
                      <img [src]="provider.avatar" class="w-8 h-8 rounded-full object-cover border border-[#E0E7EF]" />
                      <span class="font-medium text-gray-900 cursor-pointer hover:underline" (click)="goToProviderDetail(provider)">{{provider.name}}</span>
                    </td>
                    <td class="py-3 px-3">{{provider.joinDate}}</td>
                    <td class="py-3 px-3">{{provider.mobile}}</td>
                    <td class="py-3 px-3">
                      <span [ngClass]="provider.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'" class="px-3 py-1 rounded-full text-xs font-semibold border border-[#E0E7EF]">{{provider.status}}</span>
                    </td>
                    <td class="py-3 px-3">{{provider.consumers}}</td>
                    <td class="py-3 px-3">
                      <ng-container *ngFor="let s of [].constructor(provider.rating)">
                        <span class="material-icons text-[#FFD600] text-base align-middle">star</span>
                      </ng-container>
                    </td>
                    <td class="py-3 px-3">
                      <button class="text-[#1952B3] hover:underline"><span class="material-icons text-base align-middle">visibility</span></button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="flex justify-between items-center mt-6">
              <div class="text-sm text-gray-500">Showing 1 to 10 of 20 entries</div>
              <div class="flex gap-2">
                <button class="px-3 h-8 flex items-center justify-center border border-[#E0E7EF] rounded-[6px] bg-white text-[#1952B3] font-medium hover:bg-[#F5F8FF] transition text-sm">&lt; Back</button>
                <button class="w-8 h-8 flex items-center justify-center border border-[#2196F3] rounded-[6px] bg-[#2196F3] text-white font-medium transition text-sm">1</button>
                <button class="w-8 h-8 flex items-center justify-center border border-[#E0E7EF] rounded-[6px] bg-white text-[#1952B3] font-medium hover:bg-[#F5F8FF] transition text-sm">2</button>
                <button class="w-8 h-8 flex items-center justify-center border border-[#E0E7EF] rounded-[6px] bg-white text-[#1952B3] font-medium hover:bg-[#F5F8FF] transition text-sm">3</button>
                <button class="px-3 h-8 flex items-center justify-center border border-[#E0E7EF] rounded-[6px] bg-white text-[#1952B3] font-medium hover:bg-[#F5F8FF] transition text-sm">Next &gt;</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class TabsComponent {
  selected = 0;
  reviews = [
    { name: 'Guy Hawkins', time: '1 week ago', stars: 5, avatar: 'https://randomuser.me/api/portraits/men/1.jpg', text: 'Ase godat, arcu in elemi justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum eget, arcu in elemi justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum eget, arcu in elemi justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam d' },
    { name: 'Dianne Russel', time: '5 mins ago', stars: 4, avatar: 'https://randomuser.me/api/portraits/women/2.jpg', text: 'Ase godat, arcu in elemi justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum eget, arcu in elemi justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum eget, arcu in elemi justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam d' },
    { name: 'Bessie Cooper', time: '6 hours ago', stars: 5, avatar: 'https://randomuser.me/api/portraits/women/3.jpg', text: 'Ase godat, arcu in elemi justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum eget, arcu in elemi justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum eget, arcu in elemi justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam d' },
    { name: 'Eleanor Pena', time: '1 day ago', stars: 5, avatar: 'https://randomuser.me/api/portraits/women/4.jpg', text: 'Ase godat, arcu in elemi justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum eget, arcu in elemi justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum eget, arcu in elemi justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam d' },
    { name: 'Ralph Edwards', time: '2 days ago', stars: 4, avatar: 'https://randomuser.me/api/portraits/men/5.jpg', text: 'Ase godat, arcu in elemi justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum eget, arcu in elemi justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum eget, arcu in elemi justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam d' },
    { name: 'Arlene McCoy', time: '1 week ago', stars: 5, avatar: 'https://randomuser.me/api/portraits/women/6.jpg', text: 'Ase godat, arcu in elemi justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum eget, arcu in elemi justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum eget, arcu in elemi justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam d' },
  ];
  providers = [
    { id: 1, name: 'Balaji Nani', joinDate: '10 March, 2023', mobile: '00 000 00000', status: 'Active', consumers: 41, rating: 5, avatar: 'https://randomuser.me/api/portraits/men/7.jpg', address: '122, Makarna Gandhi Road, Aryanagar,Indore High Rd', city: 'Chennai', country: 'India', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque.' },
    { id: 2, name: 'Krithya Menon', joinDate: '10 March, 2023', mobile: '00 000 00000', status: 'Active', consumers: 35, rating: 4, avatar: 'https://randomuser.me/api/portraits/women/8.jpg', address: '221B Baker Street', city: 'Mumbai', country: 'India', bio: 'Krithya is a fitness expert with 10 years of experience.' },
    { id: 3, name: 'Nishant Goyal', joinDate: '10 March, 2023', mobile: '00 000 00000', status: 'Active', consumers: 29, rating: 5, avatar: 'https://randomuser.me/api/portraits/men/9.jpg', address: '45, Park Avenue', city: 'Delhi', country: 'India', bio: 'Nishant specializes in yoga and wellness.' },
    { id: 4, name: 'Neeru Kapoor', joinDate: '10 March, 2023', mobile: '00 000 00000', status: 'Active', consumers: 25, rating: 4, avatar: 'https://randomuser.me/api/portraits/women/10.jpg', address: '78, Lake View', city: 'Kolkata', country: 'India', bio: 'Neeru is a spiritual healer.' },
    { id: 5, name: 'Neepa Bagchi', joinDate: '10 March, 2023', mobile: '00 000 00000', status: 'Active', consumers: 31, rating: 5, avatar: 'https://randomuser.me/api/portraits/women/11.jpg', address: '12, MG Road', city: 'Pune', country: 'India', bio: 'Neepa is a nutritionist.' },
    { id: 6, name: 'Monica Patel', joinDate: '10 March, 2023', mobile: '00 000 00000', status: 'Active', consumers: 36, rating: 4, avatar: 'https://randomuser.me/api/portraits/women/12.jpg', address: '34, Hill Top', city: 'Ahmedabad', country: 'India', bio: 'Monica is a physiotherapist.' },
    { id: 7, name: 'Himanshu', joinDate: '10 March, 2023', mobile: '00 000 00000', status: 'Active', consumers: 39, rating: 5, avatar: 'https://randomuser.me/api/portraits/men/13.jpg', address: '56, River Side', city: 'Bangalore', country: 'India', bio: 'Himanshu is a meditation coach.' },
    { id: 8, name: 'Ramesh', joinDate: '10 March, 2023', mobile: '00 000 00000', status: 'Active', consumers: 32, rating: 4, avatar: 'https://randomuser.me/api/portraits/men/14.jpg', address: '90, Sun City', city: 'Hyderabad', country: 'India', bio: 'Ramesh is a life coach.' },
    { id: 9, name: 'Pankaj Pandit', joinDate: '10 March, 2023', mobile: '00 000 00000', status: 'Active', consumers: 35, rating: 5, avatar: 'https://randomuser.me/api/portraits/men/15.jpg', address: '11, Lotus Lane', city: 'Chandigarh', country: 'India', bio: 'Pankaj is a motivational speaker.' },
    { id: 10, name: 'Priya Kumari', joinDate: '10 March, 2023', mobile: '00 000 00000', status: 'Active', consumers: 37, rating: 4, avatar: 'https://randomuser.me/api/portraits/women/16.jpg', address: '88, Green Park', city: 'Jaipur', country: 'India', bio: 'Priya is a dietician.' },
  ];
  @Input() agencyId!: string;
  @Input() providerId?: string;
  constructor(private router: Router) {}
  get selectedProvider() {
    return this.providers.find(p => String(p.id) === this.providerId);
  }
  goToProviderDetail(provider: any) {
    this.router.navigate(['/admin/agency', this.agencyId, 'agency-provider', provider.id]);
  }
} 