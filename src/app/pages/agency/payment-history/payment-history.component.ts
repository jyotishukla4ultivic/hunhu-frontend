import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleHeaderComponent } from '../../../components/common-components/title-header.component';

@Component({
  selector: 'app-payment-history',
  standalone: true,
  imports: [CommonModule, TitleHeaderComponent],
  template: `
    <div class="bg-[#F4F4F7] min-h-screen py-6 px-2 md:px-8">
      <div class="px-0 md:px-2 mb-6">
        <app-title-header title="Payment History" [showHamburger]="true"></app-title-header>
      </div>
      <!-- Summary Card -->
      <div class="bg-white rounded-2xl shadow border border-[#E9EAF0] p-6 md:p-8 mb-8">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <div class="text-xl font-semibold mb-1">Transactions</div>
            <div class="text-xs text-gray-400">An Overview of all your transactions over the year.</div>
          </div>
          <button class="px-5 py-2 rounded-lg bg-white text-[#222] font-semibold text-sm border border-[#E9EAF0]">Import Invoice</button>
        </div>
        <div class="flex flex-col sm:flex-row gap-4">
          <div class="flex items-center bg-white rounded-lg border border-[#E9EAF0] px-6 py-4 min-w-[220px]">
            <span class="flex items-center justify-center w-10 h-10 rounded-full bg-[#F6F8FF] mr-4">
              <span class="material-icons text-[#6C63FF] text-xl">account_balance_wallet</span>
            </span>
            <div>
              <div class="text-xs text-gray-400 mb-1">Balances</div>
              <div class="text-xl font-bold">$78,987.00</div>
            </div>
          </div>
          <div class="flex items-center bg-white rounded-lg border border-[#E9EAF0] px-6 py-4 min-w-[220px]">
            <span class="flex items-center justify-center w-10 h-10 rounded-full bg-[#F6F8FF] mr-4">
              <span class="material-icons text-[#6C63FF] text-xl">attach_money</span>
            </span>
            <div>
              <div class="text-xs text-gray-400 mb-1">Total Earning</div>
              <div class="text-xl font-bold">$78,987.00</div>
            </div>
          </div>
        </div>
      </div>
      <!-- Table Card -->
      <div class="bg-white rounded-2xl shadow border border-[#E9EAF0] p-6 md:p-8">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
          <div class="flex flex-col flex-1">
            <label class="text-xs text-gray-400 mb-1">Search:</label>
            <div class="relative w-full max-w-xs">
              <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                <span class="material-icons text-base">search</span>
              </span>
              <input type="text" placeholder="Search Dispute Id or Name..." class="w-full pl-10 pr-3 py-2 rounded border border-[#E9EAF0] bg-white text-sm outline-none" />
            </div>
          </div>
          <div class="flex gap-2 items-center">
            <div class="relative flex items-center">
              <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                <span class="material-icons text-base">calendar_today</span>
              </span>
              <input type="text" placeholder="dd-mm-yyyy" class="w-32 pl-10 pr-3 py-2 rounded border border-[#E9EAF0] bg-white text-sm outline-none" />
            </div>
            <button class="flex items-center gap-2 px-4 py-2 rounded border border-[#E9EAF0] bg-white text-[#222] font-semibold text-sm"><span class="material-icons text-base">filter_list</span> Filters</button>
          </div>
        </div>
        <div class="overflow-x-auto">
          <table class="min-w-full text-sm rounded-2xl border" style="border-color: #55565A1F; border-width: 1.5px;" border="1">
            <thead class="bg-[#F8F8FF]">
              <tr class="text-left text-gray-400 font-normal border-b border-[#E3E6EC]">
                <th class="py-5 px-6 font-normal flex items-center"><input type="checkbox" class="align-middle" /></th>
                <th class="py-5 px-6 font-normal">Payment Id & Date</th>
                <th class="py-5 px-6 font-normal">Service</th>
                <th class="py-5 px-6 font-normal">Service Provider</th>
                <th class="py-5 px-6 font-normal">Marketplace</th>
                <th class="py-5 px-6 font-normal">My Commission</th>
                <th class="py-5 px-6 font-normal">Provider Payment</th>
                <th class="py-5 px-6 font-normal">Market Place Commission</th>
                <th class="py-5 px-6 pr-6 font-normal text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let row of rows" class="border-b border-[#E3E6EC] text-gray-500 font-normal hover:bg-[#F8F8FF] transition">
                <td class="py-5 px-6 flex items-center"><input type="checkbox" class="align-middle" /></td>
                <td class="py-5 px-6">
                  <div class="font-bold text-[#222]">{{row.id}}</div>
                  <div class="text-xs text-gray-400">{{row.date}}</div>
                </td>
                <td class="py-5 px-6">{{row.service}}</td>
                <td class="py-5 px-6">{{row.provider}}</td>
                <td class="py-5 px-6">{{row.marketplace}}</td>
                <td class="py-5 px-6">{{row.myCommission}}</td>
                <td class="py-5 px-6">{{row.providerPayment}}</td>
                <td class="py-5 px-6">{{row.marketCommission}}</td>
                <td class="py-5 px-6 pr-6 flex items-center justify-center">
                  <button class="px-5 py-1 rounded-full bg-white border border-[#E3E6EC] text-[#6C63FF] font-normal text-sm shadow-none">View Invoice</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- Pagination Bar -->
        <div class="flex items-center mt-10 justify-start">
          <div class="flex gap-1">
            <button class="w-8 h-8 rounded bg-white border border-[#E3E6EC] text-gray-400 font-bold">&laquo;</button>
            <button class="w-8 h-8 rounded bg-white border border-[#E3E6EC] text-gray-400 font-bold">&lt;</button>
            <button class="w-8 h-8 rounded bg-[#E3E6EC] text-[#6C63FF] font-bold">1</button>
            <button class="w-8 h-8 rounded bg-white border border-[#E3E6EC] text-gray-400 font-bold">2</button>
            <button class="w-8 h-8 rounded bg-white border border-[#E3E6EC] text-gray-400 font-bold">3</button>
            <button class="w-8 h-8 rounded bg-white border border-[#E3E6EC] text-gray-400 font-bold">...</button>
            <button class="w-8 h-8 rounded bg-white border border-[#E3E6EC] text-gray-400 font-bold">10</button>
            <button class="w-8 h-8 rounded bg-white border border-[#E3E6EC] text-gray-400 font-bold">&gt;</button>
            <button class="w-8 h-8 rounded bg-white border border-[#E3E6EC] text-gray-400 font-bold">&raquo;</button>
          </div>
        </div>
      </div>
    </div>
  `
})
export class PaymentHistoryComponent {
  rows = [
    { id: '#Pay12345', date: '31. Dec. 2022', service: 'Meditation', provider: 'Provider 01', marketplace: 'HUNHU', myCommission: '$20.00 (20%)', providerPayment: '$70.00 (70%)', marketCommission: '$10.00 (10%)' },
    { id: '#Pay12345', date: '31. Dec. 2022', service: 'Meditation', provider: 'Provider 01', marketplace: 'HUNHU', myCommission: '$20.00 (20%)', providerPayment: '$70.00 (70%)', marketCommission: '$10.00 (10%)' },
    { id: '#Pay12345', date: '31. Dec. 2022', service: 'Meditation', provider: 'Provider 01', marketplace: 'HUNHU', myCommission: '$20.00 (20%)', providerPayment: '$70.00 (70%)', marketCommission: '$10.00 (10%)' },
    { id: '#Pay12345', date: '31. Dec. 2022', service: 'Meditation', provider: 'Provider 01', marketplace: 'HUNHU', myCommission: '$20.00 (20%)', providerPayment: '$70.00 (70%)', marketCommission: '$10.00 (10%)' },
    { id: '#Pay12345', date: '31. Dec. 2022', service: 'Meditation', provider: 'Provider 01', marketplace: 'HUNHU', myCommission: '$20.00 (20%)', providerPayment: '$70.00 (70%)', marketCommission: '$10.00 (10%)' },
    { id: '#Pay12345', date: '31. Dec. 2022', service: 'Meditation', provider: 'Provider 01', marketplace: 'HUNHU', myCommission: '$20.00 (20%)', providerPayment: '$70.00 (70%)', marketCommission: '$10.00 (10%)' },
    { id: '#Pay12345', date: '31. Dec. 2022', service: 'Meditation', provider: 'Provider 01', marketplace: 'HUNHU', myCommission: '$20.00 (20%)', providerPayment: '$70.00 (70%)', marketCommission: '$10.00 (10%)' },
    { id: '#Pay12345', date: '31. Dec. 2022', service: 'Meditation', provider: 'Provider 01', marketplace: 'HUNHU', myCommission: '$20.00 (20%)', providerPayment: '$70.00 (70%)', marketCommission: '$10.00 (10%)' },
    { id: '#Pay12345', date: '31. Dec. 2022', service: 'Meditation', provider: 'Provider 01', marketplace: 'HUNHU', myCommission: '$20.00 (20%)', providerPayment: '$70.00 (70%)', marketCommission: '$10.00 (10%)' },
    { id: '#Pay12345', date: '31. Dec. 2022', service: 'Meditation', provider: 'Provider 01', marketplace: 'HUNHU', myCommission: '$20.00 (20%)', providerPayment: '$70.00 (70%)', marketCommission: '$10.00 (10%)' },
  ];
} 