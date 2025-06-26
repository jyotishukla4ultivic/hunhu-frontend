import { Component, EventEmitter, Output } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-category-modal',
  standalone: true,
  imports: [NgIf, NgFor, FormsModule],
  template: `
    <div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
      <div class="bg-white rounded-2xl shadow-xl w-full max-w-xl p-8 relative">
        <button (click)="close.emit()" class="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl">&times;</button>
        <h2 class="text-xl font-bold mb-6">Create Category</h2>
        <div class="flex flex-col gap-4">
          <div class="flex items-center gap-4">
            <div class="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
              <span class="material-icons text-4xl text-gray-300">image</span>
            </div>
            <div>
              <div class="text-xs text-gray-500 mb-1">Upload your new icon for category. <span class="font-semibold text-[#1952B3]">Important guidelines:</span></div>
              <div class="text-xs text-gray-400">120x120 px poster in .SVG or .JPG/.PNG. Supported formats: .jpg, .png, .svg</div>
              <button class="mt-2 px-3 py-1 rounded bg-[#F5F8FF] text-[#1952B3] text-xs font-semibold border border-[#1952B3]">UPLOAD</button>
            </div>
          </div>
          <div>
            <label class="block text-sm font-semibold mb-1">Category</label>
            <input type="text" class="w-full border border-[#E0E7EF] rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#1952B3]" placeholder="Enter Category name..." [(ngModel)]="categoryName" />
          </div>
          <div>
            <label class="block text-sm font-semibold mb-1">Description</label>
            <textarea rows="3" maxlength="250" class="w-full border border-[#E0E7EF] rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#1952B3]" placeholder="Enter description..." [(ngModel)]="description"></textarea>
            <div class="text-xs text-gray-400 text-right mt-1">{{description.length}}/250</div>
          </div>
          <div>
            <div class="font-semibold text-sm mb-2">Create Sub-Category</div>
            <div class="flex gap-2 mb-2">
              <input type="text" class="flex-1 border border-[#E0E7EF] rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#1952B3]" placeholder="Sub-Category" [(ngModel)]="subCategoryInput" />
              <button (click)="addSubCategory()" class="px-4 py-2 rounded-lg bg-[#1952B3] text-white font-semibold text-sm">Add</button>
            </div>
            <div class="flex flex-wrap gap-2">
              <span *ngFor="let sub of subCategories; let i = index" class="bg-[#F5F8FF] text-[#1952B3] px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                {{sub}}
                <button (click)="removeSubCategory(i)" class="ml-1 text-gray-400 hover:text-red-500">&times;</button>
              </span>
            </div>
          </div>
        </div>
        <div class="flex justify-end gap-3 mt-8">
          <button (click)="close.emit()" class="px-6 py-2 rounded-lg bg-gray-100 text-gray-700 font-semibold text-sm">Cancel</button>
          <button (click)="saveCategory()" class="px-6 py-2 rounded-lg bg-[#1952B3] text-white font-semibold text-sm">Save</button>
        </div>
      </div>
    </div>
  `
})
export class CreateCategoryModalComponent {
  @Output() close = new EventEmitter<void>();
  @Output() categoryCreated = new EventEmitter<any>();
  categoryName = '';
  description = '';
  subCategoryInput = '';
  subCategories: string[] = [];

  addSubCategory() {
    if (this.subCategoryInput.trim()) {
      this.subCategories.push(this.subCategoryInput.trim());
      this.subCategoryInput = '';
    }
  }
  removeSubCategory(i: number) {
    this.subCategories.splice(i, 1);
  }
  saveCategory() {
    if (this.categoryName.trim()) {
      const colors = ['#F87171', '#60A5FA', '#34D399', '#FBBF24', '#A78BFA'];
      const color = colors[Math.floor(Math.random() * colors.length)];
      this.categoryCreated.emit({
        name: this.categoryName,
        description: this.description,
        color
      });
      this.close.emit();
      this.categoryName = '';
      this.description = '';
      this.subCategories = [];
    }
  }
} 