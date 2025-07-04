import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-title-header',
  standalone: true,
  template: `
    <div class='mb-4 flex items-center gap-3'>
      <button *ngIf="showHamburger" (click)="hamburgerClick.emit()" class="mr-1 focus:outline-none">
        <span class="material-icons text-2xl text-gray-700">menu</span>
      </button>
      <div>
        <h1 class='text-2xl font-bold text-gray-900'>{{title}}</h1>
        <div *ngIf="subtitle" class='text-sm text-gray-500'>{{subtitle}}</div>
      </div>
    </div>
  `
})
export class TitleHeaderComponent {
  @Input() title = '';
  @Input() subtitle?: string;
  @Input() showHamburger = false;
  @Output() hamburgerClick = new EventEmitter<void>();
} 