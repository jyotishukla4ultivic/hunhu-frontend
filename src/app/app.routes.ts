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

export const routes: Routes = [
  { path: 'signin', component: Signin },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'agency', component: AgencyComponent },
      { path: 'agency/add', component: AddAgencyComponent },
      {
        path: 'agency/:id', component: AgencyDetailComponent,  data: { renderMode: 'no-prerender' } 
      },
      { path: 'category', component: CategoryComponent },
      { path: 'payment-history', component: PaymentHistoryComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'logout', component: LogoutComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: '/signin', pathMatch: 'full' }, // default route
  // other routes...
];
