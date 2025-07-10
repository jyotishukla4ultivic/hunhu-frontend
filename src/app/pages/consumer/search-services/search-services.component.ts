import { Component } from '@angular/core';
import { CurrencyPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-services',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  template: `
<div class="p-6 bg-[#F7F8FA] min-h-screen">
  <div class="mb-4 text-base font-semibold text-gray-700">Search Services</div>
  <div class="mb-2 text-xs text-red-500">DEBUG: {{ services.length }}</div>
  <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
    <div class="flex-1 flex items-center gap-4">
      <div class="relative w-full md:w-96">
        <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 material-icons">search</span>
        <input type="text" placeholder="Search your services..." class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8280FF] bg-white" />
      </div>
    </div>
    <div class="flex gap-2 justify-end">
      <select class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8280FF] bg-white">
        <option>Select Services</option>
        <option>Yoga</option>
        <option>Meditation</option>
        <option>Fitness</option>
      </select>
      <button class="px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-100 flex items-center gap-2">
        <span class="material-icons text-[#8280FF]">filter_list</span> Filters
      </button>
    </div>
  </div>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <div style="background: #eee; padding: 20px;">TEST CARD STATIC</div>
    <ng-container *ngFor="let service of services">
      <div style="background: #cce; padding: 20px;">{{ service.title }}</div>
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