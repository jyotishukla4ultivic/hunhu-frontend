import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-provider-signin',
  standalone: true,
  template: `
<div class="flex flex-col min-h-screen font-sans relative">
  <!-- Left: Purple background with logo, banner, text, and login card -->
  <div
    class="flex flex-col w-full bg-[#8280FF] p-10 text-white relative bg-no-repeat bg-contain bg-[position:30%_center] px-[73px]"
    style="background-image: url('assets/icons/signInBannerImg.svg');">
    <!-- Logo -->
    <img src="../../../assets/icons/logo.svg" alt="Logo" class="w-16 h-16 mb-6" />
    <!-- Title & Subtitle -->
    <div class="mt-8">
      <h1 class="text-3xl font-bold mb-2">Sign in to Provider</h1>
      <p class="text-lg mb-1">
        Your personalized marketplace platform.<br />
      </p>
      <p class="text-sm opacity-80">
      Empower your customers to find trusted providers <br /> and drive meaningful value throughout your network.
      </p>
    </div>
  </div>
  <!-- Right: White card with Material form -->
  <div class="flex w-full justify-between bg-white">
    <div class="w-full max-w-md top-[79px] right-[118px] absolute">
      <div class="bg-white rounded-[2rem] shadow-2xl p-10">
        <h2 class="text-lg font-medium mb-1 text-black">Welcome to <span class="text-[#8280FF] font-bold">Hunhu Provider</span>
        </h2>
        <h1 class="text-4xl font-bold mb-6 text-black">Sign in</h1>
        <!-- Google Sign In Button -->
        <button
          class="flex items-center w-full bg-[#e8f0fe] border border-gray-200 rounded-lg px-4 py-3 mb-6 hover:bg-[#d2e3fc] transition mt-[43px]">
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google"
            class="w-5 h-5 mr-2" />
          <span class="text-[#8280FF] font-medium">Sign in with Google</span>
        </button>
        <!-- Username Field -->
        <div class="w-full mb-4 mt-[52px]">
          <label class="block text-sm font-medium text-black mb-1">Enter your username or email address</label>
          <input type="text" placeholder="Username or email address"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#8280FF] focus:border-transparent placeholder-gray-400" />
        </div>
        <!-- Password Field -->
        <div class="w-full mb-2 mt-[38px]">
          <label class="block text-sm font-medium text-black mb-1">Enter your Password</label>
          <input type="password" placeholder="Password"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#8280FF] focus:border-transparent placeholder-gray-400" />
        </div>
        <!-- Forgot Password -->
        <div class="flex justify-end mb-6">
          <a href="#" class="text-xs text-[#8280FF] hover:underline">Forgot Password</a>
        </div>
        <!-- Sign in Button -->
        <button
          class="w-full py-3 mb-5 rounded-[5px] !bg-[#8280FF] !text-white !shadow-none hover:!bg-[#6a68cc] transition text-lg"
          style="border-radius: 5px;"
          (click)="onSignIn()">
          Sign in
        </button>
      </div>
    </div>
  </div>
</div> 
  `
})
export class ProviderSigninComponent {
  constructor(private router: Router) {}

  onSignIn() {
    this.router.navigate(['/provider/dashboard']);
  }
} 