import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-stat-card',
  standalone: true,
  imports: [NgClass],
  template: `
    <div class='bg-white rounded-xl shadow p-4 flex flex-col gap-2 min-w-[180px]'>
      <div class='flex items-center justify-between gap-2'>
    
        <span class='text-gray-500 text-sm'>{{label}}</span>

            <span class='material-icons text-3xl' [ngClass]="iconColor">{{icon}}</span>
      </div>
      <div class='text-2xl font-bold text-gray-900'>{{value}}</div>
      <div class='flex items-center gap-1 text-xs' [ngClass]="changeType === 'up' ? 'text-green-500' : 'text-red-500'">
        <span class='material-icons text-base'>{{changeType === 'up' ? 'trending_up' : 'trending_down'}}</span>
        {{change}} {{changeType === 'up' ? 'Up' : 'Down'}} from yesterday
      </div>
    </div>
  `
})
export class StatCardComponent {
  @Input() icon = '';
  @Input() iconColor = '';
  @Input() label = '';
  @Input() value = '';
  @Input() change = '';
  @Input() changeType: 'up' | 'down' = 'up';
} 