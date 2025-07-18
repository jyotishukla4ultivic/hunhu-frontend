import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ThemeColors } from '../models/theme.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const DEFAULT_THEME: ThemeColors = {
  primary: '#3B82F6',
  secondary: '#22C55E',
  layoutBackground: '#F5F6FA',
  contentBackground: '#F3F4F6',
  cardBackground: '#111827',
  layoutIcons: '#1E3353',
  random: '#000000',
  text: '#111827',
};

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private themeSubject = new BehaviorSubject<ThemeColors>(DEFAULT_THEME);
  theme$ = this.themeSubject.asObservable();

  constructor(private http: HttpClient) {
    this.applyTheme(DEFAULT_THEME);
  }

  setTheme(theme: ThemeColors) {
    this.themeSubject.next(theme);
    this.applyTheme(theme);
  }

  getTheme(): ThemeColors {
    return this.themeSubject.value;
  }

  /**
   * Fetch color palettes from the API
   */
  getThemePresets(params: any): Observable<any> {
    return this.http.post(`${environment.baseUrl}/theme-presets`, params);
  }

  private applyTheme(theme: ThemeColors) {
    const root = document.documentElement;
    root.style.setProperty('--primary', theme.primary);
    root.style.setProperty('--secondary', theme.secondary);
    root.style.setProperty('--layout-background', theme.layoutBackground);
    root.style.setProperty('--content-background', theme.contentBackground);
    root.style.setProperty('--card-background', theme.cardBackground);
    root.style.setProperty('--layout-icons', theme.layoutIcons);
    root.style.setProperty('--random', theme.random);
    root.style.setProperty('--text', theme.text);
  }
} 