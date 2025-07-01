import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-explore-providers',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen bg-[#F8F8FB] pb-12">
      <div class="max-w-7xl mx-auto px-4 pt-8">
        <div class="text-2xl font-bold mb-1">Providers</div>
        <div class="text-sm text-[#6C63FF] mb-6">Providers &gt; <span class="text-gray-700 font-medium">Explore Providers</span></div>
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div class="flex-1 flex items-center bg-white rounded-lg shadow px-4 py-2 border border-gray-200">
            <span class="material-icons text-gray-400 mr-2">search</span>
            <input type="text" placeholder="Search agency and providers..." class="flex-1 outline-none bg-transparent text-sm" />
          </div>
          <div class="flex gap-3 w-full md:w-auto">
            <select class="rounded-lg border border-gray-200 px-4 py-2 text-sm bg-white">
              <option>Select Category</option>
            </select>
            <button class="rounded-lg border border-gray-200 px-4 py-2 text-sm bg-white flex items-center gap-2">
              <span class="material-icons text-base">filter_list</span> Filters
            </button>
          </div>
        </div>
        <div style="color: red; font-size: 16px;">Providers count: {{ providers.length }}</div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div *ngFor="let provider of providers" class="bg-white rounded-xl shadow border border-gray-200 flex flex-col md:flex-row gap-6 p-6">
            <img [src]="provider.image" class="w-32 h-32 object-cover rounded-lg self-center md:self-start" />
            <div class="flex-1 flex flex-col gap-2">
              <div class="flex items-center gap-2">
                <div class="font-bold text-lg">{{provider.name}}</div>
                <span class="bg-[#E6E6FF] text-[#6C63FF] px-2 py-0.5 rounded text-xs font-semibold">Agency 01 Owner</span>
              </div>
              <div class="text-sm text-gray-500 mb-1">{{provider.description}}</div>
              <div class="mb-2">
                <span class="font-semibold text-xs text-gray-700">Providers Category</span>
                <div class="flex flex-wrap gap-1 mt-1">
                  <span *ngFor="let cat of provider.categories" class="bg-[#F5F8FF] text-[#8280FF] px-2 py-0.5 rounded text-xs font-semibold">{{cat}}</span>
                </div>
              </div>
              <div class="flex items-center gap-4 mb-2">
                <span class="text-sm font-semibold text-gray-700">Consultation Fee</span>
                <span class="text-[#6C63FF] font-bold text-sm">Take : {{provider.fee}} (incl.Vat)</span>
                <span class="text-xs text-gray-500">Per Consultation</span>
                <button class="ml-auto rounded-lg bg-[#6C63FF] text-white px-6 py-2 text-sm font-semibold">View Profile</button>
              </div>
              <div class="grid grid-cols-4 gap-2 mt-2">
                <div class="bg-[#F8F8FB] rounded-lg p-2 flex flex-col items-center">
                  <span class="text-xs text-gray-400">Total Experience</span>
                  <span class="font-semibold text-sm text-gray-700">{{provider.experience}}</span>
                </div>
                <div class="bg-[#F8F8FB] rounded-lg p-2 flex flex-col items-center">
                  <span class="text-xs text-gray-400">Joined Dactime</span>
                  <span class="font-semibold text-sm text-gray-700">{{provider.joined}}</span>
                </div>
                <div class="bg-[#F8F8FB] rounded-lg p-2 flex flex-col items-center">
                  <span class="text-xs text-gray-400">Total Appointments</span>
                  <span class="font-semibold text-sm text-gray-700">{{provider.appointments}}</span>
                </div>
                <div class="bg-[#F8F8FB] rounded-lg p-2 flex flex-col items-center">
                  <span class="text-xs text-gray-400">Total Rating ({{provider.ratingCount}})</span>
                  <span class="flex items-center gap-1 font-semibold text-sm text-gray-700"><span class="material-icons text-[#FFD600] text-base">star</span>{{provider.rating}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ExploreProvidersComponent {
  providers = [
    {
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
    {
      name: 'Provider Name',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      categories: ['Category', 'Category', 'Category Name', 'Category', 'Category'],
      fee: 256,
      experience: '5+ Years',
      joined: '26 Sep 2021',
      appointments: 6759,
      rating: 5.0,
      ratingCount: 876
    },
    {
      name: 'Provider Name',
      image: 'https://randomuser.me/api/portraits/women/65.jpg',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      categories: ['Category', 'Category', 'Category Name', 'Category', 'Category'],
      fee: 256,
      experience: '5+ Years',
      joined: '26 Sep 2021',
      appointments: 6759,
      rating: 5.0,
      ratingCount: 876
    },
    {
      name: 'Provider Name',
      image: 'https://randomuser.me/api/portraits/men/65.jpg',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      categories: ['Category', 'Category', 'Category Name', 'Category', 'Category'],
      fee: 256,
      experience: '5+ Years',
      joined: '26 Sep 2021',
      appointments: 6759,
      rating: 5.0,
      ratingCount: 876
    }
  ];
} 