import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProviderCardComponent } from '../../../components/common-components/provider-card.component';
import { AddProviderModalComponent } from './add-provider-modal.component';
// Import the stat card or common card component if needed

@Component({
  selector: 'app-my-providers',
  standalone: true,
  imports: [CommonModule, ProviderCardComponent, AddProviderModalComponent],
  templateUrl: './my-providers.component.html'
})
export class MyProvidersComponent {
  providers = [
    {
      name: 'Wade Warren',
      image: 'https://randomuser.me/api/portraits/women/1.jpg',
      categories: ['Category', 'Category', 'Category'],
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      appointments: 328, 
    },
    {
      name: 'Wade Warren',
      image: 'https://randomuser.me/api/portraits/women/2.jpg',
      categories: ['Category', 'Category', 'Category'],
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      appointments: 328, 
    },
    // ...add more mock providers as needed
  ];

  showAddProviderModal = false;

  onViewProfile(provider: any) {
    console.log('View profile for', provider);
  }

  openAddProviderModal() {
    this.showAddProviderModal = true;
  }

  closeAddProviderModal() {
    this.showAddProviderModal = false;
  }
} 