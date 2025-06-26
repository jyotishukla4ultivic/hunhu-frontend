import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-header',
  standalone: true,
  template: `<div class='mb-4'><h1 class='text-2xl font-bold text-gray-900'>{{title}}</h1><div *ngIf="subtitle" class='text-sm text-gray-500'>{{subtitle}}</div></div>`
})
export class TitleHeaderComponent {
  @Input() title = '';
  @Input() subtitle?: string;
} 