import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agency-provider-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="relative min-h-screen bg-[#F5F8FF] pb-12">
      <div class="relative w-full max-w-7xl mx-auto px-4">
        <!-- Blue banner -->
        <div class="h-64 bg-[#D9E8FF] rounded-2xl w-full absolute top-0 left-0 z-0"></div>
        <!-- White card, floating above banner -->
        <div class="relative z-10 top-9">
          <div class="bg-white rounded-xl shadow p-8 flex flex-col gap-6">
            <div class=" items-center gap-6 mb-6">
              <img [src]="selectedProvider?.avatar || 'https://randomuser.me/api/portraits/men/32.jpg'" class="w-24 h-24 rounded-full object-cover border-4 border-white shadow" alt="Avatar" />
              <div class="flex flex-col gap-1 flex-1">
                <div class="flex items-center gap-2">
                  <h1 class="text-2xl font-bold">{{selectedProvider?.name || 'Provider Name'}}</h1>
                  <span class="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs font-semibold">Meditation</span>
                </div>
                <div class="flex items-center gap-2 text-gray-500 text-sm">
                  <span>{{ providerUsername }}</span>
                  <span>&bull;</span>
                  <span>{{selectedProvider?.email || 'nithyamenon@gmail.com'}}</span>
                </div>
                <div class="flex items-center gap-4 mt-1 flex-wrap">
                  <span class="flex items-center gap-1 text-[#FFD600] text-sm font-semibold"><span class="material-icons text-base">star</span>4.8</span>
                  <span class="text-gray-400 text-xs">232 reviews</span>
                  <span class="text-gray-400 text-xs">223 consumer</span>
                  <span class="text-gray-400 text-xs">10 service</span>
                </div>
              </div>
            </div>
            <!-- Tabs -->
            <div class="flex border-b border-gray-200 mb-6">
              <button (click)="selectedTab = 0" class="px-6 py-3 -mb-px text-base font-semibold focus:outline-none border-b-2 transition-all duration-200" [ngClass]="selectedTab === 0 ? 'border-[#1952B3] text-[#1952B3] bg-white' : 'border-transparent text-gray-500'">About & Review</button>
              <button (click)="selectedTab = 1" class="px-6 py-3 -mb-px text-base font-semibold focus:outline-none border-b-2 transition-all duration-200" [ngClass]="selectedTab === 1 ? 'border-[#1952B3] text-[#1952B3] bg-white' : 'border-transparent text-gray-500'">Services</button>
            </div>
            <!-- Tab Content -->
            <ng-container *ngIf="selectedTab === 0">
              <!-- About Provider -->
              <div class="mb-8">
                <div class="font-bold text-base mb-2">ABOUT PROVIDER</div>
                <div class="text-sm text-gray-600">{{selectedProvider?.bio || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'}}</div>
              </div>
              <!-- Service Rating -->
              <div class="mb-8">
                <div class="font-bold text-base mb-2">Service Rating</div>
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
              </div>
              <!-- Consumer Feedback -->
              <div>
                <div class="font-bold text-base mb-2">Consumer Feedback</div>
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
                  <button class="px-5 py-2 rounded-lg bg-[#1952B3] text-white font-semibold text-sm transition hover:bg-[#143e7d]">Load More</button>
                </div>
              </div>
            </ng-container>
            <ng-container *ngIf="selectedTab === 1">
              <!-- Services Tab Content -->
              <div>
              <div class="font-bold text-base mb-4">Services</div>
  <div class="flex flex-col gap-6">
    <div *ngFor="let row of servicesRows" class="overflow-x-auto w-full scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
      <div class="flex gap-6 px-1">
        <div *ngFor="let service of row" class="bg-white rounded-xl shadow border border-[#E0E7EF] flex-shrink-0 w-72 relative overflow-hidden">
          <!-- Image with badge -->
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
          <!-- Title + Price -->
          <div class="flex items-center justify-between px-4 pt-3">
            <div class="font-semibold text-base truncate">{{service.title}}</div>
            <div class="text-[#FF5722] font-bold text-base">{{service.price}}</div>
          </div>
          <!-- Description -->
          <div class="text-sm text-gray-600 px-4 pt-1 pb-2 truncate">{{service.description}}</div>
          <!-- Footer -->
          <div class="flex items-center justify-between px-4 pb-3 mt-auto">
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

              </div>
            </ng-container>
          </div>
        </div>
      </div>
    </div>
  `
})
export class AgencyProviderDetailComponent {
  agencyId: string;
  providerId?: string;
  selectedTab = 0;
  providers = [
    { id: 1, name: 'Nithya Menon', email: 'nithya@email.com', joinDate: '10 March, 2023', mobile: '00 000 00000', status: 'Active', consumers: 223, rating: 4.8, avatar: 'https://randomuser.me/api/portraits/women/8.jpg', address: '122, Makarna Gandhi Road, Aryanagar,Indore High Rd', city: 'Chennai', country: 'India', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque.' },
    { id: 2, name: 'Krithya Menon', email: 'krithya@email.com', joinDate: '10 March, 2023', mobile: '00 000 00000', status: 'Active', consumers: 35, rating: 4, avatar: 'https://randomuser.me/api/portraits/women/8.jpg', address: '221B Baker Street', city: 'Mumbai', country: 'India', bio: 'Krithya is a fitness expert with 10 years of experience.' },
    { id: 3, name: 'Nishant Goyal', email: 'nishant@email.com', joinDate: '10 March, 2023', mobile: '00 000 00000', status: 'Active', consumers: 29, rating: 5, avatar: 'https://randomuser.me/api/portraits/men/9.jpg', address: '45, Park Avenue', city: 'Delhi', country: 'India', bio: 'Nishant specializes in yoga and wellness.' },
    { id: 4, name: 'Neeru Kapoor', email: 'neeru@email.com', joinDate: '10 March, 2023', mobile: '00 000 00000', status: 'Active', consumers: 25, rating: 4, avatar: 'https://randomuser.me/api/portraits/women/10.jpg', address: '78, Lake View', city: 'Kolkata', country: 'India', bio: 'Neeru is a spiritual healer.' },
    { id: 5, name: 'Neepa Bagchi', email: 'neepa@email.com', joinDate: '10 March, 2023', mobile: '00 000 00000', status: 'Active', consumers: 31, rating: 5, avatar: 'https://randomuser.me/api/portraits/women/11.jpg', address: '12, MG Road', city: 'Pune', country: 'India', bio: 'Neepa is a nutritionist.' },
    { id: 6, name: 'Monica Patel', email: 'monica@email.com', joinDate: '10 March, 2023', mobile: '00 000 00000', status: 'Active', consumers: 36, rating: 4, avatar: 'https://randomuser.me/api/portraits/women/12.jpg', address: '34, Hill Top', city: 'Ahmedabad', country: 'India', bio: 'Monica is a physiotherapist.' },
    { id: 7, name: 'Himanshu', email: 'himanshu@email.com', joinDate: '10 March, 2023', mobile: '00 000 00000', status: 'Active', consumers: 39, rating: 5, avatar: 'https://randomuser.me/api/portraits/men/13.jpg', address: '56, River Side', city: 'Bangalore', country: 'India', bio: 'Himanshu is a meditation coach.' },
    { id: 8, name: 'Ramesh', email: 'ramesh@email.com', joinDate: '10 March, 2023', mobile: '00 000 00000', status: 'Active', consumers: 32, rating: 4, avatar: 'https://randomuser.me/api/portraits/men/14.jpg', address: '90, Sun City', city: 'Hyderabad', country: 'India', bio: 'Ramesh is a life coach.' },
    { id: 9, name: 'Pankaj Pandit', email: 'pankaj@email.com', joinDate: '10 March, 2023', mobile: '00 000 00000', status: 'Active', consumers: 35, rating: 5, avatar: 'https://randomuser.me/api/portraits/men/15.jpg', address: '11, Lotus Lane', city: 'Chandigarh', country: 'India', bio: 'Pankaj is a motivational speaker.' },
    { id: 10, name: 'Priya Kumari', email: 'priya@email.com', joinDate: '10 March, 2023', mobile: '00 000 00000', status: 'Active', consumers: 37, rating: 4, avatar: 'https://randomuser.me/api/portraits/women/16.jpg', address: '88, Green Park', city: 'Jaipur', country: 'India', bio: 'Priya is a dietician.' },
  ];
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
  constructor(private route: ActivatedRoute) {
    this.agencyId = this.route.snapshot.paramMap.get('agencyId') || '';
    this.providerId = this.route.snapshot.paramMap.get('providerId') || undefined;
  }
  get selectedProvider() {
    return this.providers.find(p => String(p.id) === this.providerId);
  }
  get providerUsername(): string {
    const email = this.selectedProvider?.email;
    if (email && email.includes('@')) {
      return '@' + email.split('@')[0];
    }
    return '@username';
  }
  get servicesRows() {
    const mid = Math.ceil(this.services.length / 2);
    return [
      this.services.slice(0, mid),
      this.services.slice(mid)
    ];
  }
}
