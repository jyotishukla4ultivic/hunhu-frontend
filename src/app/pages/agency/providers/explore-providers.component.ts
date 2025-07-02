import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-explore-providers',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen  pb-12">
      <div class="mx-auto px-4 pt-8">
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
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div *ngFor="let provider of providers" class="bg-white rounded-2xl shadow-lg border border-gray-200 p-4 mb-6">
            <!-- Flex row: image + info -->
            <div class="flex flex-col md:flex-row items-center gap-8">
              <img [src]="provider.image" class="w-[12rem] h-[14rem] object-cover rounded-lg" />
              <div class="flex-1 flex flex-col gap-2">
                <div class="flex items-center gap-2">
                  <div class="font-bold text-xl">{{provider.name}}</div>
                  <span class="bg-[#E6E6FF] text-[#6C63FF] px-2 py-0.5 rounded text-xs font-semibold">Agency 01 Owner</span>
                </div>
                <div class="text-sm text-gray-500 mb-1 border-b border-[#E9EAF0]">
                <div class="mb-4">
                {{provider.description}}
                </div>
                </div>
                <div class="mb-2 border-b border-[#E9EAF0]">
                  <span class="font-semibold text-xs text-gray-700 ">Providers Category</span>
                  <div class="flex flex-wrap gap-1 mt-1 mb-4">
                    <span *ngFor="let cat of provider.categories" class="bg-[#F5F8FF] text-[#8280FF] px-2 py-0.5 rounded text-xs font-semibold">{{cat}}</span>
                  </div>
                </div>
                <div class="flex items-center gap-4 mb-4  border-b border-[#E9EAF0]">
             

                  <span class="text-sm font-semibold text-gray-700 mb-4">Consultation Fee</span>
                  <span class="text-[#6C63FF] font-bold text-base mb-4">Take : {{provider.fee}} (incl.Vat)</span>
                  <span class="text-xs text-gray-500 mb-4">Per Consultation</span>
                  <button class="ml-auto rounded-lg bg-[#6C63FF] text-white px-8 py-2 text-base font-bold mb-4">View Profile</button>
               
                </div>
              </div>
            </div>
            <!-- Stats row: OUTSIDE the flex row, but still inside the card -->
            <div class="grid grid-cols-4 gap-2 mt-6 mb-4">
              <div class="bg-[#F8F8FB] rounded-lg p-2">
                <span class="text-xs text-gray-900 font-bold text-left block">Total Experience</span>
                <span class="text-base text-gray-700 text-left block">{{provider.experience}}</span>
              </div>
              <div class="bg-[#F8F8FB] rounded-lg p-2">
                <span class="text-xs text-gray-900 font-bold text-left block">Joined Dactime</span>
                <span class="text-base text-gray-700 text-left block">{{provider.joined}}</span>
              </div>
              <div class="bg-[#F8F8FB] rounded-lg p-2">
                <span class="text-xs text-gray-900 font-bold text-left block">Total Appointments</span>
                <span class="text-base text-gray-700 text-left block">{{provider.appointments}}</span>
              </div>
              <div class="bg-[#F8F8FB] rounded-lg p-2">
                <span class="text-xs text-gray-900 font-bold text-left block">Total Rating ({{provider.ratingCount}})</span>
                <span class="flex items-center gap-1 text-base text-gray-700 text-left block">
                  <span class="material-icons text-[#FFD600] text-base">star</span>{{provider.rating}}
                </span>
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