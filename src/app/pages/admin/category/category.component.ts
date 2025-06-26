import { Component } from '@angular/core';
import { NgIf, NgFor, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CreateCategoryModalComponent } from './create-category-modal.component';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [NgIf, NgFor, CommonModule, FormsModule, CreateCategoryModalComponent],
  template: `
    <div class="p-6 min-h-screen bg-gray-50">
      <div class="flex items-center justify-between mb-4">
        <h1 class="text-2xl font-bold">Category</h1>
        <button (click)="showModal = true" class="px-4 py-2 rounded-lg bg-[#1952B3] text-white font-semibold text-base hover:bg-[#143e7d] transition">Add Category</button>
      </div>
      <div class="mb-6 flex items-center gap-4">
        <input type="text" class="w-full max-w-xs border border-[#E0E7EF] rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#1952B3]" placeholder="Search Category" [(ngModel)]="search" />
      </div>
      <ng-container *ngIf="categories.length; else emptyState">
        <div class="font-semibold text-lg mb-4">Created Categories</div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div *ngFor="let cat of filteredCategories()" class="bg-white rounded-xl shadow border border-[#E0E7EF] p-6 flex flex-col items-start">
            <div class="w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold mb-3" [ngStyle]="{'background': cat.color, 'color': '#fff'}">{{cat.name[0]}}</div>
            <div class="font-semibold text-base mb-1">{{cat.name}}</div>
            <div class="text-sm text-gray-600 mb-4">{{cat.description}}</div>
            <button class="w-full py-2 rounded-lg bg-[#1952B3] text-white font-semibold text-sm hover:bg-[#143e7d] transition">View/Edit</button>
          </div>
        </div>
      </ng-container>
      <ng-template #emptyState>
        <div class="flex justify-center items-center min-h-[60vh]">
          <div class="bg-white rounded-2xl shadow-lg flex flex-col items-center p-8 w-[400px]">
            <img src="/assets/icons/emptyStateImage.svg" alt="Empty State" class="w-60 h-60 object-contain mb-4" />
            <div class="font-semibold text-lg mb-4">Create Category</div>
            <button (click)="showModal = true" class="w-full py-2 rounded-lg bg-[#1952B3] text-white font-semibold text-base hover:bg-[#143e7d] transition">Add Category</button>
          </div>
        </div>
      </ng-template>
      <app-create-category-modal *ngIf="showModal" (close)="showModal = false" (categoryCreated)="addCategory($event)"></app-create-category-modal>
    </div>
  `
})
export class CategoryComponent {
  showModal = false;
  search = '';
  categories = [
    { name: 'Spiritual', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.', color: '#F87171' },
    { name: 'Fitness', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.', color: '#60A5FA' }
  ];
  filteredCategories() {
    return this.categories.filter(cat => cat.name.toLowerCase().includes(this.search.toLowerCase()));
  }
  addCategory(cat: any) {
    this.categories.push(cat);
  }
} 