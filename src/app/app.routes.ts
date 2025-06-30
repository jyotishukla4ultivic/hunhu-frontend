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
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: '/signin', pathMatch: 'full' }, // default route
  // other routes...
];
