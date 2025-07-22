import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-field-with-icon',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div>
      <label *ngIf="label" class="block text-xs font-semibold mb-1 text-gray-700">{{ label }}</label>
      <div class="relative flex items-center">
        <span *ngIf="icon && iconType === 'material'" class="material-icons text-blue-700 absolute left-3 top-1/2 -translate-y-1/2 text-lg h-6 w-6 flex items-center justify-center pr-3 border-r border-[#E0E7EF] my-1">{{ icon }}</span>
        <span *ngIf="icon && iconType === 'svg'" class="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center pr-3 border-r border-[#E0E7EF] my-1">
          <img [src]="icon" class="w-6 h-6 object-contain mx-auto flex-shrink-0" />
        </span>
        <input
          [type]="type || 'text'"
          class="w-full border border-[#E0E7EF] px-10 py-2 text-sm focus:ring-2 focus:ring-[#1952B3] outline-none bg-white pl-14"
          [placeholder]="placeholder"
          [(ngModel)]="value"
          [disabled]="disabled"
          (ngModelChange)="valueChange.emit($event)"
        />
      </div>
    </div>
  `
})
export class InputFieldWithIconComponent {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() type = 'text';
  @Input() value: string = '';
  @Input() disabled = false;
  @Input() icon: string = '';
  @Input() iconType: 'svg' | 'material' = 'material';
  @Output() valueChange = new EventEmitter<string>();
} 