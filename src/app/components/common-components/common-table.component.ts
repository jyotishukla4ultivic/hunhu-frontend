import { Component, Input } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-common-table',
  standalone: true,
  imports: [CommonModule, NgClass],
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.css']
})
export class CommonTableComponent {
  @Input() columns: {label: string, key: string, type?: string}[] = [];
  @Input() data: any[] = [];
  @Input() actions: {icon: string, label: string, onClick: (row: any) => void, color?: string}[] = [];
  @Input() selectable: boolean = false;
  @Input() nameClick?: (row: any) => void;

  selectedRows: Set<any> = new Set();

  toggleRow(row: any) {
    if (this.selectedRows.has(row)) {
      this.selectedRows.delete(row);
    } else {
      this.selectedRows.add(row);
    }
  }

  toggleAll() {
    if (this.selectedRows.size === this.data.length) {
      this.selectedRows.clear();
    } else {
      this.data.forEach(row => this.selectedRows.add(row));
    }
  }

  isSelected(row: any) {
    return this.selectedRows.has(row);
  }
} 