import { Component } from '@angular/core';
import { CommonChartComponent } from '../../../components/common-components/common-chart.component';
import { MatDatepickerModule, MatCalendar, MatCalendarHeader, MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-consumer-dashboard',
  standalone: true,
  imports: [CommonChartComponent, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, FormsModule, DatePipe],
  template: `
<div class="flex flex-col md:flex-row gap-6 p-6 bg-[#F7F8FA] min-h-screen">
  <!-- Main Content -->
  <div class="flex-1 flex flex-col gap-6">
    <!-- Cards Row -->
    <div class="flex flex-col md:flex-row gap-6">
      <div class="bg-gradient-to-r from-[#5B5BFF] to-[#8280FF] rounded-2xl p-6 text-white flex-1 shadow-lg">
        <div class="flex justify-between items-center mb-4">
          <div>
            <div class="text-sm">Balance</div>
            <div class="text-2xl font-bold">$5,756</div>
          </div>
          <span class="material-icons text-4xl">credit_card</span>
        </div>
        <div class="mb-2 text-xs">CARD HOLDER</div>
        <div class="mb-2 font-semibold">Eddy Cusuma</div>
        <div class="mb-2 text-xs">VALID THRU</div>
        <div class="mb-4 font-semibold">12/22</div>
        <div class="text-lg tracking-widest font-mono">3778 **** **** 1234</div>
      </div>
      <div class="bg-white rounded-2xl p-6 flex-1 shadow border border-gray-100 flex flex-col justify-between">
        <div class="flex justify-between items-center mb-4">
          <div>
            <div class="text-sm">Balance</div>
            <div class="text-2xl font-bold">$5,756</div>
          </div>
          <span class="material-icons text-4xl">credit_card</span>
        </div>
        <div class="mb-2 text-xs">CARD HOLDER</div>
        <div class="mb-2 font-semibold">Eddy Cusuma</div>
        <div class="mb-2 text-xs">VALID THRU</div>
        <div class="mb-4 font-semibold">12/22</div>
        <div class="text-lg tracking-widest font-mono">3778 **** **** 1234</div>
      </div>
    </div>
    <!-- Payment History & Recent Transaction -->
    <div class="flex flex-col md:flex-row gap-6">
      <div class="bg-white rounded-2xl p-6 flex-1 shadow border border-gray-100">
        <div class="font-semibold mb-2">Payment History</div>
        <app-common-chart [data]="chartData" [options]="chartOptions" type="line"></app-common-chart>
      </div>
      <div class="bg-white rounded-2xl p-6 flex-1 shadow border border-gray-100">
        <div class="font-semibold mb-2">Recent Transaction</div>
        <div class="flex flex-col gap-4">
          <div class="flex items-center gap-3">
            <span class="material-icons text-3xl bg-yellow-100 rounded-full p-2">account_circle</span>
            <div class="flex-1">
              <div class="font-semibold">Provider021</div>
              <div class="text-xs text-gray-500">28 January 2021</div>
            </div>
            <div class="text-red-500 font-bold">-$850</div>
          </div>
          <div class="flex items-center gap-3">
            <span class="material-icons text-3xl bg-blue-100 rounded-full p-2">account_balance_wallet</span>
            <div class="flex-1">
              <div class="font-semibold">Provider023</div>
              <div class="text-xs text-gray-500">25 January 2021</div>
            </div>
            <div class="text-green-500 font-bold">+$2,500</div>
          </div>
          <div class="flex items-center gap-3">
            <span class="material-icons text-3xl bg-green-100 rounded-full p-2">account_circle</span>
            <div class="flex-1">
              <div class="font-semibold">Provider021</div>
              <div class="text-xs text-gray-500">21 January 2021</div>
            </div>
            <div class="text-red-500 font-bold">-$850</div>
          </div>
          <div class="flex items-center gap-3">
            <span class="material-icons text-3xl bg-cyan-100 rounded-full p-2">account_circle</span>
            <div class="flex-1">
              <div class="font-semibold">Provider201</div>
              <div class="text-xs text-gray-500">21 January 2021</div>
            </div>
            <div class="text-green-500 font-bold">+$5,400</div>
          </div>
        </div>
      </div>
    </div>
    <!-- Dispute Table -->
    <div class="bg-white rounded-2xl p-6 shadow border border-gray-100">
      <div class="font-semibold mb-2">Dispute</div>
      <div class="overflow-x-auto">
        <table class="min-w-full text-sm">
          <thead>
            <tr class="bg-gray-50">
              <th class="p-2"><input type="checkbox" /></th>
              <th class="p-2 text-left">Provider Name</th>
              <th class="p-2 text-left">Service Date</th>
              <th class="p-2 text-left">Service</th>
              <th class="p-2 text-left">Status</th>
              <th class="p-2 text-left">Dispute In Favour</th>
              <th class="p-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let row of [1,2,3]">
              <td class="p-2"><input type="checkbox" /></td>
              <td class="p-2">Provider 01</td>
              <td class="p-2">13-04-2025</td>
              <td class="p-2">Lorem Ipsum is simply dummy</td>
              <td class="p-2"><span class="bg-green-100 text-green-700 px-2 py-1 rounded">Resolved</span></td>
              <td class="p-2">Consumer</td>
              <td class="p-2"><button class="bg-red-100 text-red-500 px-3 py-1 rounded">Cancel</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <!-- Right Sidebar: Appointment Calendar & Appointments -->
  <div class="w-full md:w-96 flex-shrink-0 flex flex-col gap-6">
    <div class="bg-white rounded-2xl p-6 shadow border border-gray-100">
      <div class="font-semibold mb-2">Appointment Calendar</div>
      <div class="flex flex-col items-center">
      <div class="w-full">
  <mat-calendar
    [selected]="range.start || today"
    [dateClass]="dateClass"
    (selectedChange)="onCalendarChange($event)"
    [headerComponent]="customHeader"
    [startAt]="startAt"
  ></mat-calendar>
</div>

        <div class="text-xs text-gray-400 mt-2">Selected: {{ range.start | date:'MMM d, yyyy' }} - {{ range.end | date:'MMM d, yyyy' }}</div>
      </div>
    </div>
    <div class="bg-white rounded-2xl p-6 shadow border border-gray-100 flex-1">
      <div class="font-semibold mb-2">Appointments</div>
      <div class="flex flex-col gap-4">
        <div class="flex items-center gap-3" *ngFor="let appt of [1,2,3,4,5,6,7,8]">
          <img src="https://randomuser.me/api/portraits/men/{{appt+10}}.jpg" class="w-10 h-10 rounded-full" />
          <div class="flex-1">
            <div class="font-semibold">Provider0{{appt}}</div>
            <div class="text-xs text-gray-500">Spiritual</div>
          </div>
          <div class="text-xs text-gray-400">{{ 10+appt }}:00-{{ 11+appt }}:00</div>
        </div>
      </div>
    </div>
  </div>
</div>
  `,
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  chartData = {
    labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
    datasets: [
      {
        data: [200, 400, 800, 300, 600, 700, 650],
        label: 'Payments',
        fill: true,
        tension: 0.4,
        borderColor: '#8280FF',
        backgroundColor: 'rgba(130,128,255,0.10)',
        pointBackgroundColor: '#8280FF',
        pointBorderColor: '#8280FF'
      }
    ]
  };
  chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false }
    },
    scales: {
      x: { grid: { display: false } },
      y: { grid: { color: '#e5e7eb' } }
    }
  };
  today = new Date();
  startAt = new Date(2021, 1, 1); // February 2021
  range = {
    start: new Date(2021, 1, 23),
    end: new Date(2021, 1, 27)
  };
  selecting = false;
  customHeader = CustomCalendarHeaderComponent;

  onCalendarChange(date: Date|null) {
    if (!date) return;
    if (!this.selecting) {
      this.range = { start: date, end: date };
      this.selecting = true;
    } else {
      if (date < this.range.start) {
        this.range = { start: date, end: this.range.start };
      } else {
        this.range = { start: this.range.start, end: date };
      }
      this.selecting = false;
    }
  }

  dateClass: MatCalendarCellClassFunction<Date> = (d: Date) => {
    const date = d.getDate();
    const month = d.getMonth();
    const year = d.getFullYear();
    const start = this.range.start;
    const end = this.range.end;
    if (!start || !end) return '';
    const inRange =
      new Date(year, month, date) >= new Date(start.getFullYear(), start.getMonth(), start.getDate()) &&
      new Date(year, month, date) <= new Date(end.getFullYear(), end.getMonth(), end.getDate());
    return inRange ? 'mat-calendar-body-in-range' : '';
  };
}

@Component({
  selector: 'custom-calendar-header',
  standalone: true,
  imports: [],
  template: `
    <div class="flex items-center justify-between px-2 py-1 mb-2">
      <button mat-icon-button (click)="previousClicked()" class="text-[#8280FF]">
        <span class="material-icons">chevron_left</span>
      </button>
      <div class="font-semibold text-base text-[#8280FF]">{{ getMonthYear() }}</div>
      <button mat-icon-button (click)="nextClicked()" class="text-[#8280FF]">
        <span class="material-icons">chevron_right</span>
      </button>
    </div>
  `
})
export class CustomCalendarHeaderComponent {
  constructor(private calendar: MatCalendar<Date>) {}
  getMonthYear(): string {
    const date = this.calendar.activeDate;
    return date.toLocaleString('default', { month: 'long', year: 'numeric' });
  }
  previousClicked(): void {
    this.calendar.activeDate = new Date(this.calendar.activeDate.getFullYear(), this.calendar.activeDate.getMonth() - 1, 1);
  }
  nextClicked(): void {
    this.calendar.activeDate = new Date(this.calendar.activeDate.getFullYear(), this.calendar.activeDate.getMonth() + 1, 1);
  }
} 