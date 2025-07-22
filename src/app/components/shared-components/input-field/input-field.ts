import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div>
      <label *ngIf="label" class="block text-xs font-semibold mb-1 text-gray-700">{{ label }}</label>
      <input
        [type]="type || 'text'"
        class="w-full border border-[#E0E7EF] px-4 py-2 text-sm focus:ring-2 focus:ring-[#1952B3] outline-none bg-white"
        [placeholder]="placeholder"
        [(ngModel)]="value"
        [disabled]="disabled"
        (ngModelChange)="valueChange.emit($event)"
      />
    </div>
  `
})
export class InputFieldComponent {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() type = 'text';
  @Input() value: string = '';
  @Input() disabled = false;
  @Output() valueChange = new EventEmitter<string>();
}
