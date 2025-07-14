import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-provider-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-white rounded-xl shadow border border-[#E0E7EF] flex flex-col p-0 overflow-hidden">
      <div class="relative">
        <img [src]="image" class="w-full h-40 object-cover rounded-t-xl" />
        <div class="absolute left-0 right-0 top-[8.5rem] flex flex-wrap justify-center gap-1 px-2">
          <ng-container *ngFor="let cat of categories; let i = index">
            <span class="bg-[#F5F8FF] text-[#8280FF] px-2 py-0.5 rounded text-xs font-semibold mb-1">{{cat}}</span>
          </ng-container>
        </div>
      </div>
      <div class="px-4 pt-3 pb-2 flex flex-col gap-1">
        <div class="font-bold text-base">{{name}}</div>
        <div class="text-sm text-gray-500 mb-2">{{description}}</div>
        <div class="flex items-center gap-4 mb-3">
          <div class="flex items-center gap-1 text-xs">
            <span class="material-icons text-[#FFD600] text-base">star</span>
            <span class="font-semibold text-gray-900">5.0</span>
          </div>
          <div class="flex items-center gap-1 text-xs">
          
            <span class="font-semibold text-gray-900">{{appointments | number}}</span>
            <span class="text-gray-400">Appointments</span>
          </div>
        </div>
        <button (click)="viewProfile.emit()" class="w-full rounded-lg border border-[#8280FF] bg-[#F5F8FF] text-[#8280FF] px-4 py-2 text-sm font-semibold transition hover:bg-[#edeaff]">View Profile</button>
      </div>
    </div>
  `
})
export class ProviderCardComponent {
  @Input() name!: string;
  @Input() image!: string;
  @Input() categories: string[] = [];
  @Input() description!: string;
  @Input() appointments!: number;
  @Output() viewProfile = new EventEmitter<void>();
} 