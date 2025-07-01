import { Routes } from '@angular/router';
import { Signin } from './pages/signin/signin';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { AgencyComponent } from './pages/admin/agency/agency.component';
import { CategoryComponent } from './pages/admin/category/category.component';
import { PaymentHistoryComponent } from './pages/admin/payment-history/payment-history.component';
import { SettingsComponent } from './pages/admin/settings/settings.component';
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
import { Component } from '@angular/core';

export const routes: Routes = [
  { path: 'signin', component: Signin },
  { path: 'agency/signin', component: AgencySignin },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'agency', component: AgencyComponent },
      { path: 'agency/add', component: AddAgencyComponent },
      { path: 'agency/:id', component: AgencyDetailComponent },
      { path: 'category', component: CategoryComponent },
      { path: 'payment-history', component: PaymentHistoryComponent },
      { path: 'settings', component: SettingsComponent },
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
      { path: 'providers/agency-request', component: AgencyRequestComponent },
      { path: 'providers/customize-categories', component: CustomizeCategoriesComponent },
      { path: 'appointments', component: AppointmentsComponent },
      { path: 'disputes', component: DisputesComponent },
      { path: 'payment-history', component: PaymentHistoryComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'logout', component: LogoutComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: '/signin', pathMatch: 'full' }, // default route
  // other routes...
];
