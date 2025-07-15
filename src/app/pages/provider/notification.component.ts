import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-provider-notification',
  standalone: true,
  imports: [CommonModule],
  template: `<div class='flex items-center justify-center min-h-[60vh] text-2xl font-bold text-[#8B7CFF]'>Notification</div>`
})
export class ProviderNotificationComponent {} 