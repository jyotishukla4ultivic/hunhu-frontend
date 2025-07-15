import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-consumer-payment-history',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-[#F7F8FA] min-h-screen w-full p-4 md:p-8">
      <!-- Header -->
      <div class="text-xs font-medium text-gray-500 mb-2">Payment History</div>
      <div class="bg-white rounded-xl border border-gray-200 p-6 w-full">
        <!-- Transactions Title and Import Button -->
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
          <div>
            <div class="text-xl font-semibold text-gray-900">Transactions</div>
            <div class="text-xs text-gray-500">An Overview of all your transactions over the year.</div>
          </div>
          <button class="px-4 py-2 rounded-lg border border-[#8B7CFF] text-[#8B7CFF] font-semibold text-sm bg-[#F7F8FA]">Import Invoice</button>
        </div>
        <!-- Overview Cards -->
        <div class="flex gap-4 mb-6">
          <div class="flex-1 bg-[#F7F8FA] rounded-lg p-4 flex flex-col items-start border border-gray-100">
            <div class="text-xs text-gray-500 mb-1">Balance</div>
            <div class="text-2xl font-bold text-[#8B7CFF]">$79,897.00</div>
          </div>
          <div class="flex-1 bg-[#F7F8FA] rounded-lg p-4 flex flex-col items-start border border-gray-100">
            <div class="text-xs text-gray-500 mb-1">Total Earning</div>
            <div class="text-2xl font-bold text-[#8B7CFF]">$78,987.00</div>
          </div>
        </div>
        <!-- Search, Date, Filters -->
        <div class="flex flex-col md:flex-row md:items-center gap-3 mb-4">
          <div class="flex-1 flex items-center gap-2">
            <span class="material-icons text-gray-400 text-xl">search</span>
            <input type="text" class="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#8B7CFF]" placeholder="Search Dispute Id or Name..." />
          </div>
          <input type="date" class="border border-gray-200 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#8B7CFF] w-44" value="2025-04-21" />
          <button class="flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium text-gray-700"><span class="material-icons text-base">filter_list</span> Filters</button>
        </div>
        <!-- Table -->
        <div class="overflow-x-auto rounded-lg border border-gray-100 mb-4">
          <table class="min-w-full text-sm">
            <thead class="bg-[#F7F8FA] text-gray-500">
              <tr>
                <th class="p-3 font-medium text-left">Payment Id & Date</th>
                <th class="p-3 font-medium text-left">Service</th>
                <th class="p-3 font-medium text-left">Consumer</th>
                <th class="p-3 font-medium text-left">Agency</th>
                <th class="p-3 font-medium text-left">My Commission</th>
                <th class="p-3 font-medium text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let row of rows" class="border-b last:border-b-0">
                <td class="p-3">
                  <div class="font-semibold text-gray-900 text-xs">{{row.id}}</div>
                  <div class="text-[10px] text-gray-400">{{row.date}}</div>
                </td>
                <td class="p-3">{{row.service}}</td>
                <td class="p-3">{{row.consumer}}</td>
                <td class="p-3">{{row.agency}}</td>
                <td class="p-3">{{row.commission}}</td>
                <td class="p-3"><button class="bg-[#F4F1FF] text-[#8B7CFF] px-4 py-1 rounded font-semibold text-xs border border-[#E6E2FF]">View Invoice</button></td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- Pagination -->
        <div class="flex items-center gap-1 justify-end mt-2">
          <button class="w-7 h-7 flex items-center justify-center rounded border border-gray-200 text-xs text-gray-500">&lt;</button>
          <button class="w-7 h-7 flex items-center justify-center rounded border border-gray-200 text-xs font-semibold text-white bg-[#8B7CFF]">1</button>
          <button class="w-7 h-7 flex items-center justify-center rounded border border-gray-200 text-xs text-gray-500">2</button>
          <button class="w-7 h-7 flex items-center justify-center rounded border border-gray-200 text-xs text-gray-500">3</button>
          <button class="w-7 h-7 flex items-center justify-center rounded border border-gray-200 text-xs text-gray-500">4</button>
          <button class="w-7 h-7 flex items-center justify-center rounded border border-gray-200 text-xs text-gray-500">5</button>
          <button class="w-7 h-7 flex items-center justify-center rounded border border-gray-200 text-xs text-gray-500">&gt;</button>
        </div>
      </div>
    </div>
  `
})
export class PaymentHistoryComponent {
  rows = [
    { id: '#Pay-12435', date: '31. Dec. 2022', service: 'Meditation', consumer: 'Provider 01', agency: 'Agency01', commission: '$80 (70%)' },
    { id: '#Pay-12436', date: '31. Dec. 2022', service: 'Meditation', consumer: 'Provider 01', agency: 'Agency01', commission: '$80 (70%)' },
    { id: '#Pay-12437', date: '31. Dec. 2022', service: 'Meditation', consumer: 'Provider 01', agency: 'Agency01', commission: '$80 (70%)' },
    { id: '#Pay-12438', date: '31. Dec. 2022', service: 'Meditation', consumer: 'Provider 01', agency: 'Agency01', commission: '$80 (70%)' },
    { id: '#Pay-12439', date: '31. Dec. 2022', service: 'Meditation', consumer: 'Provider 01', agency: 'Agency01', commission: '$80 (70%)' },
    { id: '#Pay-12440', date: '31. Dec. 2022', service: 'Meditation', consumer: 'Provider 01', agency: 'Agency01', commission: '$80 (70%)' },
    { id: '#Pay-12441', date: '31. Dec. 2022', service: 'Meditation', consumer: 'Provider 01', agency: 'Agency01', commission: '$80 (70%)' },
    { id: '#Pay-12442', date: '31. Dec. 2022', service: 'Meditation', consumer: 'Provider 01', agency: 'Agency01', commission: '$80 (70%)' },
    { id: '#Pay-12443', date: '31. Dec. 2022', service: 'Meditation', consumer: 'Provider 01', agency: 'Agency01', commission: '$80 (70%)' },
  ];
} 