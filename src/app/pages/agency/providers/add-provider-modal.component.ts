import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-provider-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
      <div class="bg-white rounded-2xl shadow-xl w-full max-w-lg p-8 relative">
        <button (click)="close.emit()" class="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl">&times;</button>
        <h2 class="text-xl font-bold mb-2">Add New Provider</h2>
        <div class="text-gray-500 text-sm mb-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's...</div>
        <div class="flex flex-col gap-4">
          <input type="text" class="w-full border border-[#E0E7EF] rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#8280FF]" placeholder="Enter Provider Name..." />
          <button class="self-end px-6 py-2 rounded-lg bg-[#8280FF] text-white font-semibold text-sm">Send</button>
        </div>
        <div class="mt-8">
          <div class="font-semibold text-sm mb-2">Some guidelines</div>
          <div class="bg-[#F5F8FF] rounded-lg p-4 text-xs text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's...</div>
        </div>
      </div>
    </div>
  `
})
export class AddProviderModalComponent {
  @Output() close = new EventEmitter<void>();
} 