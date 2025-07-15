import { Routes } from '@angular/router';
import { Signin } from './pages/signin/signin';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { AgencyComponent } from './pages/admin/agency/agency.component';
import { CategoryComponent } from './pages/admin/category/category.component';
import { PaymentHistoryComponent } from './pages/agency/payment-history/payment-history.component';
import { SettingsComponent as AdminSettingsComponent } from './pages/admin/settings/settings.component';
import { LogoutComponent } from './pages/admin/logout/logout.component';
import { AgencyDetailComponent } from './pages/admin/agency/agency-detail.component';
import { AddAgencyComponent } from './pages/admin/agency/add-agency.component';
import { AgencyProviderDetailComponent } from './pages/admin/agency/agency-provider-detail.component';
import { AgencySignin } from './pages/agency-signin/agency-signin';
import { AgencyLayoutComponent } from './components/agency-layout/agency-layout.component';
import { AgencyDashboardComponent } from './pages/agency/dashboard.component';
import { MyProvidersComponent } from './pages/agency/providers/my-providers.component';
import { ExploreProvidersComponent } from './pages/agency/providers/explore-providers.component';
import { AgencyRequestComponent } from './pages/agency/providers/agency-request.component';
import { CustomizeCategoriesComponent } from './pages/agency/providers/customize-categories.component';
import { AppointmentsComponent } from './pages/agency/appointments/appointments.component';
import { DisputesComponent } from './pages/agency/disputes/disputes.component';
import { ExploreProviderDetailComponent } from './pages/agency/providers/explore-provider-detail.component';
import { CrossAgenciesListComponent } from './pages/agency/cross-agencies-list.component';
import { SettingsComponent as AgencySettingsComponent } from './pages/agency/settings/settings.component';
import { Component } from '@angular/core';
import { ConsumerLayoutComponent } from './components/consumer-layout/consumer-layout.component';
import { ProviderLayoutComponent } from './components/provider-layout/provider-layout.component';

export const routes: Routes = [
  { path: 'signin', component: Signin },
  { path: 'agency/signin', component: AgencySignin },
  { path: 'consumer/signin', loadComponent: () => import('./pages/consumer/signin').then(m => m.default) },
  { path: 'consumer/signup', loadComponent: () => import('./pages/consumer/signup/signup.component').then(m => m.SignupComponent) },
  { path: 'provider/signin', loadComponent: () => import('./pages/provider/signin.component').then(m => m.ProviderSigninComponent) },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'agency', component: AgencyComponent },
      { path: 'agency/add', component: AddAgencyComponent },
      { path: 'agency/customize-theme', loadComponent: () => import('./pages/admin/agency/customize-theme.component').then(m => m.CustomizeThemeComponent) },
      { path: 'agency/:id', component: AgencyDetailComponent },
      { path: 'category', component: CategoryComponent },
      { path: 'payment-history', component: PaymentHistoryComponent },
      { path: 'settings', component: AdminSettingsComponent },
      { path: 'logout', component: LogoutComponent },
      { path: 'agency/:agencyId/agency-provider/:providerId', component: AgencyProviderDetailComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
  {
    path: 'agency',
    component: AgencyLayoutComponent,
    children: [
      { path: 'dashboard', component: AgencyDashboardComponent },
      { path: 'providers', redirectTo: 'providers/my-providers', pathMatch: 'full' },
      { path: 'providers/my-providers', component: MyProvidersComponent },
      { path: 'providers/explore', component: ExploreProvidersComponent },
      { path: 'providers/explore/:id', component: ExploreProviderDetailComponent },
      { path: 'providers/agency-request', component: AgencyRequestComponent },
      { path: 'providers/customize-categories', component: CustomizeCategoriesComponent },
      
      { path: 'appointments', component: AppointmentsComponent },
      { path: 'disputes', component: DisputesComponent },
      { path: 'payment-history', component: PaymentHistoryComponent },
      { path: 'cross-agencies', component: CrossAgenciesListComponent },
      { path: 'settings', component: AgencySettingsComponent },
      { path: 'logout', component: LogoutComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
  {
    path: 'consumer',
    loadComponent: () => import('./components/consumer-layout/consumer-layout.component').then(m => m.ConsumerLayoutComponent),
    children: [
      { path: 'dashboard', loadComponent: () => import('./pages/consumer/dashboard/dashboard.component').then(m => m.DashboardComponent) },
      { path: 'appointments', loadComponent: () => import('./pages/consumer/appointments/appointments.component').then(m => m.AppointmentsComponent) },
      { path: 'payment-history', loadComponent: () => import('./pages/consumer/payment-history/payment-history.component').then(m => m.PaymentHistoryComponent) },
      { path: 'disputes', loadComponent: () => import('./pages/consumer/disputes/disputes.component').then(m => m.DisputesComponent) },
      { path: 'notifications', loadComponent: () => import('./pages/consumer/notifications/notifications.component').then(m => m.NotificationsComponent) },
      { path: 'profile', loadComponent: () => import('./pages/consumer/profile/profile.component').then(m => m.ProfileComponent) },
      { path: 'settings', loadComponent: () => import('./pages/consumer/settings/settings.component').then(m => m.SettingsComponent) },
      { path: 'logout', loadComponent: () => import('./pages/consumer/logout/logout.component').then(m => m.LogoutComponent) },
      { path: 'search-services', loadComponent: () => import('./pages/consumer/search-services/search-services.component').then(m => m.SearchServicesComponent) },
      { path: 'service/:id', loadComponent: () => import('./pages/consumer/search-services/service-detail.component').then(m => m.ServiceDetailComponent) },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
  {
    path: 'provider',
    component: ProviderLayoutComponent,
    children: [
      { path: 'dashboard', loadComponent: () => import('./pages/provider/dashboard.component').then(m => m.ProviderDashboardComponent) },
      { path: 'services', loadComponent: () => import('./pages/provider/services.component').then(m => m.ProviderServicesComponent) },
      { path: 'appointments', loadComponent: () => import('./pages/provider/appointments.component').then(m => m.ProviderAppointmentsComponent) },
      { path: 'messages', loadComponent: () => import('./pages/provider/messages.component').then(m => m.ProviderMessagesComponent) },
      { path: 'payment-history', loadComponent: () => import('./pages/provider/payment-history.component').then(m => m.ProviderPaymentHistoryComponent) },
      { path: 'notification', loadComponent: () => import('./pages/provider/notification.component').then(m => m.ProviderNotificationComponent) },
      { path: 'profile', loadComponent: () => import('./pages/provider/profile.component').then(m => m.ProviderProfileComponent) },
      { path: 'logout', loadComponent: () => import('./pages/provider/logout.component').then(m => m.ProviderLogoutComponent) },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: '/signin', pathMatch: 'full' }, // default route
  // other routes...
];
