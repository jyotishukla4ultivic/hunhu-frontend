import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CommonTableComponent } from '../../../components/common-components/common-table.component';
import { CommonPaginationComponent } from '../../../components/common-components/common-pagination.component';

@Component({
  selector: 'app-explore-provider-detail',
  standalone: true,
  imports: [CommonModule, CommonTableComponent, CommonPaginationComponent],
  template: `
    <div class="min-h-screen bg-[#F8F8FB] pb-12">
      <!-- Banner/Header -->
      <div class="w-full h-40 bg-[#D9E8FF] rounded-b-2xl"></div>
      <div class="max-w-5xl mx-auto px-4 pt-0">
        <!-- Single Card for Profile, Tabs, and Tab Content -->
        <div class="bg-white rounded-xl shadow p-8 -mt-20 mb-8 relative z-10">
          <!-- Profile Row -->
          <div class="flex flex-col md:flex-row items-center gap-8">
            <img [src]="provider?.image" class="w-[8rem] h-[8rem] object-cover rounded-lg border-4 border-white shadow-md" />
            <div class="flex-1 flex flex-col gap-2">
              <div class="flex items-center gap-2">
                <div class="font-bold text-xl">{{provider?.name}}</div>
                <span class="bg-[#E6E6FF] text-[#6C63FF] px-2 py-0.5 rounded text-xs font-semibold">Agency 01 Owner</span>
              </div>
              <div class="flex items-center gap-4 text-gray-500 text-sm mb-2">
                <span>&#64;joniarbore</span>
                <span>&bull;</span>
                <span>joni&#64;email.com</span>
              </div>
              <div class="flex items-center gap-8 mt-1 flex-wrap">
                <span class="flex items-center gap-1 text-[#FFD600] text-base font-semibold"><span class="material-icons text-base">star</span>4.8</span>
                <span class="text-gray-400 text-sm">232 reviews</span>
                <span class="text-gray-400 text-sm">223 consumer</span>
                <span class="text-gray-400 text-sm">10 service</span>
              </div>
            </div>
          </div>
          <!-- Tabs -->
          <div class="flex border-b border-gray-200 mt-8">
            <button (click)="selectedTab = 0" [ngClass]="selectedTab === 0 ? 'border-[#1952B3] text-[#1952B3] bg-white border-b-2' : 'border-transparent text-gray-500'" class="px-6 py-3 -mb-px text-base font-semibold focus:outline-none transition-all duration-200">Overview</button>
            <button (click)="selectedTab = 1" [ngClass]="selectedTab === 1 ? 'border-[#1952B3] text-[#1952B3] bg-white border-b-2' : 'border-transparent text-gray-500'" class="px-6 py-3 -mb-px text-base font-semibold focus:outline-none transition-all duration-200">Agency Details</button>
          </div>
          <!-- Tab Content -->
          <ng-container *ngIf="selectedTab === 0">
            <div class="font-bold text-base mb-2 mt-8">ABOUT PROVIDER</div>
            <div class="border-b border-[#E9EAF0] mb-4"></div>
            <div class="text-sm text-gray-600 mb-8">{{provider?.description}}</div>
            <!-- Services Carousel (2 horizontally scrollable rows) -->
            <div class="font-bold text-base mb-4">Services</div>
            <div class="flex flex-col gap-6 mb-8">
              <div *ngFor="let row of servicesRows" class="-mx-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                <div class="flex gap-6 px-4 flex-nowrap" style="min-width:100%">
                  <div *ngFor="let service of row" class="bg-white rounded-xl shadow border border-gray-200 p-4 flex flex-col w-72 flex-shrink-0">
                    <div class="relative">
                      <img [src]="service.image" class="w-full h-32 object-cover rounded-t-xl" />
                      <span class="absolute top-2 left-2 px-3 py-1 rounded-full text-xs font-semibold text-white"
                        [ngClass]="{
                          'bg-orange-500': service.category === 'MEDITATION',
                          'bg-green-600': service.category === 'SPIRITUAL',
                          'bg-blue-600': service.category === 'HEALING',
                          'bg-yellow-600': service.category === 'NATURE SPIRITUAL',
                          'bg-pink-600': service.category === 'YOGA',
                          'bg-gray-500': !['MEDITATION','SPIRITUAL','HEALING','NATURE SPIRITUAL','YOGA'].includes(service.category)
                        }">
                        {{service.category}}
                      </span>
                    </div>
                    <div class="flex items-center justify-between pt-3">
                      <div class="font-semibold text-base truncate">{{service.title}}</div>
                      <div class="text-[#FF5722] font-bold text-base">{{service.price}}</div>
                    </div>
                    <div class="text-sm text-gray-600 pt-1 pb-2 truncate">{{service.description}}</div>
                    <div class="flex items-center justify-between pb-3 mt-auto">
                      <div class="flex items-center gap-1 text-xs text-gray-400">
                        <span class="material-icons text-base align-middle">groups</span>
                        {{service.providers}} Providers
                      </div>
                      <div class="flex items-center gap-1 text-xs text-gray-400">
                        <span class="material-icons text-base align-middle text-[#FFD600]">star</span>
                        5.0
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Service Rating -->
            <div class="font-bold text-base mb-2">Service Rating</div>
            <div class="border-b border-[#E9EAF0] mb-4"></div>
            <div class="flex items-center gap-8 mb-4">
              <div class="flex flex-col items-center justify-center">
                <span class="text-4xl font-bold">4.8</span>
                <div class="flex items-center gap-1 mt-1">
                  <span class="material-icons text-[#FFD600] text-xl">star</span>
                  <span class="material-icons text-[#FFD600] text-xl">star</span>
                  <span class="material-icons text-[#FFD600] text-xl">star</span>
                  <span class="material-icons text-[#FFD600] text-xl">star</span>
                  <span class="material-icons text-[#FFD600] text-xl">star_half</span>
                </div>
                <span class="text-xs text-gray-400 mt-1">Course Rating</span>
              </div>
              <div class="flex-1">
                <div class="flex items-center gap-2 mb-1" *ngFor="let r of ratings">
                  <span class="text-xs text-gray-600 w-20">{{r.label}}</span>
                  <div class="flex-1 h-2 bg-gray-200 rounded">
                    <div class="h-2 rounded bg-[#1952B3]" [style.width.%]="r.percent"></div>
                  </div>
                  <span class="text-xs text-gray-400 w-8 text-right">{{r.percent}}%</span>
                </div>
              </div>
            </div>
            <!-- Consumer Feedback -->
            <div class="font-bold text-base mb-2 mt-8">Consumer Feedback</div>
            <div class="border-b border-[#E9EAF0] mb-4"></div>
            <div class="flex items-center justify-end mb-4">
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
              <button class="px-5 py-2 rounded-lg bg-[#1952B3] text-white font-semibold text-sm transition hover:bg-[#143e7d] mb-6">Load More</button>
            </div>
          </ng-container>
          <ng-container *ngIf="selectedTab === 1">
            <div class="max-w-4xl ">
              <!-- About Agency Card -->
              <div class="bg-white rounded-xl pt-8 mb-8">
                <div class="font-bold text-base mb-2 text-gray-900">ABOUT AGENCY</div>
                <div class="border-b border-[#E9EAF0] mb-4"></div>
                <div class="text-sm text-gray-600 leading-relaxed">{{agency.description}}</div>
              </div>
              <div class="bg-white rounded-xl  mb-8">
                <div class="font-bold text-lg mb-4">AGENCY PROVIDER LIST</div>
                <div class="overflow-x-auto">
                  <table class="min-w-full text-sm text-left">
                    <thead class="bg-[#F5F8FF]">
                      <tr class="text-gray-500">
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
                      <tr *ngFor="let provider of agencyProviders" class="hover:bg-[#F5F8FF] transition">
                        <td class="py-3 px-3"><input type="checkbox" /></td>
                        <td class="py-3 px-3 flex items-center gap-2">
                          <img [src]="provider.avatar" class="w-8 h-8 rounded-full object-cover border border-[#E0E7EF]" />
                          <span class="font-medium text-gray-900">{{provider.name}}</span>
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
                <!-- Custom Pagination Bar -->
                <div class="flex justify-between items-center mt-6">
                  <div class="text-sm text-gray-500">Showing 1 to 10 of 20 entries</div>
                  <div class="flex gap-2">
                    <button class="px-3 h-8 flex items-center justify-center border border-[#E0E7EF] rounded-[6px] bg-white text-[#1952B3] font-medium hover:bg-[#F5F8FF] transition text-sm">&lt; Back</button>
                    <button class="w-8 h-8 flex items-center justify-center border border-[#1952B3] rounded-[6px] bg-[#1952B3] text-white font-medium transition text-sm">1</button>
                    <button class="w-8 h-8 flex items-center justify-center border border-[#E0E7EF] rounded-[6px] bg-white text-[#1952B3] font-medium hover:bg-[#F5F8FF] transition text-sm">2</button>
                    <button class="w-8 h-8 flex items-center justify-center border border-[#E0E7EF] rounded-[6px] bg-white text-[#1952B3] font-medium hover:bg-[#F5F8FF] transition text-sm">3</button>
                    <button class="px-3 h-8 flex items-center justify-center border border-[#E0E7EF] rounded-[6px] bg-white text-[#1952B3] font-medium hover:bg-[#F5F8FF] transition text-sm">Next &gt;</button>
                  </div>
                </div>
              </div>
              <div class="bg-white rounded-xl   mb-8">
                <!-- Tabs above Provider Review (inside card) -->
                <div class="mb-6">
                  <div class="flex items-center border-b border-[#E9EAF0]">
                    <button
                      class="px-0 pb-2 mr-8 font-semibold text-base border-b-2"
                      [ngClass]="{'border-[#8280FF] text-[#8280FF]': selectedReviewTab === 0, 'border-transparent text-gray-500': selectedReviewTab !== 0}"
                      (click)="selectedReviewTab = 0"
                    >
                      Agency Review
                    </button>
                  </div>
                </div>
                <!-- Provider Review Section -->
                <div>
                  <div class="flex items-center justify-between mb-6">
                    <div class="font-bold text-lg">Provider Review</div>
                    <select class="border border-[#E0E7EF] rounded px-3 py-1 text-sm text-gray-700">
                      <option>5 Star Rating</option>
                      <option>4 Star Rating</option>
                      <option>3 Star Rating</option>
                    </select>
                  </div>
                  <div>
                    <div *ngFor="let review of reviews; let last = last" class="flex gap-4 py-6" [ngClass]="{'border-b border-[#E9EAF0]': !last}">
                      <img [src]="review.avatar" class="w-10 h-10 rounded-full object-cover mt-1" />
                      <div class="flex-1">
                        <div class="flex items-center gap-2 mb-1">
                          <span class="font-semibold text-base text-gray-900">{{review.name}}</span>
                          <span class="text-xs text-gray-400">{{review.time}}</span>
                        </div>
                        <div class="flex items-center gap-1 mb-2">
                          <ng-container *ngFor="let s of [].constructor(review.stars)">
                            <span class="material-icons text-[#FFD600] text-base">star</span>
                          </ng-container>
                        </div>
                        <div class="text-sm text-gray-700 leading-relaxed">{{review.text}}</div>
                      </div>
                    </div>
                  </div>
                  <button class="mt-6 px-5 py-2 rounded-lg bg-[#1952B3] text-white font-semibold text-sm transition hover:bg-[#143e7d]">Load More</button>
                </div>
              </div>
            </div>
          </ng-container>
        </div>
      </div>
    </div>
  `
})
export class ExploreProviderDetailComponent {
  provider: any;
  ratings = [
    { label: '5 Star Rating', percent: 75 },
    { label: '4 Star Rating', percent: 21 },
    { label: '3 Star Rating', percent: 2 },
    { label: '2 Star Rating', percent: 1 },
    { label: '1 Star Rating', percent: 1 },
  ];
  reviews = [
    { name: 'Guy Hawkins', time: '1 week ago', stars: 5, avatar: 'https://randomuser.me/api/portraits/men/1.jpg', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.' },
    { name: 'Dianne Russel', time: '5 mins ago', stars: 4, avatar: 'https://randomuser.me/api/portraits/women/2.jpg', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.' },
    { name: 'Bessie Cooper', time: '6 hours ago', stars: 5, avatar: 'https://randomuser.me/api/portraits/women/3.jpg', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.' },
    { name: 'Eleanor Pena', time: '1 day ago', stars: 5, avatar: 'https://randomuser.me/api/portraits/women/4.jpg', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.' },
    { name: 'Ralph Edwards', time: '2 days ago', stars: 4, avatar: 'https://randomuser.me/api/portraits/men/5.jpg', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.' },
    { name: 'Arlene McCoy', time: '1 week ago', stars: 5, avatar: 'https://randomuser.me/api/portraits/women/6.jpg', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.' },
  ];
  services = [
    { image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80', title: 'Yoga Session', category: 'SPIRITUAL', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: '$57', providers: 12 },
    { image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80', title: 'Meditation Class', category: 'MEDITATION', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: '$57', providers: 265 },
    { image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80', title: 'Reiki Healing', category: 'HEALING', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: '$57', providers: 65 },
    { image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=400&q=80', title: 'Sound Bath', category: 'MEDITATION', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: '$57', providers: 65 },
    { image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80', title: 'Candle Therapy', category: 'SPIRITUAL', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: '$57', providers: 12 },
    { image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80', title: 'Breathwork', category: 'MEDITATION', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: '$57', providers: 265 },
    { image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80', title: 'Forest Bathing', category: 'NATURE SPIRITUAL', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: '$57', providers: 65 },
    { image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=400&q=80', title: 'Aqua Healing', category: 'HEALING', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: '$57', providers: 65 },
    { image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80', title: 'Crystal Therapy', category: 'SPIRITUAL', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: '$57', providers: 12 },
    { image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80', title: 'Progressive Relaxation', category: 'PROGRESSIVE', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: '$57', providers: 12 },
    { image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80', title: 'Breathing Exercise', category: 'BREATHING', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: '$57', providers: 265 },
    { image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80', title: 'Loving-Kindness', category: 'LOVING-KINDNESS', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: '$57', providers: 65 },
    { image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80', title: 'Visualization', category: 'VISUALIZATION', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: '$57', providers: 5 },
    { image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80', title: 'Spiritual Guidance', category: 'SPIRITUAL', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: '$57', providers: 50 },
  ];
  providers = [
    {
      id: 1,
      name: 'Joni Arbore',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      categories: ['Category', 'Category', 'Category Name', 'Category', 'Category'],
      fee: 256,
      experience: '5+ Years',
      joined: '26 Sep 2021',
      appointments: 6759,
      rating: 5.0,
      ratingCount: 876
    },
    // ...add more mock providers as needed
  ];
  selectedTab = 0;
  agency = {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
  };
  agencyProviders = [
    { name: 'Rajesh Nair', joinDate: '1 March, 2023', mobile: '600 000 0000', status: 'Active', consumers: 44, rating: 5, avatar: 'https://randomuser.me/api/portraits/men/10.jpg' },
    { name: 'Nithya Menon', joinDate: '1 March, 2023', mobile: '600 000 0001', status: 'Active', consumers: 35, rating: 4, avatar: 'https://randomuser.me/api/portraits/women/8.jpg' },
    { name: 'Meena Gopal', joinDate: '1 March, 2023', mobile: '600 000 0002', status: 'Active', consumers: 29, rating: 5, avatar: 'https://randomuser.me/api/portraits/women/9.jpg' },
    { name: 'Suresh Kumar', joinDate: '1 March, 2023', mobile: '600 000 0003', status: 'Active', consumers: 25, rating: 4, avatar: 'https://randomuser.me/api/portraits/men/11.jpg' },
    { name: 'Rakesh Patel', joinDate: '1 March, 2023', mobile: '600 000 0004', status: 'Active', consumers: 31, rating: 5, avatar: 'https://randomuser.me/api/portraits/men/12.jpg' },
    { name: 'Monica Patel', joinDate: '1 March, 2023', mobile: '600 000 0005', status: 'Active', consumers: 36, rating: 4, avatar: 'https://randomuser.me/api/portraits/women/13.jpg' },
    { name: 'Himanshu', joinDate: '1 March, 2023', mobile: '600 000 0006', status: 'Active', consumers: 39, rating: 5, avatar: 'https://randomuser.me/api/portraits/men/13.jpg' },
    { name: 'Ramesh', joinDate: '1 March, 2023', mobile: '600 000 0007', status: 'Active', consumers: 32, rating: 4, avatar: 'https://randomuser.me/api/portraits/men/14.jpg' },
    { name: 'Pankaj Pandit', joinDate: '1 March, 2023', mobile: '600 000 0008', status: 'Active', consumers: 35, rating: 5, avatar: 'https://randomuser.me/api/portraits/men/15.jpg' },
    { name: 'Priya Kumari', joinDate: '1 March, 2023', mobile: '600 000 0009', status: 'Active', consumers: 37, rating: 4, avatar: 'https://randomuser.me/api/portraits/women/16.jpg' }
  ];
  providerTableColumns = [
    { label: 'Name', key: 'name' },
    { label: 'Join Date', key: 'joinDate' },
    { label: 'Mobile No', key: 'mobile' },
    { label: 'Status', key: 'status' },
    { label: 'Consumers', key: 'consumers' },
    { label: 'Rating', key: 'rating' }
  ];
  providerTableActions = [
    { icon: 'view', label: 'View', onClick: (row: any) => { /* handle view */ } }
  ];
  providerTablePage = 1;
  providerTableTotalPages = 2;
  onProviderTablePageChange(page: number) {
    this.providerTablePage = page;
    // handle pagination logic here
  }
  selectedReviewTab = 0;
  constructor(private route: ActivatedRoute) {
    const id = this.route.snapshot.paramMap.get('id');
    this.provider = this.providers.find(p => String(p.id) === id);
  }
  get servicesRows() {
    const half = Math.ceil(this.services.length / 2);
    return [
      this.services.slice(0, half),
      this.services.slice(half)
    ];
  }
} 