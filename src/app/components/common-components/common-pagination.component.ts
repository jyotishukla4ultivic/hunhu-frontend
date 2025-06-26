import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-common-pagination',
  standalone: true,
  imports: [NgClass],
  template: `
    <div class="flex items-center gap-2 mt-4">
      <button class="px-3 h-8 flex items-center justify-center border border-[#E0E7EF] rounded-[6px] bg-white text-[#1952B3] font-medium hover:bg-[#F5F8FF] transition text-sm" [disabled]="page === 1" (click)="changePage(page - 1)">&lt; Back</button>
      <ng-container *ngFor="let p of [].constructor(totalPages); let i = index">
        <button
          class="w-8 h-8 flex items-center justify-center border rounded-[6px] text-sm font-medium transition"
          [ngClass]="page === i+1 ? 'border-[#2196F3] bg-[#2196F3] text-white' : 'border-[#E0E7EF] bg-white text-[#1952B3] hover:bg-[#F5F8FF]'"
          (click)="changePage(i+1)">
          {{i+1}}
        </button>
      </ng-container>
      <button class="px-3 h-8 flex items-center justify-center border border-[#E0E7EF] rounded-[6px] bg-white text-[#1952B3] font-medium hover:bg-[#F5F8FF] transition text-sm" [disabled]="page === totalPages" (click)="changePage(page + 1)">Next &gt;</button>
    </div>
  `
})
export class CommonPaginationComponent {
  @Input() page = 1;
  @Input() totalPages = 1;
  @Output() pageChange = new EventEmitter<number>();

  changePage(p: number) {
    if (p >= 1 && p <= this.totalPages) {
      this.pageChange.emit(p);
    }
  }
} 