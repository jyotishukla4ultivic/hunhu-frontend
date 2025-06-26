import { Component, Input } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration, ChartType } from 'chart.js';

@Component({
  selector: 'app-common-chart',
  standalone: true,
  imports: [NgChartsModule],
  template: `
    <div class="h-48">
      <canvas baseChart
        [data]="data"
        [options]="options"
        [type]="type">
      </canvas>
    </div>
  `
})
export class CommonChartComponent {
  @Input() data!: ChartConfiguration['data'];
  @Input() options?: ChartConfiguration['options'];
  @Input() type: ChartType = 'line';
} 