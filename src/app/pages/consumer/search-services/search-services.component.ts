import { Component } from '@angular/core';
import { CurrencyPipe, CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-search-services',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, RouterModule],
  template: `
<div class="p-6 bg-[#F7F8FA] min-h-screen">
  <div class="mb-4 text-base font-semibold text-gray-700">Search Services</div>
  <div class="mb-6">
  <div class="bg-white rounded-xl shadow flex flex-col md:flex-row items-center p-4 gap-4 justify-between">
    
    <!-- Search box with icon inside -->
    <div class="relative w-full md:w-[280px]">
      <span class="material-icons text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2 text-base">search</span>
      <input
        type="text"
        placeholder="Search your services..."
        class="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg outline-none bg-transparent text-sm"
      />
    </div>

    <!-- Dropdown and filter -->
    <div class="flex gap-2">
      <select class="border border-gray-200 rounded-lg px-4 py-2 bg-white text-sm">
        <option>Select Services</option>
        <option>Yoga</option>
        <option>Meditation</option>
        <option>Fitness</option>
      </select>
      <button class="border border-gray-200 rounded-lg px-4 py-2 bg-white flex items-center gap-2 text-sm">
        <span class="material-icons text-[#8280FF] text-base">filter_list</span>
        Filters
      </button>
    </div>
    
  </div>
</div>

  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    <ng-container *ngFor="let service of services; let i = index">
      <div class="bg-white rounded-2xl shadow border border-gray-100 flex flex-col overflow-hidden">
        <img [src]="service.image" alt="Service" class="w-full h-48 object-cover" />
        <div class="flex items-center gap-2 px-4 pt-4">
          <img [src]="service.avatar" class="w-8 h-8 rounded-full border-2 border-white -mt-6 shadow" />
          <span class="font-semibold text-sm text-gray-700">{{ service.title }}</span>
          <span class="flex items-center ml-auto text-xs text-orange-500 font-semibold">
            <span class="material-icons text-base align-middle">star</span> {{ service.rating }}
          </span>
        </div>
        <div class="px-4 py-2 text-xs text-gray-500 line-clamp-2">{{ service.description }}</div>
        <div class="flex items-center justify-between px-4 pb-4 mt-auto">
          <span class="font-semibold text-gray-900">Price: {{ service.price | currency:'USD' }}</span>
          <button
            class="px-4 py-2 rounded-lg bg-[#8280FF] text-white font-semibold text-sm shadow hover:bg-[#5B5BFF] transition"
            [routerLink]="['/consumer/service', i]"
          >
            View Services
          </button>
        </div>
      </div>
    </ng-container>
  </div>
</div>
  `
})
export class SearchServicesComponent {
  services = [
    {
      image: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg',
      avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
      title: 'Seaside Serenity Villa',
      description: 'Learn yoga and meditation at our serene villa by the sea. Expert instructors and peaceful ambiance await you.',
      price: '550000',
      rating: 5.0
    },
    {
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg',
      avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
      title: 'Seaside Serenity Villa',
      description: 'Personalized fitness and wellness programs in a beautiful setting. Join us for a transformative experience.',
      price: '550000',
      rating: 5.0
    },
    {
      image: 'https://images.pexels.com/photos/317157/pexels-photo-317157.jpeg',
      avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
      title: 'Seaside Serenity Villa',
      description: 'Mindfulness and relaxation sessions with certified professionals. Find your inner peace with us.',
      price: '550000',
      rating: 5.0
    },
    {
      image: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg',
      avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
      title: 'Seaside Serenity Villa',
      description: 'Yoga for all levels in a tranquil environment. Improve your flexibility and strength.',
      price: '550000',
      rating: 5.0
    },
    {
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg',
      avatar: 'https://randomuser.me/api/portraits/women/5.jpg',
      title: 'Seaside Serenity Villa',
      description: 'Holistic wellness and spa treatments. Rejuvenate your mind and body.',
      price: '550000',
      rating: 5.0
    },
    {
      image: 'https://images.pexels.com/photos/317157/pexels-photo-317157.jpeg',
      avatar: 'https://randomuser.me/api/portraits/men/6.jpg',
      title: 'Seaside Serenity Villa',
      description: 'Group meditation and breathing exercises. Connect with like-minded individuals.',
      price: '550000',
      rating: 5.0
    },
    {
      image: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg',
      avatar: 'https://randomuser.me/api/portraits/women/7.jpg',
      title: 'Seaside Serenity Villa',
      description: 'Outdoor yoga sessions with a view. Refresh your spirit in nature.',
      price: '550000',
      rating: 5.0
    },
    {
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg',
      avatar: 'https://randomuser.me/api/portraits/men/8.jpg',
      title: 'Seaside Serenity Villa',
      description: 'Wellness coaching and nutrition advice. Achieve your health goals.',
      price: '550000',
      rating: 5.0
    },
    {
      image: 'https://images.pexels.com/photos/317157/pexels-photo-317157.jpeg',
      avatar: 'https://randomuser.me/api/portraits/women/9.jpg',
      title: 'Seaside Serenity Villa',
      description: 'Private sessions and group classes available. Start your journey today.',
      price: '550000',
      rating: 5.0
    }
  ];
} 