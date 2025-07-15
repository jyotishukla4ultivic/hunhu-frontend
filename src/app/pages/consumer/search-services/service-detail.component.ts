import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-[#F7F8FA] min-h-screen w-full">
      <!-- Top Title -->
      <div class="text-xs font-medium text-gray-500 px-6 pt-4 pb-2">Service Overview</div>
      <div class="flex flex-col lg:flex-row gap-6 w-full px-2 md:px-6">
        <!-- Main Content -->
        <div class="flex-1 flex flex-col gap-6">
          <!-- Header Card -->
          <div class="bg-white rounded-xl border border-gray-200 p-6 flex flex-col gap-4">
            <div class="flex items-center gap-4">
              <img src="https://randomuser.me/api/portraits/women/1.jpg" class="w-14 h-14 rounded-full border-2 border-white shadow" />
              <div class="flex flex-col">
                <div class="font-semibold text-lg text-gray-900">Seaside Serenity Villa</div>
                <div class="text-xs text-gray-500">Monday to Friday (10:00 AM - 4:00 PM )</div>
              </div>
              <div class="flex-1"></div>
              <button class="px-5 py-2 rounded-lg bg-[#8B7CFF] text-white font-semibold text-sm flex items-center gap-2 shadow-none">Contact Provider</button>
              <button class="px-5 py-2 rounded-lg border border-[#8B7CFF] text-[#8B7CFF] font-semibold text-sm flex items-center gap-2 ml-2 shadow-none">View Profile <span class="material-icons text-base ml-1">arrow_forward</span></button>
            </div>
            <div class="font-bold text-2xl md:text-3xl text-gray-900 leading-tight mt-2">dummy text of the printing and typesetting industr\ndummy text of the printing and typeset</div>
            <div class="relative w-full h-72 rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center mt-2">
              <img src="https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg" class="w-full h-full object-cover" />
              <button class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full shadow p-4 flex items-center justify-center border border-gray-200">
                <span class="material-icons text-4xl text-[#8B7CFF]">play_arrow</span>
              </button>
            </div>
            <div class="flex items-center gap-4 mt-4">
              <img src="https://randomuser.me/api/portraits/men/2.jpg" class="w-8 h-8 rounded-full border-2 border-white shadow" />
              <div class="text-xs text-gray-500">Total Consumers<br/><span class="font-semibold text-base text-gray-900">Consumers: 67,677</span></div>
              <div class="flex-1"></div>
              <span class="flex items-center text-base text-[#FFA800] font-semibold gap-1">
                <span class="material-icons text-lg align-middle">star</span> 4.8 <span class="text-xs text-gray-400 font-normal">(451,444 Rating)</span>
              </span>
            </div>
          </div>

          <!-- About us description -->
          <div class="bg-white rounded-xl border border-gray-200 p-6">
            <div class="font-semibold text-lg mb-2 text-gray-900">About us description</div>
            <div class="text-gray-600 text-sm mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</div>
            <div class="text-gray-600 text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</div>
          </div>

          <!-- Recommended Download -->
          <div class="bg-white rounded-xl border border-gray-200 p-6">
            <div class="font-semibold text-lg mb-4 text-gray-900">Recommended Download</div>
            <div class="flex flex-col gap-3">
              <div class="flex items-center bg-[#F7F8FA] border border-gray-200 rounded-lg p-4">
                <div class="flex-1">
                  <div class="font-semibold text-sm text-gray-900 mb-1">Sample PDF Guide</div>
                  <div class="text-xs text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry</div>
                </div>
                <span class="material-icons text-green-500 ml-4">check_circle</span>
              </div>
              <div class="flex items-center bg-[#F7F8FA] border border-gray-200 rounded-lg p-4">
                <div class="flex-1">
                  <div class="font-semibold text-sm text-gray-900 mb-1">Design Assets.zip</div>
                  <div class="text-xs text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry</div>
                </div>
                <span class="material-icons text-green-500 ml-4">check_circle</span>
              </div>
            </div>
          </div>

          <!-- FAQ -->
          <div class="bg-white rounded-xl shadow p-6">
            <div class="font-semibold text-lg mb-2">Frequently asked questions</div>
            <div class="divide-y divide-gray-200">
              <details open class="py-2">
                <summary class="cursor-pointer font-medium">Lorem Ipsum is simply dummy text of the printing and typesetting industry?</summary>
                <div class="text-sm text-gray-600 mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</div>
              </details>
              <details class="py-2">
                <summary class="cursor-pointer font-medium">Lorem Ipsum is simply dummy text of the printing and typesetting industry?</summary>
                <div class="text-sm text-gray-600 mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</div>
              </details>
              <details class="py-2">
                <summary class="cursor-pointer font-medium">Lorem Ipsum is simply dummy text of the printing and typesetting industry?</summary>
                <div class="text-sm text-gray-600 mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</div>
              </details>
            </div>
          </div>

          <!-- Services -->
          <div class="bg-white rounded-xl shadow p-6">
            <div class="font-semibold text-lg mb-2">Services</div>
            <div class="flex gap-4 overflow-x-auto">
              <div class="min-w-[220px] bg-white rounded-lg p-4 flex flex-col items-center border border-gray-100">
                <img src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg" class="w-20 h-20 object-cover rounded-full mb-2" />
                <div class="flex items-center gap-2 mb-1">
                  <img src="https://randomuser.me/api/portraits/women/4.jpg" class="w-6 h-6 rounded-full border-2 border-white shadow" />
                  <span class="font-semibold text-sm">Yoga Session</span>
                </div>
                <div class="flex items-center gap-1 text-xs text-orange-500 font-semibold mb-1">
                  <span class="material-icons text-base align-middle">star</span> 5.0
                </div>
                <div class="text-xs text-gray-500">$100</div>
              </div>
              <div class="min-w-[220px] bg-white rounded-lg p-4 flex flex-col items-center border border-gray-100">
                <img src="https://images.pexels.com/photos/317157/pexels-photo-317157.jpeg" class="w-20 h-20 object-cover rounded-full mb-2" />
                <div class="flex items-center gap-2 mb-1">
                  <img src="https://randomuser.me/api/portraits/men/5.jpg" class="w-6 h-6 rounded-full border-2 border-white shadow" />
                  <span class="font-semibold text-sm">Meditation Class</span>
                </div>
                <div class="flex items-center gap-1 text-xs text-orange-500 font-semibold mb-1">
                  <span class="material-icons text-base align-middle">star</span> 4.8
                </div>
                <div class="text-xs text-gray-500">$80</div>
              </div>
            </div>
          </div>

          <!-- Course Rating -->
          <div class="bg-white rounded-xl shadow p-6">
            <div class="font-semibold text-lg mb-2">Course Rating</div>
            <div class="flex items-center gap-4">
              <div class="text-4xl font-bold">4.8</div>
              <div class="flex-1">
                <div class="flex items-center gap-2 text-sm mb-1"><span class="w-24">5 stars</span><div class="flex-1 h-2 bg-gray-200 rounded"><div class="h-2 rounded bg-[#8280FF]" style="width: 80%"></div></div><span>80%</span></div>
                <div class="flex items-center gap-2 text-sm mb-1"><span class="w-24">4 stars</span><div class="flex-1 h-2 bg-gray-200 rounded"><div class="h-2 rounded bg-[#8280FF]" style="width: 15%"></div></div><span>15%</span></div>
                <div class="flex items-center gap-2 text-sm mb-1"><span class="w-24">3 stars</span><div class="flex-1 h-2 bg-gray-200 rounded"><div class="h-2 rounded bg-[#8280FF]" style="width: 3%"></div></div><span>3%</span></div>
                <div class="flex items-center gap-2 text-sm mb-1"><span class="w-24">2 stars</span><div class="flex-1 h-2 bg-gray-200 rounded"><div class="h-2 rounded bg-[#8280FF]" style="width: 1%"></div></div><span>1%</span></div>
                <div class="flex items-center gap-2 text-sm mb-1"><span class="w-24">1 star</span><div class="flex-1 h-2 bg-gray-200 rounded"><div class="h-2 rounded bg-[#8280FF]" style="width: 1%"></div></div><span>1%</span></div>
              </div>
            </div>
          </div>

          <!-- Students Feedback -->
          <div class="bg-white rounded-xl shadow p-6">
            <div class="font-semibold text-lg mb-2">Students Feedback</div>
            <div class="flex flex-col gap-4">
              <div class="flex items-center gap-3">
                <img src="https://randomuser.me/api/portraits/men/2.jpg" class="w-10 h-10 rounded-full" />
                <div>
                  <div class="font-semibold">John Doe</div>
                  <div class="text-xs text-gray-500">"Great experience, learned a lot!"</div>
                </div>
              </div>
              <div class="flex items-center gap-3">
                <img src="https://randomuser.me/api/portraits/women/3.jpg" class="w-10 h-10 rounded-full" />
                <div>
                  <div class="font-semibold">Jane Smith</div>
                  <div class="text-xs text-gray-500">"Instructors were very helpful and the environment was peaceful."</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="w-full lg:w-[370px] flex-shrink-0 flex flex-col gap-6">
          <!-- Session Card -->
          <div class="bg-white rounded-xl border border-gray-200 p-6 flex flex-col gap-4">
            <div class="font-semibold text-lg text-gray-900 mb-1">Session</div>
            <div class="text-xs text-gray-400 mb-2">Note: Not satisfied? Get a full refund within 7 days of your session.</div>
            <div class="flex items-center justify-between mb-2">
              <div class="font-semibold text-base text-gray-900">Basic Session</div>
              <div class="font-semibold text-base text-gray-900">$100.00</div>
              <input type="radio" checked class="accent-[#8B7CFF] ml-2" />
            </div>
            <div class="flex flex-col gap-1 text-sm text-gray-700 mb-2">
              <div class="flex justify-between"><span>Basic</span><span>1h session</span></div>
              <div class="flex justify-between"><span>Session Prize</span><span>$100.00</span></div>
              <div class="flex justify-between"><span>Consumer Enrolled</span><span>69,419,000</span></div>
              <div class="flex justify-between"><span>Language</span><span>English</span></div>
            </div>
            <button class="w-full px-4 py-2 rounded-lg bg-[#8B7CFF] text-white font-semibold text-sm mt-2">Book A Session</button>
            <button class="w-full px-4 py-2 rounded-lg border border-[#8B7CFF] text-[#8B7CFF] font-semibold text-sm mt-2">View Availability</button>
            <div class="text-xs text-gray-400 mt-2">Note: Not satisfied? Get a full refund within 7 days of your session.</div>
            <div class="flex items-center gap-2 mt-4">
              <span class="text-xs text-gray-500">Share this service:</span>
              <button class="bg-gray-100 rounded p-1"><span class="material-icons text-base">content_copy</span></button>
              <button class="bg-gray-100 rounded p-1"><span class="material-icons text-base">facebook</span></button>
              <button class="bg-gray-100 rounded p-1"><span class="material-icons text-base">twitter</span></button>
              <button class="bg-gray-100 rounded p-1"><span class="material-icons text-base">email</span></button>
            </div>
          </div>

          <!-- Custom Session Card -->
          <div class="bg-white rounded-xl border border-gray-200 p-6 flex flex-col gap-4">
            <div class="font-semibold text-lg text-gray-900 mb-1">Custom Session</div>
            <div class="text-xs text-gray-400 mb-2">Note: Not satisfied? Get a full refund within 7 days of your session.</div>
            <div class="flex items-center gap-2 mb-2">
              <img src="https://randomuser.me/api/portraits/women/6.jpg" class="w-10 h-10 rounded-full" />
              <div>
                <div class="font-semibold text-gray-900">Jessica</div>
                <div class="text-xs text-gray-500">Yoga Instructor</div>
              </div>
            </div>
            <div class="flex flex-col gap-1 text-sm text-gray-700 mb-2">
              <div class="flex justify-between"><span>Regular</span><span>1h session</span></div>
              <div class="flex justify-between"><span>Session Prize</span><span>$100.00</span></div>
              <div class="flex justify-between"><span>Repeat Day</span><span>Monday</span></div>
              <div class="flex justify-between"><span>Consumer Enrolled</span><span>64,419,000</span></div>
              <div class="flex justify-between"><span>Language</span><span>English</span></div>
            </div>
            <button class="w-full px-4 py-2 rounded-lg bg-[#8B7CFF] text-white font-semibold text-sm mt-2">Book Now</button>
          </div>

          <!-- Get Bundle Card -->
          <div class="bg-white rounded-xl border border-gray-200 p-6 flex flex-col gap-4 relative">
            <div class="absolute -top-4 -right-4 bg-[#8B7CFF] text-white text-xs font-bold px-3 py-1 rounded-lg shadow">Get 10% Off</div>
            <div class="font-semibold text-lg text-gray-900 mb-1">Get Bundle</div>
            <div class="text-xs text-gray-400 mb-2">Note: Not satisfied? Get a full refund within 7 days of your session.</div>
            <div class="flex flex-col gap-1 text-sm text-gray-700 mb-2">
              <div class="flex justify-between"><span>5 Sessions</span><span>$500.00</span></div>
              <div class="flex justify-between"><span>Validity</span><span>30 days</span></div>
            </div>
            <button class="w-full px-4 py-2 rounded-lg bg-[#2196F3] text-white font-semibold text-sm mt-2">Get Bundle</button>
          </div>

          <!-- 5 Session Card -->
          <div class="bg-white rounded-xl border border-gray-200 p-6 flex flex-col gap-4">
            <div class="font-semibold text-lg text-gray-900 mb-1">5 Session <span class="text-xs text-gray-400">($80/per session)</span></div>
            <div class="flex items-center gap-2 mt-2">
              <span class="material-icons text-base text-gray-400">check_circle</span>
              <span class="text-xs text-gray-500">Bundle Duration</span>
              <span class="flex-1"></span>
              <span class="material-icons text-base text-gray-400">download</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ServiceDetailComponent {
  serviceId: string | null = null;
  constructor(private route: ActivatedRoute) {
    this.serviceId = this.route.snapshot.paramMap.get('id');
  }
} 