import { Component } from '@angular/core';
import { AgencySettingComponent } from './agency-setting.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [AgencySettingComponent],
  template: `<app-agency-setting></app-agency-setting>`
})
export class SettingsComponent {} 