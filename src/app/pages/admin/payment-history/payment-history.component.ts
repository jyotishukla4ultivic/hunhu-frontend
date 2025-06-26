import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-payment-history',
  standalone: true,
  imports: [NgIf, NgFor, FormsModule],
  template: `
    <div class="p-6 min-h-screen bg-gray-50">
      <h1 class="text-2xl font-bold mb-1">Payment History</h1>
      <div class="text-gray-400 text-sm mb-6">Payment</div>
      <div class="bg-white rounded-xl shadow p-8">
        <div class="flex items-center justify-between mb-6">
          <div class="font-bold text-lg">Transactions History</div>
          <input type="text" class="border border-[#E0E7EF] rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#1952B3] w-56" value="Sep 9, 2024 - Sep 15, 2024" readonly />
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div class="bg-[#F5F8FF] rounded-xl p-6 flex items-center gap-4">
            <span class="material-icons text-3xl text-[#1952B3] bg-white rounded-full p-2">account_balance_wallet</span>
            <div>
              <div class="text-xs text-gray-500 mb-1">Balances</div>
              <div class="text-2xl font-bold">$78,987.00</div>
            </div>
          </div>
          <div class="bg-[#F5F8FF] rounded-xl p-6 flex items-center gap-4">
            <span class="material-icons text-3xl text-[#1952B3] bg-white rounded-full p-2">attach_money</span>
            <div>
              <div class="text-xs text-gray-500 mb-1">Today Earning</div>
              <div class="text-2xl font-bold">$23,000.00</div>
            </div>
          </div>
        </div>
         <div class="text-sm text-gray-500  mb-2">Showing 1 to 10 of 10 entries</div>
        
         
          <div class="flex justify-between items-center gap-2 mb-2">
            <input type="text" class="border border-[#E0E7EF] rounded-lg px-3 py-1 text-sm focus:ring-2 focus:ring-[#1952B3]" placeholder="Search Transactions" />
            <button class="flex items-center gap-1 px-4 py-2 rounded bg-[#1952B3] text-white font-semibold shadow hover:bg-[#143e7d] transition"><span class="material-icons text-base">filter_list</span> Filter</button>
          </div>
      
        <div class="overflow-x-auto">
          <table class="min-w-full text-sm text-left">
            <thead class="bg-[#F5F8FF]">
              <tr class="text-gray-500 border-b border-[#E0E7EF]">
                <th class="py-3 px-3 font-semibold"><input type="checkbox" /></th>
                <th class="py-3 px-3 font-semibold">Transaction Id</th>
                <th class="py-3 px-3 font-semibold">Date</th>
                <th class="py-3 px-3 font-semibold">Service</th>
                <th class="py-3 px-3 font-semibold">Facilitated By</th>
                <th class="py-3 px-3 font-semibold">Provider</th>
                <th class="py-3 px-3 font-semibold">Customer</th>
                <th class="py-3 px-3 font-semibold">Market Price</th>
                <th class="py-3 px-3 font-semibold">Invoice</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let tx of transactions" class="border-b border-[#E0E7EF] last:border-0 hover:bg-[#F5F8FF] transition">
                <td class="py-3 px-3"><input type="checkbox" /></td>
                <td class="py-3 px-3 font-medium text-gray-900">{{tx.id}}</td>
                <td class="py-3 px-3">{{tx.date}}</td>
                <td class="py-3 px-3">{{tx.service}}</td>
                <td class="py-3 px-3">{{tx.facilitatedBy}}</td>
                <td class="py-3 px-3">{{tx.provider}}</td>
                <td class="py-3 px-3">{{tx.customer}}</td>
                <td class="py-3 px-3">$ {{tx.marketPrice}}</td>
                <td class="py-3 px-3"><button class="text-[#1952B3] hover:underline">View</button></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="flex justify-between items-center mt-6">
          <div class="text-sm text-gray-500">Showing 1 to 10 of 10 entries</div>
          <div class="flex gap-2">
            <button class="px-3 h-8 flex items-center justify-center border border-[#E0E7EF] rounded-[6px] bg-white text-[#1952B3] font-medium hover:bg-[#F5F8FF] transition text-sm">&lt; Back</button>
            <button class="w-8 h-8 flex items-center justify-center border border-[#2196F3] rounded-[6px] bg-[#2196F3] text-white font-medium transition text-sm">1</button>
            <button class="w-8 h-8 flex items-center justify-center border border-[#E0E7EF] rounded-[6px] bg-white text-[#1952B3] font-medium hover:bg-[#F5F8FF] transition text-sm">2</button>
            <button class="w-8 h-8 flex items-center justify-center border border-[#E0E7EF] rounded-[6px] bg-white text-[#1952B3] font-medium hover:bg-[#F5F8FF] transition text-sm">3</button>
            <button class="px-3 h-8 flex items-center justify-center border border-[#E0E7EF] rounded-[6px] bg-white text-[#1952B3] font-medium hover:bg-[#F5F8FF] transition text-sm">Next &gt;</button>
          </div>
        </div>
      </div>
    </div>
  `
})
export class PaymentHistoryComponent {
  transactions = [
    { id: '#PAY0124', date: '11 March, 2023', service: 'Meditation', facilitatedBy: 'Agency #1', provider: 'Provider #1', customer: 'customer01', marketPrice: '310.00 (7%)' },
    { id: '#PAY0125', date: '11 March, 2023', service: 'Meditation', facilitatedBy: 'Agency #1', provider: 'Provider #2', customer: 'customer02', marketPrice: '310.00 (7%)' },
    { id: '#PAY0126', date: '11 March, 2023', service: 'Meditation', facilitatedBy: 'Agency #1', provider: 'Provider #3', customer: 'customer03', marketPrice: '310.00 (7%)' },
    { id: '#PAY0127', date: '11 March, 2023', service: 'Meditation', facilitatedBy: 'Agency #1', provider: 'Provider #4', customer: 'customer04', marketPrice: '310.00 (7%)' },
    { id: '#PAY0128', date: '11 March, 2023', service: 'Meditation', facilitatedBy: 'Agency #1', provider: 'Provider #5', customer: 'customer05', marketPrice: '310.00 (7%)' },
    { id: '#PAY0129', date: '11 March, 2023', service: 'Meditation', facilitatedBy: 'Agency #1', provider: 'Provider #6', customer: 'customer06', marketPrice: '310.00 (7%)' },
    { id: '#PAY0130', date: '11 March, 2023', service: 'Meditation', facilitatedBy: 'Agency #1', provider: 'Provider #7', customer: 'customer07', marketPrice: '310.00 (7%)' },
    { id: '#PAY0131', date: '11 March, 2023', service: 'Meditation', facilitatedBy: 'Agency #1', provider: 'Provider #8', customer: 'customer08', marketPrice: '310.00 (7%)' },
    { id: '#PAY0132', date: '11 March, 2023', service: 'Meditation', facilitatedBy: 'Agency #1', provider: 'Provider #9', customer: 'customer09', marketPrice: '310.00 (7%)' },
    { id: '#PAY0133', date: '11 March, 2023', service: 'Meditation', facilitatedBy: 'Agency #1', provider: 'Provider #10', customer: 'customer10', marketPrice: '310.00 (7%)' }
  ];
} 